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
                        className="w-full flex flex-row items-end justify-center p-24"
                        animate={animation}
                        transition={transition}
                    >
                        <textarea
                            className="grow h-24 min-h-24 max-h-96 bg-transparent outline-none text-lg p-4 rounded-md border shadow-xl border-[#9197A011] border-l-[#D19E18] text-[#9197A0] caret-[#9197A0]"
                            autoFocus
                            spellCheck="false"
                        />
                        <div className="h-24 w-24 flex flex-row justify-center items-center border shadow-xl border-[#9197A011] hover:bg-[#9197A011] rounded px-4 py-1 ml-2" role="button">
                            <Icon className="flex justify-center items-center" name="SendIcon" color="#9197A0" alt="" dim="40" />
                        </div>
                    </motion.div>
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default GetInTouchCard;