// @ts-ignore
import exampleOne from '../../assets/scss/images/exampleOne.png';
//@ts-ignore
import examploTwo from '../../assets/scss/images/exampleTwo.png';
//@ts-ignore
import examploThree from '../../assets/scss/images/exampleThree.png';

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
  title: 'DOCUMENTAÇÃO/Carousel',
};

export const Carousel = () => ({
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
<div class="container">
<div class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
     <button type="button" data-bs-target="#" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
     <button type="button" data-bs-target="#" data-bs-slide-to="1" aria-label="Slide 2"></button>
     <button type="button" data-bs-target="#" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
     <div class="carousel-item active">
        <img :src="srcOne" class="d-block w-100" :alt="altOne">
        <div class="carousel-caption d-none d-md-block">
           <h5>Second slide label</h5>
           <p>Some representative placeholder content for the second slide</p>
        </div>
     </div>
     <div class="carousel-item">
        <img :src="srcTwo" class="d-block w-100" :alt="altTwo">
        <div class="carousel-caption d-none d-md-block">
           <h5>Second slide label</h5>
           <p>Some representative placeholder content for the second slide.</p>
        </div>
     </div>
     <div class="carousel-item">
        <img :src="srcThree" class="d-block w-100" :alt="altThree">
        <div class="carousel-caption d-none d-md-block">
           <h5>Third slide label</h5>
           <p>Some representative placeholder content for the third slide.</p>
        </div>
     </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
  </button>
</div>
</div>`,
});
