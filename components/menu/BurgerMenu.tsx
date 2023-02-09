import React from 'react';
import { GlobalContext } from '../context/Context';
import { tailwindcss } from '../../types.d';
import Icon from '../icon/Icon';
import { motion } from "framer-motion";

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
                                            className={"text-2xl" + (params.selectedSectionId == section.id ? " font-bold text-yano-500" : " font-normal text-[#9197A0]")}
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
                    </motion.div>
                </motion.div>
            )}
        </div>
    );

    return content;
};

export default BurgerMenu;