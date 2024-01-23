import React, { useState } from 'react';
import './Slider.scss';
import circleBlack from '../../img/tool-circle-black.svg'
import circleGray from '../../img/tool-circle-gray.svg'
import image from '../../img/image-parfume.png';

type Image = {
  path: string;
  id: number;
};

type Props = {
  images: Image[];
};

export const Slider: React.FC<Props> = ({ images }) => {
  const [currentSlide] = useState(0);

  return (
    <section className='Slider'>
      <div className="Slider__content">
        <div className="Slider__button Slider__button--left"></div>

        <div className="Slider__description">
          <h1 className="Slider__title">
            Welcome to the wonderful world of perfumery PerfuMe!
          </h1>
          
          <p className="Slider__text">
            Our online store specializes in selling original perfumes. We offer a large selection of fragrances of popular and well-known brands, the quality of which is beyond doubt. We work exclusively with verified distributors and verified partners. Our prices will pleasantly surprise you!
          </p>
        </div>

        <div className="Slider__image">
          {images.map((_image, index) => index === currentSlide)}
          <img src={image} alt="" />
        </div>

        <div className="Slider__button"></div>
      </div>

      <div className="Slider__pages">
        {images.map((image, index) => (
          index === 0 ? (
            <img
              src={circleBlack}
              alt="Page"
              key={image.id}
            />
          ) : (
            <img
              src={circleGray}
              alt="Page"
              key={image.id}
            />
          )
        ))}
      </div>
    </section>
  );
};
