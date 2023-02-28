import React, { TextareaHTMLAttributes } from 'react';
import { motion } from "framer-motion";
import Icon from '../../components/icon/Icon';
import { GlobalContext } from '../../components/context/Context';
import { Message } from '../../types.d';
import { initFirebase, sendMessage } from '../../services/firebase';

type GetInTouchCardProps = {
    className: string;
};

const GetInTouchCard: React.FC<GetInTouchCardProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const sendButtonRef = React.useRef<HTMLDivElement>(null);
    const [textareaState, setTextareaState] = React.useState<string>("open");
    const [init, setInit] = React.useState<boolean>(false);
    const [animating, setAnimating] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<string>("");
    const [sendState, setSendState] = React.useState<string>("idle");

    const textareaVariants = {
        open: { height: "24rem" },
        closed: { height: "6rem" },
    }

    const sendButtonVariants = {
        idle: {
            backgroundColor: "#9197A000",
            borderColor: "#9197A011",
            borderWidth: "2px",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
        },
        sending: {
            backgroundColor: "#d5a72f11",
            borderColor: "#d5a72f33",
            borderWidth: "2px",
            boxShadow: "0 20px 25px -5px rgb(213, 167, 47 / 0.1), 0 8px 10px -6px rgb(213, 167, 47 / 0.1)"
        },
        success: {
            backgroundColor: "#65a30d11",
            borderColor: "#65a30d33",
            borderWidth: "2px",
            boxShadow: "0 20px 25px -5px rgb(101, 163, 13 / 0.1), 0 8px 10px -6px rgb(101, 163, 13 / 0.1)"
        },
        failure: {
            backgroundColor: "#7f1d1d11",
            borderColor: "#7f1d1d33",
            borderWidth: "2px",
            boxShadow: "0 20px 25px -5px rgb(127, 29, 29 / 0.1), 0 8px 10px -6px rgb(127, 29, 29 / 0.1)"
        },
    }

    const transition = {
        duration: 0.4,
        ease: "linear",
    };

    const onClickListener = (event: any) => {
        if (textareaRef && textareaRef.current && sendButtonRef && sendButtonRef.current && event.target) {
            if (!(textareaRef.current.contains(event.target) || sendButtonRef.current.contains(event.target))) {
                setTextareaState("closed");
            } else if (textareaRef.current.contains(event.target)) {
                setTextareaState("open");
            }
        }
    };

    const initClickListener = () => {
        document.addEventListener("click", onClickListener);
    };

    React.useEffect(() => {
        return () => {
            document.removeEventListener("click", onClickListener);
        };
    }, []);

    React.useEffect(() => {
        setAnimating(true);
    }, [textareaState]);

    React.useEffect(() => {
        if (params.nextSectionId != params.selectedSectionId) {
            console.log(textareaState);
            if (textareaState == "open") {
                setTextareaState("closed");
            } else {
                if (!animating) dispatchParams({ key: "selectedSectionId", value: params.nextSectionId });
            }
        }
    }, [params.nextSectionId]);

    const onTextAreaChange = (event: any) => {
        if (event.target.value != null) {
            setMessage(event.target.value);
        }
    };

    const onSend = () => {
        if (sendState == "idle" && params.firebaseConfig) {
            if (message != null && message != "") {
                setSendState("sending");
                const messageObject: Message = {
                    message: message,
                    sendDateTime: new Date().toISOString(),
                };
                sendMessage(params.firebaseConfig, messageObject).then((doc) => {
                    textareaRef!.current!.value = "";
                    setMessage("");
                    setSendState("success");
                }).catch((error) => {
                    console.log(error);
                    setSendState("failure");
                });
            }
        }
    }

    let content = (
        <div className={props.className}>
            <motion.div
                className="flex h-full items-center justify-center"
            >
                <div
                    className="w-full flex flex-col sm:flex-row items-end justify-center p-8 sm:p-12 md:p-20 lg:p-24"
                >
                    <motion.textarea
                        ref={textareaRef}
                        variants={textareaVariants}
                        animate={textareaState}
                        transition={transition}
                        onAnimationComplete={(animation) => {
                            setAnimating(false);
                            if (!init) {
                                setInit(true);
                                initClickListener();
                            }
                            if (animation == "closed") {
                                if (params.nextSectionId != params.selectedSectionId) {
                                    dispatchParams({ key: "selectedSectionId", value: params.nextSectionId });
                                }
                            }
                        }}
                        onChange={onTextAreaChange}
                        className="w-full h-24 min-h-24 max-h-1/2 bg-transparent disabled:bg-[#9197A011] outline-none text-lg p-4 placeholder:text-[#9197A066] rounded-md border shadow-xl border-[#9197A011] border-l-yano-500 text-[#9197A0] caret-[#9197A0] resize-none"
                        autoFocus
                        spellCheck="false"
                        placeholder='Get in touch ..'
                        disabled={sendState == "sending" ? true : false}
                    />
                    <motion.div
                        ref={sendButtonRef}
                        variants={sendButtonVariants}
                        animate={sendState}
                        whileHover={sendState == "idle" ? {
                            backgroundColor: "#9197A011"
                        } : {}}
                        transition={transition}
                        className="h-24 w-24 flex flex-row justify-center items-center border-2 border-[#9197A011] rounded px-4 py-1 ml-0 sm:ml-2 mt-2 sm:mt-0"
                        role="button"
                        onChange={onTextAreaChange}
                        onClick={onSend}
                        onAnimationComplete={(animation: string) => {
                            if (animation == "success" || animation == "failure") {
                                setTimeout(() => {
                                    setSendState("idle");
                                    setTextareaState("closed");
                                }, 1200);
                            }
                        }}
                    >
                        <div className="pointer-events-none">
                            {sendState == "sending"
                                ? (<Icon key="sending" className="flex justify-center items-center" name="CircularProgress" type='animated' color="#d5a72f" alt="" dim="40" />)
                                : sendState == "success"
                                    ? (<Icon key="success" className="flex justify-center items-center" name="DoneIcon" color="#65a30d" alt="" dim="40" />)
                                    : sendState == "failure" ?
                                        (<Icon key="failure" className="flex justify-center items-center" name="CloseIcon" color="#7f1d1d" alt="" dim="40" />)
                                        : (<Icon key="idle" className="flex justify-center items-center" name="SendIcon" color="#9197A0" alt="" dim="40" />)}
                        </div>
                    </motion.div>
                </div>
            </motion.div >
        </div >
    );

    return content;
};

export default GetInTouchCard;