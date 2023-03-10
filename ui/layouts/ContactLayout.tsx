import React from 'react';
import { tailwindcss } from '../../types.d';
import { GlobalContext } from '../../components/context/Context';
import SocialMedia from '../../components/navigation/SocialMedia';
import PhoneAndMail from '../cards/PhoneAndMail';
import { motion } from "framer-motion";
import { gaEvent } from '@/services/ga';

type ContactLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const ContactLayout: React.FC<ContactLayoutProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);
    const [hideAnimation, setHideAnimation] = React.useState<boolean>(false);
    const [hide, setHide] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (params.selectedSectionId == 1 || params.selectedSectionId == 5) {
            setHide(false);
            setHideAnimation(false);
        }
        if (!(params.nextSectionId == 1 || params.nextSectionId == 5)) {
            setHideAnimation(true);
        }
    }, [params.selectedSectionId, params.nextSectionId]);

    let content = (
        <div className={props.className}>
            <div className="relative h-full w-full flex flex-col">
                <div className={
                    "fixed flex items-start h-16 w-full bg-gradient-to-b from-[#182B2B] to-[#0000] z-10"
                    + (hide ? " pointer-events-none" : "")
                }>
                    <motion.div
                        className={"h-full w-full flex justify-start sm:justify-center items-center p-4" + (hide ? " hidden" : "")}
                        transition={{
                            duration: (hideAnimation ? 0.3 : 0.5),
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
                        <PhoneAndMail className="h-full" />
                    </motion.div>
                </div>
                <div className="h-full w-full">
                    {props.children}
                </div>
                <div className={
                    "fixed bottom-0 w-full flex items-end h-16 bg-gradient-to-b from-[#0000] to-[#2B2B2B] z-10"
                    + (hide ? " pointer-events-none" : "")
                }>
                    <motion.div
                        className={"w-full flex justify-center p-4" + (hide ? " hidden" : "")}
                        transition={{
                            duration: (hideAnimation ? 0.3 : 0.5),
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
                                iconName: "GitHubIcon",
                                iconAlt: "GitHub",
                                iconColor: "#9197A0",
                                iconHoverColor: "#D5A72F",
                                url: "https://github.com/ilyassber",
                                onClick: () => {
                                    gaEvent("GITHUB", "CONTACT", "CLICK", 1);
                                }
                            },
                            {
                                iconName: "LinkedInIcon",
                                iconAlt: "LinkedIn",
                                iconColor: "#9197A0",
                                iconHoverColor: "#D5A72F",
                                url: "https://www.linkedin.com/in/ilyass-berchida/",
                                onClick: () => {
                                    gaEvent("LINKEDIN", "CONTACT", "CLICK", 1);
                                }
                            },
                            {
                                iconName: "InstagramIcon",
                                iconAlt: "Instagram",
                                iconColor: "#9197A0",
                                iconHoverColor: "#D5A72F",
                                url: "https://www.instagram.com/ilyass.berchida/",
                                onClick: () => {
                                    gaEvent("INSTAGRAM", "CONTACT", "CLICK", 1);
                                }
                            },
                            {
                                iconName: "TwitterIcon",
                                iconAlt: "Twitter",
                                iconColor: "#9197A0",
                                iconHoverColor: "#D5A72F",
                                url: "https://twitter.com/berchida_ilyass",
                                onClick: () => {
                                    gaEvent("TWITTER", "CONTACT", "CLICK", 1);
                                }
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