import hero1 from '../../public/DesktopAR.jpg';
import hero2 from '../../public/2021_Facebook_icon.svg.webp';
import { Link } from 'react-router-dom';


const carouselImages = ['https://dfcdn.defacto.com.tr/df/1600//Mobile/en_underwear_9029a044-36ae-4354-a690-7d34109f94b9_c1908f82-4d14-46f5-8dc4-6716faa99230_DI_365.jpg',
                        'https://dfcdn.defacto.com.tr/df/1600//Mobile/en_polo-t-shirts_29f9a1b3-09ab-44ee-96c3-d2f9ed1fd24c_f6844958-c9f1-4d88-b236-eaaa32d375bb_DI_365.jpg',
                        'https://dfcdn.defacto.com.tr/df/1600//Mobile/m-s-r_en_trousers_d824aba9-0ebf-4dd1-be2c-b70ca9cfd020_a9b35d99-bb3c-4e06-b582-5a0547f84842_DI_365.jpg'
                        ];

const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-24 items-center w-4/5 mx-auto my-20">
            <div>
                <h1 className="max-w-2xl text-4xl font-bold sm:text-6xl">
                    We are changing the way people shop
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                    repellat explicabo enim soluta temporibus asperiores aut obcaecati
                    perferendis porro nobis.
                </p>
                <div className="mt-10">
                    <Link to="/products" className="btn bg-orange-500">
                        Our products
                    </Link>
                </div>
            </div>
            <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
                {carouselImages.map((item) => {
                    return (
                        <div key={item} className="carousel-item">
                            <img src={item} className="rounded-box h-full w-80 object-cover" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Hero