import React from 'react';
import { GlobalContext } from '../context/Context';
import { tailwindcss } from '../../types.d';
import Icon from '../icon/Icon';
import MousePointedShuriken from '../shuriken/MousePointedShuriken';
import { motion } from "framer-motion";

type ShurikenMenuItemProps = {
    index: number;
    className: tailwindcss;
    startItem: string;
    stopItem: string;
    animate: boolean;
    animationDirection: string;
    speedUp?: boolean;
    onClick: () => void;
    onAnimationComplete?: () => void;
};

type ShurikenMenuProps = {
    className: tailwindcss;
};

const ShurikenMenuItem: React.FC<ShurikenMenuItemProps> = (props) => {
    const [animation, setAnimation] = React.useState<any>(props.animate ? {
        y: ["0%", (props.animationDirection == "up" ? "-100%" : "100%")],
        x: [
            `${10 * (Math.abs(props.index - 4))}px`,
            `${props.animationDirection == "up" ? 10 * Math.abs(props.index - 5) : 10 * Math.abs(props.index - 3)}px`
        ],
        fontSize: [
            `${2 / (Math.abs(props.index - 4) + 1)}rem`,
            `${props.animationDirection == "up" ? 2 / (Math.abs(props.index - 5) + 1) : 2 / (Math.abs(props.index - 3) + 1)}rem`
        ],
        fontWeight: 800,
        color: (props.speedUp ? "#9197A0" : ((props.index == 5 && props.animationDirection == "up") || (props.index == 3 && props.animationDirection == "down") ? "#D5A72F" : "#9197A0")),
        opacity: [
            `${100 - (30 * (Math.abs(props.index - 4)))}%`,
            `${props.animationDirection == "up" ? 100 - (30 * Math.abs(props.index - 5)) : 100 - (30 * Math.abs(props.index - 3))}%`
        ],
    } : {
        y: "0%",
        x: `${10 * (Math.abs(props.index - 4))}px`,
        fontSize: `${2 / (Math.abs(props.index - 4) + 1)}rem`,
        fontWeight: 800,
        color: (props.index == 4 ? "#D5A72F" : "#9197A0"),
        opacity: `${100 - (30 * (Math.abs(props.index - 4)))}%`,
    });
    const [duration, setDuration] = React.useState<any>(props.animate ? (props.speedUp ? 0.2 : 0.4) : 0);
    const [value, setValue] = React.useState<string>(props.animate ? props.startItem : props.stopItem);

    React.useEffect(() => {
        setValue(props.animate ? props.startItem : props.stopItem);
        setDuration(props.animate ? (props.speedUp ? 0.2 : 0.4) : 0);
        setAnimation(props.animate ? {
            y: ["0%", (props.animationDirection == "up" ? "-100%" : "100%")],
            x: [
                `${10 * (Math.abs(props.index - 4))}px`,
                `${props.animationDirection == "up" ? 10 * Math.abs(props.index - 5) : 10 * Math.abs(props.index - 3)}px`
            ],
            fontSize: [
                `${2 / (Math.abs(props.index - 4) + 1)}rem`,
                `${props.animationDirection == "up" ? 2 / (Math.abs(props.index - 5) + 1) : 2 / (Math.abs(props.index - 3) + 1)}rem`
            ],
            fontWeight: 800,
            color: (props.speedUp ? "#9197A0" : ((props.index == 5 && props.animationDirection == "up") || (props.index == 3 && props.animationDirection == "down") ? "#D5A72F" : "#9197A0")),
            opacity: [
                `${100 - (30 * (Math.abs(props.index - 4)))}%`,
                `${props.animationDirection == "up" ? 100 - (30 * Math.abs(props.index - 5)) : 100 - (30 * Math.abs(props.index - 3))}%`
            ],
        } : {
            y: "0%",
            x: `${10 * (Math.abs(props.index - 4))}px`,
            fontSize: `${2 / (Math.abs(props.index - 4) + 1)}rem`,
            fontWeight: 800,
            color: (props.index == 4 ? "#D5A72F" : "#9197A0"),
            opacity: `${100 - (30 * (Math.abs(props.index - 4)))}%`,
        });
    }, [props.startItem, props.stopItem]);

    React.useEffect(() => {
        if (!props.speedUp && duration == 0) {
            setAnimation({
                y: "0%",
                x: `${10 * (Math.abs(props.index - 4))}px`,
                fontSize: `${2 / (Math.abs(props.index - 4) + 1)}rem`,
                fontWeight: 800,
                color: (props.speedUp ? "#9197A0" : (props.index == 4 ? "#D5A72F" : "#9197A0")),
                opacity: `${100 - (30 * (Math.abs(props.index - 4)))}%`,
            });
        }
    }, [props.speedUp]);

    let content = (
        <motion.div
            className="h-20 flex items-center align-text-top"
            transition={{ duration: duration }}
            animate={animation}
            onAnimationComplete={() => {
                if (duration == 0) {
                    if (props.onAnimationComplete) {
                        props.onAnimationComplete();
                    }
                } else {
                    setDuration(0);
                    setValue(props.stopItem);
                    setAnimation({
                        y: "0%",
                        x: `${10 * (Math.abs(props.index - 4))}px`,
                        fontSize: `${2 / (Math.abs(props.index - 4) + 1)}rem`,
                        fontWeight: 800,
                        color: (props.speedUp ? "#9197A0" : (props.index == 4 ? "#D5A72F" : "#9197A0")),
                        opacity: `${100 - (30 * (Math.abs(props.index - 4)))}%`,
                    });
                }
            }}
        >
            <p
                role="button"
                onClick={props.onClick}
            >
                {value}
            </p>
        </motion.div>
    );

    return content;
};

const ShurikenMenu: React.FC<ShurikenMenuProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    const menuRef = React.useRef<HTMLDivElement>(null);

    const [selectedIndex, setSelectedIndex] = React.useState<number>(1);
    const [prevIndex, setPrevIndex] = React.useState<number>(1);
    const [wheelDelta, setWheelDelta] = React.useState<number>(0);
    const [wheelEvents, setWheelEvents] = React.useState<number>(0);
    const [currentIndex, setCurrentIndex] = React.useState<number>(1);
    const [animate, setAnimate] = React.useState<boolean>(false);
    const [animation, setAnimation] = React.useState<boolean>(false);
    const [speedUp, setSpeedUp] = React.useState<boolean>(false);
    const [animationDirection, setAnimationDirection] = React.useState<string>("up");
    const [places, setPlaces] = React.useState<any[] | null>(null);

    const incrementIndex = () => {
        if (selectedIndex < 5 && !animation) {
            setAnimation(true);
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const decrementIndex = () => {
        if (selectedIndex > 1 && !animation) {
            setAnimation(true);
            setSelectedIndex(selectedIndex - 1);
        }
    };

    const onWheel = (event: any) => {
        event.preventDefault();
        console.log(event.wheelDeltaY, event.deltaY);
        setWheelEvents(eventsN => eventsN + 1);
        setWheelDelta(event.deltaY);
    };

    React.useEffect(() => {
        let newPlacesList = [];
        for (let i = 0; i < 7; i++) {
            if (selectedIndex - 4 + i >= 0 && selectedIndex - 4 + i < 5) {
                newPlacesList.push(params.sections[selectedIndex - 4 + i]);
            } else {
                newPlacesList.push(null);
            }
        }
        setPlaces(newPlacesList);
        if (menuRef && menuRef.current) {
            menuRef.current.addEventListener("wheel", onWheel);
        }

        return () => {
            if (menuRef && menuRef.current) {
                menuRef.current.removeEventListener("wheel", onWheel);
            }
        };
    }, []);

    React.useEffect(() => {
        if (wheelEvents > 7) {
            if (wheelDelta > 15) {
                incrementIndex();
            } else if (wheelDelta < -15) {
                decrementIndex();
            } else {
                dispatchParams({ key: "nextSectionId", value: selectedIndex });
                setSpeedUp(false);
                setWheelEvents(0);
            }
        }
    }, [wheelDelta]);

    React.useEffect(() => {
        setSelectedIndex(params.nextSectionId);
    }, [params.nextSectionId]);

    React.useEffect(() => {
        if (currentIndex < selectedIndex) {
            setPrevIndex(currentIndex);
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex > selectedIndex) {
            setPrevIndex(currentIndex);
            setCurrentIndex(currentIndex - 1);
        }
        if (Math.abs(currentIndex - selectedIndex) == 1) {
            if (Math.abs(wheelDelta) < 15) {
                dispatchParams({ key: "nextSectionId", value: selectedIndex });
            }
        }
    }, [selectedIndex]);

    React.useEffect(() => {
        let newPlacesList = [];
        if (currentIndex == selectedIndex) {
            if (Math.abs(wheelDelta) < 15) {
                setSpeedUp(false);
            } else {
                setSpeedUp(true);
            }
        } else {
            setSpeedUp(true);
        }
        if (prevIndex < currentIndex) {
            setAnimate(true);
            setAnimationDirection("up");
        } else if (prevIndex > currentIndex) {
            setAnimate(true);
            setAnimationDirection("down");
        }
        for (let i = 0; i < 7; i++) {
            if (currentIndex - 4 + i >= 0 && currentIndex - 4 + i < 5) {
                newPlacesList.push(params.sections[currentIndex - 4 + i]);
            } else {
                newPlacesList.push(null);
            }
        }
        setPlaces(newPlacesList);
    }, [currentIndex]);

    const onAnimationComplete = () => {
        setAnimation(false);
        setSpeedUp(false);
        if (currentIndex < selectedIndex) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex > selectedIndex) {
            setCurrentIndex(currentIndex - 1);
        } else {
            if (wheelDelta <= 15 && wheelDelta >= -15) {
                dispatchParams({ key: "nextSectionId", value: selectedIndex });
            }
        }
    };

    let content = (
        <div className={props.className}>
            <div id="shurikenmenu" className="h-full w-full flex flex-row items-center">
                <motion.div
                    ref={menuRef}
                    className="flex flex-col items-end"
                    animate={{
                        opacity: ["0%", "100%"],
                        x: [-40, 0],
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                >
                    {
                        places
                            ? places.map((place, index) => {
                                return (<ShurikenMenuItem
                                    key={index + 1}
                                    index={index + 1}
                                    className=""
                                    startItem={animationDirection == "up" ? (places[index - 1] ? places[index - 1].name : "") : (places[index + 1] ? places[index + 1].name : "")}
                                    stopItem={place ? place.name : ""}
                                    animate={animate}
                                    animationDirection={animationDirection}
                                    speedUp={speedUp}
                                    onClick={() => {
                                        if (place) {
                                            setSelectedIndex(place.id);
                                        }
                                    }}
                                    onAnimationComplete={onAnimationComplete}
                                />)
                            })
                            : null
                    }
                </motion.div>
                <MousePointedShuriken className='ml-4' elementId='shurikenmenu' />
            </div>
        </div>
    );

    return content;
};

export default ShurikenMenu;