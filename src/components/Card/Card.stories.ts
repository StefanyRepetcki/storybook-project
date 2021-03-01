// @ts-ignore
import exampleOne from '../../assets/images/exampleOne.png';
//@ts-ignore
import examploTwo from '../../assets/images/exampleTwo.png';
//@ts-ignore
import examploThree from '../../assets/images/exampleThree.png';

const imgOne = {
  src: exampleOne,
  alt: 'teste',
}

const imgTwo = {
  src: examploTwo,
  alt: 'teste',
}

const imgThree = {
  src: examploThree,
  alt: 'teste',
}

export default {
  title: 'DOCUMENTAÇÃO/Card',
};

export const Card = () => ({
  props: {
    srcOne: {
      default: () => imgOne.src,
    },
    altOne: {
      default: () => imgOne.alt,
    },
    srcTwo: {
      default: () => imgTwo.src,
    },
    altTwo: {
      default: () => imgTwo.alt,
    },
    srcThree: {
      default: () => imgThree.src,
    },
    altThree: {
      default: () => imgThree.alt,
    },
  },
  template: `
<div class="container d-flex flex-row justify-content-between">
  <div class="card" style="width: 18rem;">
     <img :src="srcOne" class="card-img-top" :alt="altOne">
     <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     </div>
  </div>
  <div class="card" style="width: 18rem;">
     <img :src="srcTwo" class="d-block w-100" :alt="altTwo">
     <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     </div>
  </div>
  <div class="card" style="width: 18rem;">
     <img :src="srcThree" class="d-block w-100" :alt="altThree">
     <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     </div>
  </div>
</div>`,
});
