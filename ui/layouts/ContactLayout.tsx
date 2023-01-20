import React from 'react';
import { tailwindcss } from '../../types.d';
import { GlobalContext } from '../../components/context/Context';
import SocialMedia from '../../components/navigation/SocialMedia';
import PhoneAndMail from '../cards/contact/PhoneAndMail';
import { motion } from "framer-motion";

type ContactLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const ContactLayout: React.FC<ContactLayoutProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);
    const [hideAnimation, setHideAnimation] = React.useState<boolean>(false);
    const [hide, setHide] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (params.selectedSectionId == 1) {
            setHide(false);
            setHideAnimation(false);
        } else {
            setHideAnimation(true);
        }
    }, [params.selectedSectionId]);

    let content = (
        <div className={props.className}>
            <div className="h-full w-full flex flex-col">
                <div className="absolute flex items-start h-16 w-full bg-gradient-to-b from-[#182B2B] to-[#0000] z-10">
                    <motion.div
                        className={"w-full flex justify-center items-center p-4" + (hide ? " hidden" : "")}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        animate={{
                            y: (hideAnimation ? ["0%", "-50%"] : ["-50%", "0%"]),
                            opacity: (hideAnimation ? ["100%", "0%"] : ["0%", "100%"]),
                        }}
                        onAnimationComplete={() => {
                            if (hideAnimation) {
                                setHide(true);
                            }
                        }}
                    >
                        <PhoneAndMail className="" />
                    </motion.div>
                </div>
                <div className="h-full w-full">
                    {props.children}
                </div>
                <div className="absolute bottom-0 w-full flex items-end h-16 bg-gradient-to-b from-[#0000] to-[#2B2B2B] z-10">
                    <motion.div
                        className={"w-full flex justify-center p-4" + (hide ? " hidden" : "")}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        animate={{
                            y: (hideAnimation ? ["0%", "50%"] : ["50%", "0%"]),
                            opacity: (hideAnimation ? ["100%", "0%"] : ["0%", "100%"]),
                        }}
                        onAnimationComplete={() => {
                            if (hideAnimation) {
                                setHide(true);
                            }
                        }}
                    >
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
                    </motion.div>
                </div>
            </div>
        </div>
    );

    return content;
};

export default ContactLayout;