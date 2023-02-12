import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Icon from '../../components/icon/Icon';
import SocialMedia from '../../components/navigation/SocialMedia';

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
            <div
                className="h-screen flex items-center justify-center"
            >
                <div className="relative max-h-screen w-full overflow-auto">
                    <div className="w-full flex flex-col items-center justify-center px-8 py-16 sm:px-12 sm:py-16 md:p-20 lg:p-24">
                        <div className="w-full flex flex-col items-center">
                            <motion.div
                                className="relative rounded-full mb-8"
                                animate={animation}
                                transition={transition}
                            >
                                <div className="absolute h-full w-full bg-yano-500 rounded-full -right-0 ml-[6px] hover:ml-0"></div>
                                <Icon className="h-28 sm:h-36 w-28 sm:w-36 rounded-full bg-[#E2E8F0] overflow-hidden grayscale hover:grayscale-0 mr-[6px] hover:mr-0" src="/images/ilyass.png" alt="" />
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-center mb-12"
                                animate={animation}
                                transition={transition}
                            >
                                <p className="font-semibold text-2xl text-[#E2E8F0] mb-6">
                                    Ilyass Berchida
                                </p>
                                <p className="font-medium text-sm text-[#9197A0] text-center mb-2">
                                    <span className="inline-block whitespace-nowrap">Software Developer at UM6P - AGE</span>
                                    <span className="hidden sm:inline sm:whitespace-pre">  /  </span>
                                    <span className="block sm:hidden whitespace-pre-line"> </span>
                                    <span>Web Developer</span>
                                </p>
                                <p className="font-medium text-sm text-[#9197A0] text-center mb-6">
                                    Bin Jareer, Marrakesh-Safi, Morocco
                                </p>
                                <SocialMedia className="" data={[
                                    {
                                        iconName: "GitHubIcon",
                                        iconColor: "#9197A0",
                                        iconHoverColor: "#D5A72F",
                                        url: "https://github.com/ilyassber"
                                    },
                                    {
                                        iconName: "LinkedInIcon",
                                        iconColor: "#9197A0",
                                        iconHoverColor: "#D5A72F",
                                        url: "https://www.linkedin.com/in/ilyass-berchida/"
                                    },
                                    {
                                        iconName: "InstagramIcon",
                                        iconColor: "#9197A0",
                                        iconHoverColor: "#D5A72F",
                                        url: "https://www.instagram.com/ilyass.berchida/"
                                    },
                                    {
                                        iconName: "TwitterIcon",
                                        iconColor: "#9197A0",
                                        iconHoverColor: "#D5A72F",
                                        url: "https://twitter.com/berchida_ilyass"
                                    },
                                ]} />
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-center mb-6"
                                animate={animation}
                                transition={transition}
                            >
                                <p className="font-solitreo text-base text-[#A1A7B0] text-center mb-2">
                                    "The details are not the details. They make the design."
                                </p>
                                <p className="font-normal text-xs text-[#818790] mb-2">
                                    - Charles Eames
                                </p>
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-center"
                                animate={animation}
                                transition={transition}
                            >
                                <p className="text-sm text-[#A1A7B0] text-left max-w-4xl">
                                    I'm Ilyass Berchida, a Software developer from Casablanca, Morocco. I was born on June 10th, 1994, and have been interested in technology and coding since a young age. After completing my studies in Economics at a local university, I decided to follow my passion and further my education by attending <span className="font-bold text-[#B1B7C0]">1337 coding school</span>, which allowed me to gain a deeper understanding of <span className="font-bold text-[#B1B7C0]">Web development</span> and the latest technologies in the field.
                                    <br />
                                    <br />
                                    I have two years of experience in web development and worked on several projects using technologies such as <span className="font-bold text-[#B1B7C0]">React</span>, <span className="font-bold text-[#B1B7C0]">Next</span>, and <span className="font-bold text-[#B1B7C0]">Django</span>. I am passionate about creating exceptional experiences and user-friendly websites that meet users' needs and solve real-world problems. I'm dedicated to staying current with the latest developments in the field and constantly learning new technologies and techniques.
                                    <br />
                                    <br />
                                    I have gained experience in different domains such as <span className="font-bold text-[#B1B7C0]">Agri-tech</span>, <span className="font-bold text-[#B1B7C0]">Tourism</span>, and <span className="font-bold text-[#B1B7C0]">E-commerce</span> through my work, and I am always looking for new challenges and opportunities to grow as a professional. I am excited to be a part of the software development community in Morocco and look forward to making a positive impact.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );

    return content;
};

export default AboutCard;