import { Footer } from "flowbite-react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { BookOpenIcon } from "@heroicons/react/solid";
import {
    FaDribbble,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

const FooterScreen = () => {
    const BsFacebook = FaFacebook;
    const BsTwitter = FaTwitter;
    const BsGithub = FaGithub;
    const BsInstagram = FaInstagram;
    const BsDribbble = FaDribbble;
    return (
        <Footer className="flex flex-col bg-gray-800">
            <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">
                        Company
                    </h2>
                    <Footer.LinkGroup className="flex-col">
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            About
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Careers
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Brand Center
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">
                        Download
                    </h2>
                    <Footer.LinkGroup className="flex-col">
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Discord Server
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Twitter
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Facebook
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Contact Us
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">
                        Legal
                    </h2>
                    <Footer.LinkGroup className="flex-col">
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Terms & Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">
                        Download
                    </h2>
                    <Footer.LinkGroup className="flex-col">
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            iOS
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Android
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            Windows
                        </Footer.Link>
                        <Footer.Link className="mb-4 text-gray-300" href="#">
                            MacOS
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </div>
            <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright
                    className="text-gray-300"
                    href="#"
                    by="Flowbite™"
                    year={2022}
                />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon
                        href="#"
                        className="text-gray-400 hover:text-white"
                        icon={BsFacebook}
                    />
                    <Footer.Icon
                        href="#"
                        className="text-gray-400 hover:text-white"
                        icon={BsInstagram}
                    />
                    <Footer.Icon
                        href="#"
                        className="text-gray-400 hover:text-white"
                        icon={BsTwitter}
                    />
                    <Footer.Icon
                        href="#"
                        className="text-gray-400 hover:text-white"
                        icon={BsGithub}
                    />
                    <Footer.Icon
                        href="#"
                        className="text-gray-400 hover:text-white"
                        icon={BsDribbble}
                    />
                </div>
            </div>
        </Footer>
    );
};

export default FooterScreen;
