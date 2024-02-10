"use client"
import '../style/carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './card'
export default function Categoria({titulo = 'Mis juegos'}) {
    const responsive = {
        superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1300 },
              items: 6
            },
            tablet: {
              breakpoint: { max: 1300, min: 700 },
              items: 3
            },
            mobile: {
              breakpoint: { max: 700, min: 480 },
              items: 2
            },
            mobiles: {
              breakpoint: { max: 480, min: 0 },
              items: 1
            }
          };
  return (
    <>
    <div className="titulo">
        <div>{titulo}</div>
    </div>
    <Carousel responsive={responsive} infinite={true} >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Carousel>
      </>
  )
}
