import React from 'react';
import { tailwindcss } from '../../types.d';
import SocialMedia from '../../components/navigation/SocialMedia';
import PhoneAndMail from '../cards/contact/PhoneAndMail';

type ContactLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const ContactLayout: React.FC<ContactLayoutProps> = (props) => {

    let content = (
        <div className={props.className}>
            <div className="h-full w-full flex flex-col">
                <div className="w-full p-4">
                    <PhoneAndMail className="" />
                </div>
                <div className="grow w-full">
                    {props.children}
                </div>
                <div className="w-full p-4">
                    <SocialMedia className="" data={[
                        {
                            iconSrc: "/icons/github.svg",
                            url: "https://github.com/ilyassber"
                        },
                        {
                            iconSrc: "/icons/linkedin.svg",
                            url: "https://www.linkedin.com/in/ilyass-berchida/"
                        },
                        {
                            iconSrc: "/icons/instagram.svg",
                            url: "https://www.instagram.com/ilyass.berchida/"
                        },
                        {
                            iconSrc: "/icons/twitter.svg",
                            url: "https://twitter.com/berchida_ilyass"
                        },
                    ]} />
                </div>
            </div>
        </div>
    );

    return content;
};

export default ContactLayout;