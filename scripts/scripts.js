class Card {
  constructor(id, imagePath, cardName, collectionName, priceUsd, priceEth, priceFloorProce) {
    this.id = id;
    this.imagePath = imagePath;
    this.cardName = cardName;
    this.collectionName = collectionName;
    this.prices = {
      usd: priceUsd,
      eth: priceEth,
      floorPrice: priceFloorProce
    };
  }
}

const data = [
  new Card('card-1', '../img/image_1.png', 'COOLGUYZZ', 'Coolguyzz.io', '$2045.12', '1.5 ETH', '-12.45%'),
  new Card( 'card-2', '../img/image_2.png', 'HyperApe', 'HyperApe.co', '$1743.4', '1.31 ETH', '-5.6%'),
  new Card( 'card-3', '../img/image_3.png', 'CuteApe White', 'CuteApe_99', '$245.6', '0.045 ETH', '-14.5%'),
  new Card( 'card-4', '../img/image_4.png', 'cvltB3AR', 'CVLTBEAR ', '$545', '0.88 ETH', '+12.45%'),
  new Card( 'card-5', '../img/image_5.png', 'Lyodd$1', 'Naomi Po', '$1670', '1.156 ETH', '+12.45%'),
  new Card( 'card-6', '../img/image_6.png', 'SneakerHead Vol.1', 'SneakerHead.Corp', '$1790', '1.4 ETH', '+67.9%'),
  new Card( 'card-7', '../img/image_7.png', 'Azuki 3D', 'AZUKI.JP', '$1907', '1.5 ETH', '+1.6%')
];

const generateCard = ( { id, imagePath, cardName, collectionName, prices: { usd, eth, floorPrice } } ) => {
  return `
    <li id="${id}" class="card__item">
      <div class="card__image-wrapper">
        <img src="${imagePath}">
      </div>
      <p class="card__name">${cardName}</p>
      <p class="card__collection-name">${collectionName}</p>
      <div class="prices">
        <p class="price__eth">${eth}</p>
        <p class="price__usd">${usd}</p>
        <p class="price__floor-price">Floor Price </p>
        <p class="price__percent">${floorPrice}</p>
      </div>
    </li>
  `;
};

const getNext = (data, id, direction) => {
  let currIdx = data.findIndex(item => item.id === id);
  let nextIdx = 0;

  if (direction === 'next') {
    if (data[++currIdx]) nextIdx = currIdx;
  } else if (direction === 'prev') {
    if (!data[currIdx - 1]) {
      nextIdx = data.length - 1;
    } else {
      nextIdx = currIdx - 1;
    }
  } 
  return data[nextIdx];
};

const clickHandler = ({ direction }) => {
  const currCardId =  document.querySelector('.card__item').id;

  const nextCardData = getNext(data, currCardId, direction);
  $cardContainer.innerHTML = generateCard(nextCardData);

  const newCard = document.querySelector('.card__item');
  window.getComputedStyle(newCard).opacity;
  newCard.classList.add('opacity');
};

const toggleButtonsStyles = ({ disabled }) => {
  document.querySelectorAll('button').forEach(button => {
    button.disabled = disabled;
  });
}

const $cardContainer = document.getElementById('card');

const $prev = document.getElementById('prev');  
const $next = document.getElementById('next');

$prev.addEventListener('click', () => {
  clickHandler({direction: 'prev'});
});

$next.addEventListener('click', () => {
  clickHandler({direction: 'next'});
});

$cardContainer.innerHTML = generateCard(data[0]);
document.querySelector('.card__item').classList.add('opacity');

let timer;

document.querySelector('#toggle').addEventListener('change', (e) => {
  if (e.currentTarget.checked) {
    toggleButtonsStyles({ disabled: true });
    timer = setInterval(() => {

      clickHandler({direction: 'next'});
      // toggleButtonsStyles({ disabled: true });
    }, 1300);
  } else {
    clearInterval(timer);
    toggleButtonsStyles({ disabled: false });
  }
});
