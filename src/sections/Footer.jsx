import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi'; // Import the Chevron icon

const Accordion = ({ title, children, isOpen, toggle }) => {
    return (
        <div className="mb-2">
            <div 
                onClick={toggle} 
                className="flex justify-between items-center cursor-pointer"
            >
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <BiChevronDown 
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    size={24} 
                />
            </div>
            <div 
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`} // Control max-height for animation
            >
                <ul className="space-y-1 text-sm">
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default function Footer() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className='mt-40 pb-20 flex w-full relative'>
            <img className='w-[80%] absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 opacity-5' alt='' src='/assets/logo.png' />

            <footer className='w-full flex flex-col'>
                <div className="container font-semibold text-zinc-500 mx-auto px-4">

                    {/* Accordion for small screens */}
                    <div className="block md:hidden">
                        <div className="space-y-2">
                            {/* Explore Section */}
                            <Accordion title="Explore" isOpen={openSection === 0} toggle={() => toggleSection(0)}>
                                <li>Latest News</li>
                                <li>Trending Topics</li>
                                <li>Featured Articles</li>
                                <li>Resources</li>
                                <li>Case Studies</li>
                            </Accordion>

                            {/* Services Section */}
                            <Accordion title="Services" isOpen={openSection === 1} toggle={() => toggleSection(1)}>
                                <li>Web Development</li>
                                <li>Mobile Apps</li>
                                <li>SEO Services</li>
                                <li>Cloud Solutions</li>
                                <li>Consulting</li>
                            </Accordion>

                            {/* Company Section */}
                            <Accordion title="Company" isOpen={openSection === 2} toggle={() => toggleSection(2)}>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Testimonials</li>
                                <li>Press Releases</li>
                                <li>Contact Us</li>
                            </Accordion>

                            {/* Connect Section */}
                            <Accordion title="Connect" isOpen={openSection === 3} toggle={() => toggleSection(3)}>
                                <li>Support</li>
                                <li>Blog</li>
                                <li>Community</li>
                                <li>Events</li>
                                <li>Newsletter</li>
                            </Accordion>
                        </div>
                    </div>

                    {/* Columns for larger screens */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Column 1 */}
                        <div>
                            <h2 className="text-xl font-bold mb-2">Explore</h2>
                            <ul className="space-y-1 text-sm">
                                <li>Latest News</li>
                                <li>Trending Topics</li>
                                <li>Featured Articles</li>
                                <li>Resources</li>
                                <li>Case Studies</li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h2 className="text-xl font-bold mb-2">Services</h2>
                            <ul className="space-y-1 text-sm">
                                <li>Web Development</li>
                                <li>Mobile Apps</li>
                                <li>SEO Services</li>
                                <li>Cloud Solutions</li>
                                <li>Consulting</li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h2 className="text-xl font-bold mb-2">Company</h2>
                            <ul className="space-y-1 text-sm">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Testimonials</li>
                                <li>Press Releases</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <h2 className="text-xl font-bold mb-2">Connect</h2>
                            <ul className="space-y-1 text-sm">
                                <li>Support</li>
                                <li>Blog</li>
                                <li>Community</li>
                                <li>Events</li>
                                <li>Newsletter</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-40">
                    <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                        <FaFacebookF />
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                        <FaTwitter />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                        <FaInstagram />
                    </a>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-xs text-zinc-700 font-semibold">© {new Date().getFullYear()} Sifartek. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
