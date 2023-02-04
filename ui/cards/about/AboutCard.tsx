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
                className="h-screen flex items-center justify-center"
            >
                <div className="relative max-h-screen w-full overflow-auto">
                    <div className="w-full flex flex-col items-center justify-center p-24">
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
                                className="flex flex-col items-center mb-12"
                                animate={animation}
                                transition={transition}
                            >
                                <p className="font-semibold text-2xl text-[#E2E8F0] mb-6">
                                    Ilyass Berchida
                                </p>
                                <p className="font-medium text-sm text-[#9197A0] mb-2">
                                    Software Developer at UM6P - AGE / Web Developer
                                </p>
                                <p className="font-medium text-sm text-[#9197A0] mb-6">
                                    Bin Jareer, Marrakesh-Safi, Morocco
                                </p>
                                <SocialMedia className="" data={[
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
                                className="flex flex-col items-center mb-6"
                                animate={animation}
                                transition={transition}
                            >
                                <p className="font-normal text-sm text-[#A1A7B0] mb-2">
                                    "Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill
                                </p>
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-center"
                                animate={animation}
                                transition={transition}
                            >
                                <p className="text-sm text-[#A1A7B0] text-left max-w-4xl">
                                    I am Ilyass Berchida, a software developer from Casablanca, Morocco. I was born on June 10th, 1994 and have been interested in technology and coding since a young age. After completing my studies in Economics from a local university, I decided to further my education by attending <span className="font-bold text-[#B1B7C0]">1337 coding school</span>. This allowed me to gain a deeper understanding of <span className="font-bold text-[#B1B7C0]">web development</span> and the latest technologies in the field.
                                    <br />
                                    <br />
                                    I have two years of experience in web development and have worked on several projects using technologies such as <span className="font-bold text-[#B1B7C0]">React</span>, <span className="font-bold text-[#B1B7C0]">Next</span>, and <span className="font-bold text-[#B1B7C0]">Django</span>. I am passionate about creating efficient and user-friendly websites that meet the users needs and solve real-world problems. I am dedicated to staying current with the latest developments in the field and constantly learning new technologies and techniques.
                                    <br />
                                    <br />
                                    I have gained experience in different domains such as <span className="font-bold text-[#B1B7C0]">agri-tech</span>, <span className="font-bold text-[#B1B7C0]">tourism</span>, and <span className="font-bold text-[#B1B7C0]">e-commerce</span> through my work, and I am always looking for new challenges and opportunities to grow as a professional. I am excited to be a part of the software development community in Morocco and look forward to making a positive impact through my work.
                                </p>
                                <p className="text-sm text-[#A1A7B0] text-left max-w-4xl">
                                    I am Ilyass Berchida, a software developer from Casablanca, Morocco. I was born on June 10th, 1994 and have been interested in technology and coding since a young age. After completing my studies in Economics from a local university, I decided to further my education by attending <span className="font-bold text-[#B1B7C0]">1337 coding school</span>. This allowed me to gain a deeper understanding of <span className="font-bold text-[#B1B7C0]">web development</span> and the latest technologies in the field.
                                    <br />
                                    <br />
                                    I have two years of experience in web development and have worked on several projects using technologies such as <span className="font-bold text-[#B1B7C0]">React</span>, <span className="font-bold text-[#B1B7C0]">Next</span>, and <span className="font-bold text-[#B1B7C0]">Django</span>. I am passionate about creating efficient and user-friendly websites that meet the users needs and solve real-world problems. I am dedicated to staying current with the latest developments in the field and constantly learning new technologies and techniques.
                                    <br />
                                    <br />
                                    I have gained experience in different domains such as <span className="font-bold text-[#B1B7C0]">agri-tech</span>, <span className="font-bold text-[#B1B7C0]">tourism</span>, and <span className="font-bold text-[#B1B7C0]">e-commerce</span> through my work, and I am always looking for new challenges and opportunities to grow as a professional. I am excited to be a part of the software development community in Morocco and look forward to making a positive impact through my work.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default AboutCard;