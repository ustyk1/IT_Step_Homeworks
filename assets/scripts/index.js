import { $, setStyles, Movable } from './dom-utiles.js';

setStyles($('body'), {
  margin: '0',
});

setStyles($('.wrapper'), {
  background: 'url(\'./assets/img/background.jpg\') no-repeat center/cover',

  height: '100vh',
  width: '900px',
  overflow: 'hidden',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  margin: '0px auto',

  position: 'relative'
});

setStyles($('.angle', { isCollection: true }), {
  background: 'url(\'./assets/img/angle.png\') no-repeat center center/contain',
  
  width: '350px',
  height: '350px',

  position: 'absolute'
});

setStyles($('.angle_top-right'), {
  transform: 'translateX(0px) rotate(-135deg)',
  top: '-50px',
  right: '-50px'
});

setStyles($('.angle_top-left'), {
  transform: 'translateX(0px) rotate(135deg)',

  top: '-50px',
  left: '-50px',
  zIndex: '3',

  pointerEvents: 'none'
});

setStyles($('.angle_bottom-right'), {
  transform: 'translateX(0px) rotate(-45deg)',

  bottom: '-50px',
  right: '-50px',
  zIndex: '3'
});

setStyles($('.angle_bottom-left'), {
  transform: 'translateX(0px) rotate(45deg)',

  bottom: '-50px',
  left: '-50px'
});

setStyles($('.inner-wrapper'), {
  backdropFilter: 'blur(3px)',
  ['-webkit-backdrop-filter']:  'blur(3px)',
  background: 'url(\'./assets/img/background-center.jpg\') no-repeat center/cover',
  
  height: '500px',
  width: '500px',
  overflow: 'hidden',

  border: '5px solid rgba(209, 226, 196, 0.8)',
  borderRadius: '30px',

  position: 'relative'
});

setStyles($('.blur-wrapper'), {
  backdropFilter: 'blur(3px)',
  ['-webkit-backdrop-filter']: 'blur(3px)',

  position: 'absolute',
  inset: '0',
});

setStyles($('.puzzle', { isCollection: true }), {
  width: '150px',
  height: '150px',

  margin: '0',
  cursor: 'move',

  position: 'absolute'
});

const $puzzleTopRight = $('.puzzle_top-right');

const puzzleTopRight = new Movable($puzzleTopRight);
setStyles($puzzleTopRight, {
  background: 'url(\'./assets/img/puzzle-2.png\') no-repeat center center/contain',
  
  top: '50px',
  right: '50px',
  zIndex: '1'
});

const $puzzleTopLeft = $('.puzzle_top-left');

const puzzleTopLeft = new Movable($puzzleTopLeft);
setStyles($puzzleTopLeft, {
  background: 'url(\'./assets/img/puzzle-1.png\') no-repeat center center/contain',

  top: '50px',
  left: '50px',
  zIndex: '1'
});

const $puzzleBottomLeft = $('.puzzle_bottom-left');

const puzzleBottomLeft = new Movable($puzzleBottomLeft);
setStyles($puzzleBottomLeft, {
  background: 'url(\'./assets/img/puzzle-4.png\') no-repeat center center/contain',

  bottom: '50px',
  left: '50px',
  zIndex: '1'
});

const $puzzleBottomRight = $('.puzzle_bottom-right');

const puzzleBottomRight = new Movable($puzzleBottomRight);
setStyles($puzzleBottomRight, {
  background: 'url(\'./assets/img/puzzle-3.png\') no-repeat center center/contain',

  bottom: '50px',
  right: '50px',
  zIndex: '1'
});

setStyles($('.background-top'), {
  background: 'url(\'./assets/img/layer-top.png\') no-repeat center center/cover',
  
  width: '100%',
  height: '170px',

  position: 'absolute',
  top: '0',
  zIndex: '2',

  pointerEvents: 'none'
});

setStyles($('.background-bottom'), {
  background: 'url(\'./assets/img/layer-bottom.png\') no-repeat center center/cover',
  
  width: '100%',
  height: '170px',
  
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: '2',

  pointerEvents: 'none'
});

