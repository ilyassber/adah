import React from 'react';
import ShurikenMenu from '../../components/menu/ShurikenMenu';
import { GlobalContext } from '../../components/context/Context';
import { tailwindcss } from '../../types.d';
import ContactLayout from './ContactLayout';
import Icon from '../../components/icon/Icon';
import { motion } from "framer-motion";
import MenuLayout from './MenuLayout';

type HomeLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    const homeLayoutRef = React.useRef<HTMLDivElement>(null);
    const [scrollTop, setScrollTop] = React.useState<number>(1);
    const [isScrolling, setIsScrolling] = React.useState<boolean>(false);

    const [duration, setDuration] = React.useState<number>(0.4);
    const [rotation, setRotation] = React.useState<number[]>([0, 180]);
    const [screenHeight, setScreenHeight] = React.useState<number>(0);
    const [screenWidth, setScreenWidth] = React.useState<number>(0);
    const [hideAnimation, setHideAnimation] = React.useState<boolean>(false);
    const [hide, setHide] = React.useState<boolean>(false);
    const [step, setStep] = React.useState<number>(0);
    const [xSteps, setXSteps] = React.useState<number[]>([0, -10, -15, -18, -15, 0, 100, 200, 300]);
    const ySteps: number[] = [0, 50, 100, 50, 0, -50, 0];

    const onScrollTop = () => {
        if (params.selectedSectionId > 1) {
            dispatchParams({ key: "selectedSectionId", value: params.selectedSectionId - 1 });
        }
    };

    const onScrollBottom = () => {
        if (params.selectedSectionId < 5) {
            dispatchParams({ key: "selectedSectionId", value: params.selectedSectionId + 1 });
        }

    };

    const preventWheel = (event: WheelEvent) => {
        event.preventDefault();
    };

    const disableWheel = () => {
        if (homeLayoutRef && homeLayoutRef.current) {
            homeLayoutRef.current.addEventListener("wheel", preventWheel);
        }
    };

    const onScroll = (event: Event) => {
        if (homeLayoutRef && homeLayoutRef.current) {
            setScrollTop(homeLayoutRef.current?.scrollTop);
            homeLayoutRef.current?.scroll({
                top: 1,
            });
        }
    };

    React.useEffect(() => {
        setScreenHeight(document.body.clientHeight);
        setScreenWidth(document.body.clientWidth);
    }, []);

    React.useEffect(() => {
        if (scrollTop == 0) {
            onScrollTop();
        } else if (scrollTop == 2) {
            onScrollBottom();
        }
    }, [scrollTop]);

    // React.useEffect(() => {
    //     if (homeLayoutRef && homeLayoutRef.current) {
    //         homeLayoutRef.current.removeEventListener("wheel", disableWheel);
    //     }
    // }, [params.selectedSectionId]);

    React.useEffect(() => {
        console.log(isScrolling);
    }, [isScrolling]);

    React.useEffect(() => {
        if (homeLayoutRef && homeLayoutRef.current) {
            homeLayoutRef.current?.scroll({
                top: 1,
            });
            homeLayoutRef.current.addEventListener("scroll", onScroll);
        }
    }, [homeLayoutRef.current]);

    React.useEffect(() => {
        if (screenWidth > 0) {
            let newXSteps = xSteps.concat([(screenWidth / 2) + 80]);
            setXSteps(newXSteps);
        }
    }, [screenWidth]);

    React.useEffect(() => {
        if (params.selectedSectionId == 1) {
            setHide(false);
            setHideAnimation(false);
        } else {
            setHideAnimation(true);
        }
    }, [params.selectedSectionId]);

    let content = (
        <div className={props.className}>
            {params.initAnimation ? (
                <div
                    ref={homeLayoutRef}
                    className="relative h-screen w-full overflow-auto"
                >
                    <div className="w-full h-[1px] bg-red-900" />
                    <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                            <motion.div
                                className="h-full w-full"
                                animate={{
                                    rotate: -10,
                                    x: (-screenWidth / 3),
                                    y: (-screenHeight / 20),
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
                                <Icon className="h-full w-full" src='/icons/shuriken.svg' priority={true} />
                            </motion.div>
                        </div>
                        <div className={"absolute bottom-0 left-0 h-full flex flex-col flex-col-reverse justify-start items-center py-8 pl-1 sm:pl-2 md:pl-3" + (hide || hideAnimation ? " hidden" : "")}>
                            <div className="h-8 w-[2px] flex flex-col bg-[#9197A055]" />
                            <p className="py-4 text-[#9197A077] text-xs md:text-sm" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>
                                {/* INFO: Shuriken 手裏剣; Hidden hand blade */}
                                くそー。 とても珍しい
                            </p>
                            <div className="h-24 w-[2px] flex flex-col bg-[#9197A055]" />
                        </div>
                        <ContactLayout className="w-full h-full">
                            <MenuLayout className="w-full h-full">
                                {props.children}
                            </MenuLayout>
                        </ContactLayout>
                    </div>
                    <div className="w-full h-[1px] bg-red-900" />
                </div>
            ) : (
                <div className="w-full h-full flex justify-center items-center">
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
                </div>
            )}
        </div>
    );

    return content;
};

export default HomeLayout;