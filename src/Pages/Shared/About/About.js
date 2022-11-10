import React from 'react';
import img1 from '../../../images/38bcf751-c8f5-4bce-ac9a-c7c83d5e3cd8.webp'
import img2 from '../../../images/maxresdefault.jpg'
import img3 from '../../../images/download.jpeg'
import img4 from '../../../images/1390921-fire-haircut-1123.webp'
import useTitle from '../../../Hoocks/useTitle';

const About = () => {
    useTitle('About')
    return (
        <div>
            <div className='m-7 text-center '>
                <h1 className='text-4xl font-bold'>Barber</h1>
                <br />
                <h1>:Barbers are a specific kind of hairstylist or cosmetologist professional that primarily treats male clientele. They cut, trim, shampoo and condition hair. They may also style hair using hot styling tools and hairstyling products. Some barbers are licensed to color or highlight hair or chemically alter hair textures.</h1>
            </div>
            <div className="carousel w-3/4 mx-auto mb-6 rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;