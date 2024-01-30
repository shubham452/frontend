import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData'

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length=SliderData.length;
    function prevSlide()
    {
        setCurrent(current===0 ? length-1:current);
    }
    function nextSlide()
    {
        setCurrent(current===(length-1) ? 0: current+1);
    }
  return (
    <div className='image'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {SliderData.map((slide,index)=>{
            return(
            <div className={index===current?'active_slide':'passive_slide'}>
            {index === current && (
                <img src={slide.image} className='pic'/>
            )}
            </div>
            );
        })}
    </div>
  );
};

export default ImageSlider