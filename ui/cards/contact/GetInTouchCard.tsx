import React from 'react';
import { motion } from "framer-motion";
import Icon from '../../../components/icon/Icon';

type GetInTouchCardProps = {
    className: string;
};

const GetInTouchCard: React.FC<GetInTouchCardProps> = (props) => {

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
                className="flex h-screen items-center justify-center"
            >
                <div className="relative w-full max-h-screen overflow-auto">
                    <motion.div
                        className="w-full flex flex-col items-center justify-center p-24"
                        animate={animation}
                        transition={transition}
                    >
                        <textarea
                            className="w-full h-24 bg-transparent outline-none text-lg p-4 rounded-md border shadow-xl border-[#9197A011] text-[#9197A0] caret-[#9197A0]"
                            autoFocus
                            spellCheck="false"
                        />
                        <div className="flex w-full justify-end mt-4">
                            <div className="flex flex-row justify-center items-center bg-[#9197A0] hover:bg-[#D19E18] rounded px-4 py-1" role="button">
                                <Icon className="flex justify-center items-center mr-2" name="SendIcon" color="#182B2B" alt="" dim="18" />
                                <p className="h-full font-bold text-base text-[#182B2B] text-center">Send</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default GetInTouchCard;