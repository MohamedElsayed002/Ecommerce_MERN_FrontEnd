



import React, { useState, useEffect } from 'react';
import {peopleData} from '../data';

function Sidebar() {
    const [people, setPeople] = useState(peopleData);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
            <div className="section-center md:!w-[99%]">
                {people.map((person, personIndex) => {
                    const { id, image } = person;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={id} className="w-[100%]  object-cover" />
                        </article>
                    );
                })}
            </div>
    );
}

export default  Sidebar





// const Carousel = () => {



//     return (
//         <>
//                 <div className=" hidden lg:carousel ">
//                     <div id="slide1" className="carousel-item relative w-full">
//                         <img style={{ objectFit: 'cover' }} src="https://cdnprod.mafretailproxy.com/assets/images/Hero_Banner_Iftaar_Food_copy_3f75540dce.png" className="w-full" />
//                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                             <a href="#slide4" className="btn btn-circle">❮</a>
//                             <a href="#slide2" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide2" className="carousel-item relative w-full">
//                         <img style={{ objectFit: 'cover' }} src="https://cdnprod.mafretailproxy.com/assets/images/Homepage_Hero_Banner_Web_1232x280_En_9850a164c9.png" className="w-full" />
//                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                             <a href="#slide1" className="btn btn-circle">❮</a>
//                             <a href="#slide3" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide3" className="carousel-item relative w-full">
//                         <img style={{ objectFit: 'cover' }} src="https://cdnprod.mafretailproxy.com/assets/images/HPB_Desktop_841efd38a2.png" className="w-full" />
//                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                             <a href="#slide2" className="btn btn-circle">❮</a>
//                             <a href="#slide4" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide4" className="carousel-item relative w-full">
//                         <img style={{ objectFit: 'cover' }} src="https://cdnprod.mafretailproxy.com/assets/images/cooking_w_CTA_copy_7ceb5e9f64.png" className="w-full" />
//                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                             <a href="#slide3" className="btn btn-circle">❮</a>
//                             <a href="#slide1" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                 </div>
//         </>
//     )
// }


// export default Carousel