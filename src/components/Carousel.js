import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Carousel.scss';


const Slider = () => (
    <Carousel slide={false} className='mx-5 px-2 py-2 carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.picsum.photos/id/818/1080/608.jpg?hmac=S3FdyKgIPuOjK6BmIBQm8VILeMmCuQIaMSyiVzSvCU8"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.picsum.photos/id/401/1080/608.jpg?hmac=TpvpqJ8DBTxXgL2Uyv2L8YnGkFCLkiAQaOCPdPr_F1Y"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 -80"
          src="https://i.picsum.photos/id/950/1080/608.jpg?hmac=UiMdYK1-wNVbPqROPu2T0MfIAz97QoCpkUyOp4fzzDg"
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
);

export default Slider