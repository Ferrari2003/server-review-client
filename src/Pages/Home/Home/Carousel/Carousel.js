import React from 'react';
import photo from '../../../../images/d6pp54b-90f62eb6-f2c9-457d-b69b-e218396974bf.jpg'
import photo1 from '../../../../images/t600x362.jpg'
import photo2 from '../../../../images/maxresdefault.jpg'


const Carousel = () => {
    return (
    <div className=''>
        
            <div className="carousel w-full rounded-lg">
        <div id="item1" className="carousel-item w-full">
          <img src={photo} alt='' className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src={photo1} alt='' className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src={photo2} alt='' className="w-full" />
        </div> 
      
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs ">1</a> 
        <a href="#item2" className="btn btn-xs ">2</a> 
        <a href="#item3" className="btn btn-xs ">3</a> 
      </div>
    </div>
    );
};

export default Carousel;