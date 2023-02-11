import React, { TextareaHTMLAttributes } from 'react';
import { motion } from "framer-motion";
import Icon from '../../components/icon/Icon';

type GetInTouchCardProps = {
    className: string;
};

const GetInTouchCard: React.FC<GetInTouchCardProps> = (props) => {

    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const [textareaState, setTextareaState] = React.useState<string>("open");
    const [init, setInit] = React.useState<boolean>(false);

    const textareaVariants = {
        open: { height: "24rem" },
        closed: { height: "6rem" },
    }

    const transition = {
        duration: 0.4,
        ease: "linear",
    };

    const initClickListener = () => {
        document.addEventListener(
            "click",
            (event: any) => {
                if (textareaRef && textareaRef.current && event.target) {
                    if (textareaRef.current.contains(event.target)) {
                        setTextareaState("open");
                    } else {
                        setTextareaState("closed");
                    }
                }
            },
            false
        );
    };

    let content = (
        <div className={props.className}>
            <motion.div
                className="flex h-screen items-center justify-center"
            >
                <div className="relative w-full max-h-screen overflow-auto">
                    <div
                        className="flex flex-col sm:flex-row items-end justify-center p-8 sm:p-12 md:p-20 lg:p-24"
                    >
                        <motion.textarea
                            ref={textareaRef}
                            variants={textareaVariants}
                            animate={textareaState}
                            transition={transition}
                            onAnimationComplete={() => {
                                if (!init) {
                                    setInit(true);
                                    initClickListener();
                                }
                            }}
                            className="w-full h-24 min-h-24 max-h-96 bg-transparent outline-none text-lg p-4 rounded-md border shadow-xl border-[#9197A011] border-l-yano-500 text-[#9197A0] caret-[#9197A0] resize-none"
                            autoFocus
                            spellCheck="false"
                        />
                        <div className="h-24 w-24 flex flex-row justify-center items-center border shadow-xl border-[#9197A011] hover:bg-[#9197A011] rounded px-4 py-1 ml-0 sm:ml-2 mt-2 sm:mt-0" role="button">
                            <Icon className="flex justify-center items-center" name="SendIcon" color="#9197A0" alt="" dim="40" />
                        </div>
                    </div>
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default GetInTouchCard;