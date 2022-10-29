const $ = (selector, { isCollection } = {}) => {
  return document[ isCollection ? 'querySelectorAll' : 'querySelector' ](selector);
};

const setStyles = ($el, styles) => {
  if (!$el) return console.error('Element is undefined at setStyles...');

  if ($el.length) {

    $el.forEach((item) => {
      setStyles(item, styles);
    });

    return;
  }

  Object.entries(styles).forEach(([key, val]) => $el.style[key] = val);
};

class Movable {
  newPosX = 0;
  newPosY = 0;

  startPosX = 0;
  startPosY = 0;

  constructor ($el, { startPosX, startPosY } = {}) {

    this.$el = $el;

    if (startPosX) {
      this.startPosX = startPosX;
    }
    if (startPosY) {
      this.startPosY = startPosY;
    }

    this.$el.addEventListener('mousedown', this.mousedown.bind(this))
  }
  
  mousedown(e) {

    this.mouseup();

    this.startPosX = e.clientX;
    this.startPosY = e.clientY;

    this.$el.style.zIndex = 100;

    this.mouseMove = this.mouseMove.bind(this);
    this.mouseup = this.mouseup.bind(this);

    document.addEventListener('mousemove', this.mouseMove);
    document.addEventListener('mouseup', this.mouseup);
  };

  mouseup() {
    this.$el.style.zIndex = 1;

    document.removeEventListener('mousemove', this.mouseMove);
    document.removeEventListener('mouseup', this.mouseup);
  };

  mouseMove(e) {
    this.newPosX = this.startPosX - e.clientX;
    this.newPosY = this.startPosY - e.clientY;

    this.startPosX = e.clientX;
    this.startPosY = e.clientY;

    this.$el.style.top = `${this.$el.offsetTop - this.newPosY}px`;
    this.$el.style.left = `${this.$el.offsetLeft - this.newPosX}px`;
  };
}

export {
  $,
  setStyles,

  Movable
};


