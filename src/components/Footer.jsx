import useMediaQuery from "../Hooks/useMediaQuery"
import Facebook from '../../public/2021_Facebook_icon.svg.webp'
import Github from '../../public/GitHub-Mark.png'
import LinkedIn from '../../public/174857.png'
import Instagram from '../../public/Instagram_icon.png.webp'

const Footer = () => {

    const MediumScreens = useMediaQuery("(min-width : 800px)")

    return (
        <div className="md:bg-orange-500 md:text-white">
            {
                MediumScreens ? (
                    <div className="flex justify-between gap-5 w-4/5 mx-auto p-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl mt-1">SHOBIFY</h1>
                            <h3>stay in touch with us</h3>
                            <div className="flex gap-2">
                                <a className="w-8 h-8" target="_blank" href="https://www.facebook.com/Mohamed.Avenger/"><img src={Facebook} /></a>
                                <a className="w-8 h-8" target="_blank" href="https://www.linkedin.com/in/mohamedelsayed2002/"><img src={LinkedIn} /></a>
                                <a className="w-8 h-8" target="_blank" href="https://github.com/MohamedElsayed002"><img src={Github} /></a>
                                <a className="w-8 h-8" target="_blank" href="https://www.instagram.com/mohamedelsayed_02/"><img src={Instagram}/></a>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl">Customer Service</h1>
                            <div>
                                <h3 className="hover:underline text-sm">Service and Warranty</h3>
                                <h3 className="hover:underline text-sm" >Returns and Exchanges</h3>
                                <h3 className="hover:underline text-sm">Secured online payment</h3>
                                <h3 className="hover:underline text-sm">shipping and delivery</h3>
                                <h3 className="hover:underline text-sm">Cash on delivery</h3>
                                <h3 className="hover:underline text-sm">Cookies settings</h3>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl">About Us</h1>
                            <div>
                                <h3 className="hover:underline text-sm">About Shopify</h3>
                                <h3 className="hover:underline text-sm" >Newsletter</h3>
                                <h3 className="hover:underline text-sm">Secured online payment</h3>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl">Helping your save</h1>
                            <div>
                                <h3 className="hover:underline text-sm">Extended Warranty Retail</h3>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl">Helping and Support</h1>
                            <div>
                                <h3 className="hover:underline">Contact Us</h3>
                                <h3 className="hover:underline">terms and conditions</h3>
                                <h3 className="hover:underline">privacy policy</h3>
                                <h3 className="hover:underline">anti-fraud disclaimer</h3>
                                <h3 className="hover:underline">Responsible Disclosure Policy</h3>
                                <h3 className="hover:underline">FAQ's</h3>
                                <h3 className="hover:underline">Find a store</h3>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Customer Service
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    <li className="hover:underline">Service and Warranty</li>
                                    <li className="hover:underline" >Returns and Exchanges</li>
                                    <li className="hover:underline">Secured online payment</li>
                                    <li className="hover:underline">shipping and delivery</li>
                                    <li className="hover:underline">Cash on delivery</li>
                                    <li className="hover:underline">Cookies settings</li>
                                </ul>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                About Us
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    <li className="hover:underline">About Shopify</li>
                                    <li className="hover:underline" >Newsletter</li>
                                    <li className="hover:underline">Secured online payment</li>
                                </ul>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Helping your save
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    <li className="hover:underline">Extended Warranty Retail</li>
                                </ul>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Helping and Support
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    <li className="hover:underline">Contact Us</li>
                                    <li className="hover:underline">terms and conditions</li>
                                    <li className="hover:underline">privacy policy</li>
                                    <li className="hover:underline">anti-fraud disclaimer</li>
                                    <li className="hover:underline">Responsible Disclosure Policy</li>
                                    <li className="hover:underline">FAQ's</li>
                                    <li className="hover:underline">Find a store</li>
                                </ul>
                            </div>
                        </div></>
                )
            }
        </div>
    )
}

export default Footer