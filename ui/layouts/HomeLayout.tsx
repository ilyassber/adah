import React from 'react';
import ShurikenMenu from '../../components/menu/ShurikenMenu';
import { GlobalContext } from '../../components/context/Context';
import { tailwindcss } from '../../types.d';
import ContactLayout from './ContactLayout';
import Icon from '../../components/icon/Icon';
import { motion } from "framer-motion";
import MenuLayout from './MenuLayout';
import { gaEvent } from '../../services/ga';
import { useTranslation, Trans } from 'next-i18next';

type HomeLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);
    const { t } = useTranslation('common');

    const homeLayoutRef = React.useRef<HTMLDivElement>(null);
    const [segma, setSegma] = React.useState<number>(0);
    const [direction, setDirection] = React.useState<string>("hold");

    const [duration, setDuration] = React.useState<number>(0.8);
    const [rotation, setRotation] = React.useState<number[]>([0, 180]);
    const [screenHeight, setScreenHeight] = React.useState<number>(0);
    const [screenWidth, setScreenWidth] = React.useState<number>(0);
    const [hideAnimation, setHideAnimation] = React.useState<boolean>(false);
    const [hide, setHide] = React.useState<boolean>(false);
    const [step, setStep] = React.useState<number>(0);
    const [xSteps, setXSteps] = React.useState<number[]>([0, 0, -10, -15, -18, -15, 0, 100, 200, 300]);

    const onScrollTop = () => {
        if (params.selectedSectionId > 1 && params.selectedSectionId == params.nextSectionId) {
            dispatchParams({ key: "nextSectionId", value: params.selectedSectionId - 1 });
        }
    };

    const onScrollBottom = () => {
        if (params.selectedSectionId < 5 && params.selectedSectionId == params.nextSectionId) {
            dispatchParams({ key: "nextSectionId", value: params.selectedSectionId + 1 });
        }

    };

    const onScroll = (event: any) => {
        event.preventDefault();
        if (homeLayoutRef && homeLayoutRef.current) {
            if (event.target?.scrollTop < 1) {
                setSegma(s => s - 1);
            } else if (event.target?.scrollTop > 1) {
                setSegma(s => s + 1);
            }
            homeLayoutRef.current?.scroll({
                top: 1,
            });
        }
    };

    React.useEffect(() => {
        setScreenHeight(document.body.clientHeight);
        setScreenWidth(document.body.clientWidth);
        dispatchParams({ key: "sections", value: t("sections", { returnObjects: true }) });
    }, []);

    React.useEffect(() => {
        if (segma <= -1) {
            setDirection("up");
        } else if (segma >= 1) {
            setDirection("down");
        }
    }, [segma]);

    React.useEffect(() => {
        if (direction == "up") {
            onScrollTop();
        } else if (direction == "down") {
            onScrollBottom();
        } else {
            setSegma(0);
        }
    }, [direction]);

    React.useEffect(() => {
        if (homeLayoutRef && homeLayoutRef.current) {
            homeLayoutRef.current?.scroll({
                top: 1,
            });
            homeLayoutRef.current.addEventListener("scroll", onScroll);
        }

        return () => {
            if (homeLayoutRef && homeLayoutRef.current) {
                homeLayoutRef.current.removeEventListener("scroll", onScroll);
            }
        };
    }, [homeLayoutRef.current]);

    React.useEffect(() => {
        if (params.selectedSectionId != 0) {
            let section: string = params.sections[params.selectedSectionId - 1].name;
            gaEvent(section, section, "visite", 1);
        }
        setTimeout(() => {
            setDirection("hold");
        }, 1200);
    }, [params.selectedSectionId]);

    React.useEffect(() => {
        if (screenWidth > 0) {
            let newXSteps = xSteps.concat([(screenWidth / 2) + 80]);
            setXSteps(newXSteps);
        }
    }, [screenWidth]);

    React.useEffect(() => {
        if (params.selectedSectionId == 1 && params.nextSectionId == 1) {
            setHide(false);
            setHideAnimation(false);
        } else {
            setHideAnimation(true);
        }
    }, [params.selectedSectionId, params.nextSectionId]);

    let content = (
        <div className={props.className}>
            {params.initAnimation ? (
                <ContactLayout className="w-full h-full scroll-smooth">
                    <MenuLayout className="relative w-full h-full">
                        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                            <motion.div
                                className="h-full w-full"
                                animate={{
                                    rotate: -10,
                                    x: (-(screenWidth > screenHeight ? screenWidth / 3 : screenWidth / 7)),
                                    y: (-(screenWidth > screenHeight ? screenHeight / 20 : screenHeight / 10)),
                                    opacity: (hideAnimation ? ["3%", "0%"] : ["0%", "3%"]),
                                }}
                                transition={{
                                    duration: 0,
                                    opacity: {
                                        duration: 1,
                                    },
                                }}
                                onAnimationComplete={() => {
                                    if (hideAnimation) {
                                        setHide(true);
                                    }
                                }}
                            >
                                <Icon className="h-full w-full flex items-start justify-start" src='/icons/shuriken.svg' priority={true} />
                            </motion.div>
                        </div>
                        <div className={"absolute bottom-0 left-0 h-full flex flex-col-reverse justify-start items-center py-8 pl-1 sm:pl-2 md:pl-3" + (hide || hideAnimation ? " hidden" : "")}>
                            <div className="h-8 w-[2px] flex flex-col bg-[#9197A055]" />
                            <p className="py-4 text-[#9197A077] text-xs md:text-sm" style={{ writingMode: "vertical-rl", textOrientation: "sideways", transform: "rotate(180deg)" }}>
                                {/* INFO: Shuriken 手裏剣; Hidden hand blade */}
                                {/* くそー。 とても珍しい */}
                                {"Happy Mother's Day ❤️"}
                            </p>
                            <div className="h-24 w-[2px] flex flex-col bg-[#9197A055]" />
                        </div>
                        <div
                            id="homeLayout"
                            ref={homeLayoutRef}
                            className="relative h-full w-full overflow-auto overscroll-none"
                        >
                            <div className="w-full h-[1px] bg-transparent" />
                            <div className="w-full h-full">
                                {props.children}
                            </div>
                            <div className="w-full h-[1px] bg-transparent" />
                        </div>
                    </MenuLayout>
                </ContactLayout>
            ) : (
                <motion.div
                    animate={{
                        opacity: (step == 0 ? 0 : 1),
                    }}
                    className={"w-full h-full flex justify-center items-center " + (step == 0 ? "hidden" : "")}
                >
                    <motion.div
                        animate={{
                            rotate: rotation,
                            x: [xSteps[step], xSteps[step + 1]],
                        }}
                        transition={{
                            rotate: {
                                duration: duration,
                                ease: [0.5, 0.2, 1, 1]
                            },
                            x: {
                                duration: duration,
                                ease: "linear"
                            },
                        }}
                        onAnimationComplete={(animation: any) => {
                            if (step < xSteps.length - 2) {
                                setStep(step + 1);
                                if (rotation[0] == 0 || rotation[0] == 360) {
                                    setRotation([180, 360]);
                                } else {
                                    setRotation([0, 180]);
                                }
                                if (duration >= 0.05) {
                                    setDuration(duration / 2);
                                }
                            } else {
                                setRotation([rotation[1], 360]);
                                dispatchParams({ key: "initAnimation", value: true });
                            }
                        }}
                    >
                        <Icon className="" src='/icons/shuriken.svg' dim="80" priority={true} />
                    </motion.div>
                </motion.div>
            )
            }
        </div >
    );

    return content;
};

export default HomeLayout;