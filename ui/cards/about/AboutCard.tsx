import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../../components/icon/Icon';
import SocialMedia from '../../../components/navigation/SocialMedia';

type AboutCardProps = {
    className: string;
};

const AboutCard: React.FC<AboutCardProps> = (props) => {

    const animation = {
        y: [20, 0],
        opacity: ["0%", "100%"],
    };

    const transition = {
        duration: 0.6,
        ease: "easeOut",
    };

    let content = (
        <div className={props.className}>
            <motion.div
                className="h-screen flex flex-col items-center"
            >
                <div className="flex flex-col items-center overflow-auto p-24">
                    <div className="w-full flex flex-col items-center">
                        <motion.div
                            className="relative rounded-full mb-8"
                            animate={animation}
                            transition={transition}
                        >
                            <div className="absolute h-full w-full bg-[#D19E18] rounded-full -right-0 ml-2 hover:ml-0"></div>
                            <Icon className="rounded-full bg-[#E2E8F0] overflow-hidden grayscale hover:grayscale-0 mr-2 hover:mr-0" src="/images/ilyass.png" alt="" dim="150" />
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center"
                            animate={animation}
                            transition={transition}
                        >
                            <p className="font-semibold text-2xl text-[#E2E8F0] mb-6">
                                Ilyass Berchida
                            </p>
                            <p className="font-medium text-sm text-[#9197A0] mb-2">
                                Software Developer at UM6P  /  Web developer
                            </p>
                            <p className="font-medium text-sm text-[#9197A0] mb-6">
                                Bin Jareer, Marrakesh-Safi, Morocco
                            </p>
                            <SocialMedia className="mb-12" data={[
                                {
                                    iconName: "GitHubIcon",
                                    iconColor: "#9197A0",
                                    iconHoverColor: "#D19E18",
                                    url: "https://github.com/ilyassber"
                                },
                                {
                                    iconName: "LinkedInIcon",
                                    iconColor: "#9197A0",
                                    iconHoverColor: "#D19E18",
                                    url: "https://www.linkedin.com/in/ilyass-berchida/"
                                },
                                {
                                    iconName: "InstagramIcon",
                                    iconColor: "#9197A0",
                                    iconHoverColor: "#D19E18",
                                    url: "https://www.instagram.com/ilyass.berchida/"
                                },
                                {
                                    iconName: "TwitterIcon",
                                    iconColor: "#9197A0",
                                    iconHoverColor: "#D19E18",
                                    url: "https://twitter.com/berchida_ilyass"
                                },
                            ]} />
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center"
                            animate={animation}
                            transition={transition}
                        >
                            <p className="font-extralight text-sm text-[#E2E8F0] text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet quam a arcu vehicula ultricies. Maecenas tristique sed libero at pretium. Sed egestas lacinia velit a tristique. Curabitur mattis orci sapien, nec aliquet leo sodales in. Etiam vel erat ultrices, vestibulum lectus vel, pharetra enim. Nunc tempor, augue eget molestie maximus, massa enim sollicitudin risus, ultrices tincidunt nisi sapien quis elit. Donec lobortis nunc ut volutpat ornare. Ut et augue purus.
                                <br />
                                <br />
                                Integer aliquet fermentum ante ac efficitur. Praesent purus ex, malesuada ac sodales at, rutrum ac lacus. Ut tincidunt mauris urna, id faucibus urna mattis a. Mauris at hendrerit enim, vel malesuada ex. Vestibulum quis nisi laoreet, venenatis nibh eget, posuere dui. Donec luctus, ante nec molestie tincidunt, urna elit luctus dui, vel porttitor nibh leo in diam. Vivamus lacus elit, finibus a interdum eu, consequat non lacus. In porta ex neque, eu vulputate libero tristique at. Etiam interdum porttitor ipsum a hendrerit.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default AboutCard;