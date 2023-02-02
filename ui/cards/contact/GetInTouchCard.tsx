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
                className="relative h-screen overflow-auto p-24"
            >
                <div className="flex flex-col">
                    <motion.div
                        className="border-dashed"
                        animate={animation}
                        transition={{
                            duration: 0.3,
                            ease: "linear",
                        }}
                    >
                    </motion.div>
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default GetInTouchCard;