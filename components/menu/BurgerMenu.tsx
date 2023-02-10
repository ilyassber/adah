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

    let content = (
        <div className={props.className}>
            {closed ? (
                <div className="h-16 w-16 flex items-center justify-center p-4">
                    <div role="button" onClick={() => {
                        setClosed(false);
                    }}>
                        <Icon className="flex justify-center items-center" name="MenuIcon" color="#9197A0" alt="" dim="32" />
                    </div>
                </div>
            ) : (
                <motion.div
                    animate={{
                        opacity: ["0%", "100%"],
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="h-screen w-screen flex flex-col bg-gradient-to-b from-[#182B2B] to-[#2B2B2B] overflow-hidden"
                >
                    <div className="h-16 w-full flex items-center justify-end p-4">
                        <div role="button" onClick={() => {
                            setClosed(true);
                        }}>
                            <Icon className="flex justify-center items-center" name="CloseIcon" color="#9197A0" alt="" dim="32" />
                        </div>
                    </div>
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
                                    <div className="w-full px-6 py-4">
                                        <p
                                            className={"text-xl" + (params.selectedSectionId == section.id ? " font-bold text-yano-500" : " font-normal text-[#9197A0]")}
                                            role="button"
                                            onClick={() => {
                                                dispatchParams({ key: "selectedSectionId", value: section.id });
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
                            <hr className="border-[#9197A055]" />
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
            )}
        </div>
    );

    return content;
};

export default BurgerMenu;