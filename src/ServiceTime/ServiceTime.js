import React from 'react';


const ServiceTime = () => {
    return (
      <div className='flex justify-center '>

          <div className="stats shadow bg-blue-600 p-4 mb-9 rounded">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                 
                <div className="stat-title">We are open monday-friday</div>
                <div className="stat-value text-primary">10:am 10:pm</div>
                
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title">Have a question</div>
                <div className="stat-value text-secondary">+25468623596 </div>
                
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                   
                </div>
                
                <div className="stat-title">Need a repair? our address </div>
                <div className="stat-value text-secondary">Manikganj </div>
            </div>
        </div>
      </div>
    );
}; 

export default ServiceTime;