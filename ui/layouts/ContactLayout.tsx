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
                <motion.div
                    className={"w-full p-4" + (hide ? " hidden" : "")}
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
                <div className="grow w-full">
                    {props.children}
                </div>
                <motion.div
                    className={"w-full p-4" + (hide ? " hidden" : "")}
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
    );

    return content;
};

export default ContactLayout;