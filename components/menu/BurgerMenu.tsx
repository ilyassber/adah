import React from 'react';
import { GlobalContext } from '../context/Context';
import { tailwindcss } from '../../types.d';
import Icon from '../icon/Icon';
import { motion } from "framer-motion";
import Link from 'next/link';

type BurgerMenuProps = {
    className: tailwindcss;
};

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    const [closed, setClosed] = React.useState<boolean>(true);
    const [init, setInit] = React.useState<boolean>(false);

    const menuVariants = {
        init: {
            x: [50, 0],
            rotate: [360, 0]
        },
        open: {
            x: 0,
            rotate: -90
        },
        closed: {
            x: 0,
            rotate: 0
        },
    }

    let content = (
        <div className={props.className}>
            <div className="relative">
                <div className="absolute top-0 right-0 h-16 w-16 flex items-center justify-center p-4 z-[200]">
                    <motion.div
                        animate={init ? closed ? "closed" : "open" : "init"}
                        variants={menuVariants}
                        role="button"
                        onAnimationComplete={(animation: any) => {
                            if (animation == "init") {
                                setInit(true);
                            }
                        }}
                        onClick={() => {
                            if (closed) {
                                setClosed(false);
                            } else {
                                setClosed(true);
                            }
                        }}
                    >
                        <Icon className="" src="/icons/shuriken.svg" alt="" dim="30" />
                    </motion.div>
                </div>
                {closed ? (null) : (
                    <motion.div
                        animate={{
                            opacity: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="h-screen w-screen flex flex-col bg-gradient-to-b from-[#182B2B] to-[#2B2B2B] overflow-hidden pt-16"
                    >
                        <motion.div
                            className="flex flex-col items-end"
                            animate={{
                                opacity: ["0%", "100%"],
                                y: [20, 0],
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                        >
                            {
                                params.sections.map((section: any, index: number) => {
                                    return (
                                        <div key={index} className="w-full px-6 py-4">
                                            <p
                                                className={"text-xl" + (params.selectedSectionId == section.id ? " font-bold text-yano-500" : " font-normal text-[#9197A0]")}
                                                role="button"
                                                onClick={() => {
                                                    dispatchParams({ key: "nextSectionId", value: section.id });
                                                    setClosed(true);
                                                }}
                                            >
                                                {section.name}
                                            </p>
                                        </div>
                                    );
                                })
                            }
                            <div className="w-full p-12">
                                <hr className="border-[#9197A033]" />
                            </div>
                            <div className="w-full px-6 py-4">
                                <Link
                                    className="flex flex-row items-center"
                                    href="tel:+212-628-666599"
                                    target="_blank"
                                >
                                    <Icon className="mr-4" src="/icons/phone.svg" alt="" dim="24" />
                                    <div>
                                        <p
                                            className="text-lg font-medium text-[#9197A0] leading-none"
                                        >
                                            Call
                                        </p>
                                        <p
                                            className="text-sm font-thin text-[#9197A099] leading-none"
                                        >
                                            +212 628 666599
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full px-6 py-4">
                                <Link
                                    className="flex flex-row items-center"
                                    href="mailto:ilyass.berchida@gmail.com"
                                    target="_blank"
                                >
                                    <Icon className="mr-4" src="/icons/mail.svg" alt="" dim="24" />
                                    <div>
                                        <p
                                            className="text-lg font-medium text-[#9197A0] leading-none"
                                        >
                                            Send an email
                                        </p>
                                        <p
                                            className="text-sm font-thin text-[#9197A099] leading-none"
                                        >
                                            ilyass.berchida@gmail.com
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full px-6 py-4">
                                <Link
                                    className="flex flex-row items-center"
                                    href="/files/BERCHIDA-ILYASS-CV.pdf"
                                    target="_blank"
                                >
                                    <Icon className="mr-4" name="DownloadIcon" color="#9197A0" alt="" dim="24" />
                                    <div>
                                        <p
                                            className="text-lg font-medium text-[#9197A0] leading-none"
                                        >
                                            Resume
                                        </p>
                                        <p
                                            className="text-sm font-thin text-[#9197A099] leading-none"
                                        >
                                            Download as pdf
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )
                }
            </div>
        </div >
    );

    return content;
};

export default BurgerMenu;