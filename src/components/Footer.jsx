import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-4 md:mt-10">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                {/* Column 1 */}
                <div >
                    <h2 className="font-bold mb-3">Milaap</h2>
                    <ul className="grid grid-cols-3 gap-2 md:block md:space-y-2  text-sm text-pink-900">
                        <li>About us</li>
                        <li>Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Thank you</li>
                        <li>Resources</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h2 className="font-bold mb-3">Singapore office address</h2>
                    <p className="text-sm  leading-relaxed text-pink-900">
                        Milaap Social Ventures (International) Pte. Ltd. <br />
                        28 Bukit Pasoh Road, YWCA Fort Canning Lodge, <br />
                        Singapore 089842
                    </p>

                    <h3 className="mt-4 text-sm font-bold">Supported by</h3>
                    <div className="flex gap-3 mt-2 text-sm font-semibold text-pink-900">
                        <span>VISA</span>
                        <span>Mastercard</span>
                        <span>Paytm</span>
                        <span>Amex</span>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center md:items-start text-left">

                    <button className="bg-[#8b2c3f]  text-white  px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
                        Start a fundraiser
                    </button>

                    <div className="flex gap-4 mt-4 text-sm text-pink-900 flex-wrap">
                        <span>Pricing</span>
                        <span>Reviews</span>
                        <span>FAQs</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4 text-pink-900 ">
                        <div className="p-2 border rounded-full hover:bg-[#8b2c3f]  hover:text-white hover:scale-105 transition"><Facebook size={16} /></div>
                        <div className="p-2 border rounded-full hover:bg-[#8b2c3f]  hover:text-white hover:scale-105 transition "><Twitter size={16} /></div>
                        <div className="p-2 border rounded-full hover:bg-[#8b2c3f]  hover:text-white hover:scale-105 transition"><Linkedin size={16} /></div>
                        <div className="p-2 border rounded-full hover:bg-[#8b2c3f]  hover:text-white hover:scale-105 transition"><Instagram size={16} /></div>
                    </div>
                </div>

                {/**columnn 4 */}
                <div className="bg-gray-100  w-110 " ></div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black text-white  text-center text-xs sm:text-sm py-4 px-4">
                <p>
                    Security & Privacy &nbsp; | &nbsp; Conditions of use &nbsp; | &nbsp; ©
                    2010 - 2026 milaap.org. All rights reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;