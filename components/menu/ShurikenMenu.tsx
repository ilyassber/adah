import React from 'react';
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
    onClick: () => void;
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
        color: ((props.index == 5 && props.animationDirection == "up") || (props.index == 3 && props.animationDirection == "down") ? "#D19E18" : "#9197A0"),
        opacity: [
            `${100 - (30 * (Math.abs(props.index - 4)))}%`,
            `${props.animationDirection == "up" ? 100 - (30 * Math.abs(props.index - 5)) : 100 - (30 * Math.abs(props.index - 3))}%`
        ],
    } : {
        y: "0%",
        x: `${10 * (Math.abs(props.index - 4))}px`,
        fontSize: `${2 / (Math.abs(props.index - 3) + 1)}rem`,
        fontWeight: 800,
        color: (props.index == 4 ? "#D19E18" : "#9197A0"),
        opacity: `${100 - (30 * (Math.abs(props.index - 4)))}%`,
    });
    const [duration, setDuration] = React.useState<any>(0.5);
    const [value, setValue] = React.useState<string>(props.animate ? props.startItem : props.stopItem);

    React.useEffect(() => {
        console.log(props.startItem, props.stopItem);
    }, []);

    React.useEffect(() => {
        setValue(props.animate ? props.startItem : props.stopItem);
        setDuration(0.5);
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
            color: ((props.index == 5 && props.animationDirection == "up") || (props.index == 3 && props.animationDirection == "down") ? "#D19E18" : "#9197A0"),
            opacity: [
                `${100 - (30 * (Math.abs(props.index - 4)))}%`,
                `${props.animationDirection == "up" ? 100 - (30 * Math.abs(props.index - 5)) : 100 - (30 * Math.abs(props.index - 3))}%`
            ],
        } : {
            y: "0%",
            x: `${10 * (Math.abs(props.index - 4))}px`,
            fontSize: `${2 / (Math.abs(props.index - 3) + 1)}rem`,
            fontWeight: 800,
            color: (props.index == 4 ? "#D19E18" : "#9197A0"),
            opacity: `${100 - (30 * (Math.abs(props.index - 4)))}%`,
        });
    }, [props.startItem, props.stopItem]);

    let content = (
        <motion.div
            className="h-20 flex items-center align-text-top"
            transition={{ duration: duration }}
            animate={animation}
            onAnimationComplete={() => {
                setValue(props.stopItem);
                setDuration(0);
                setAnimation({
                    y: "0%",
                    x: `${10 * (Math.abs(props.index - 4))}px`,
                    fontSize: `${2 / (Math.abs(props.index - 4) + 1)}rem`,
                    fontWeight: 800,
                    color: (props.index == 4 ? "#D19E18" : "#9197A0"),
                    opacity: `${100 - (30 * (Math.abs(props.index - 4)))}%`,
                });
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

    const menuRef = React.useRef<HTMLDivElement>(null);

    const [selectedIndex, setSelectedIndex] = React.useState<number>(2);
    const [animationDirection, setAnimationDirection] = React.useState<string>("up");
    const [places, setPlaces] = React.useState<any[] | null>(null);
    const items = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "About"
        },
        {
            id: 3,
            name: "Experience"
        },
        {
            id: 4,
            name: "Projects"
        },
        {
            id: 5,
            name: "Get in Touch"
        }
    ];

    React.useEffect(() => {
        let newPlacesList = [];
        for (let i = 0; i < 7; i++) {
            if (selectedIndex - 4 + i >= 0 && selectedIndex - 4 + i < 5) {
                newPlacesList.push(items[selectedIndex - 4 + i]);
            } else {
                newPlacesList.push(null);
            }
        }
        setPlaces(newPlacesList);
        if (menuRef && menuRef.current) {
            menuRef.current.addEventListener("wheel", (event: any) => {
                event.preventDefault();
                console.log(event);
            });
        }
    }, []);

    React.useEffect(() => {
        let newPlacesList = [];
        for (let i = 0; i < 7; i++) {
            if (selectedIndex - 4 + i >= 0 && selectedIndex - 4 + i < 5) {
                newPlacesList.push(items[selectedIndex - 4 + i]);
            } else {
                newPlacesList.push(null);
            }
        }
        console.log(newPlacesList);
        setPlaces(newPlacesList);
    }, [selectedIndex]);

    React.useEffect(() => {
        console.log(places);
    }, [places]);

    let content = (
        <div className={props.className}>
            <div id="shurikenmenu" className="h-full w-full flex flex-row items-center">
                <div ref={menuRef} className="flex flex-col items-end">
                    {
                        places
                            ? places.map((place, index) => {
                                return (<ShurikenMenuItem
                                    key={index + 1}
                                    index={index + 1}
                                    className=""
                                    startItem={animationDirection == "up" ? (places[index - 1] ? places[index - 1].name : "") : (places[index + 1] ? places[index + 1].name : "")}
                                    stopItem={place ? place.name : ""}
                                    animate={true}
                                    animationDirection={animationDirection}
                                    onClick={() => {
                                        if (place) {
                                            if (place.id > selectedIndex) {
                                                setAnimationDirection("up");
                                            } else {
                                                setAnimationDirection("down");
                                            }
                                            setSelectedIndex(place.id);
                                        }
                                    }}
                                />)
                            })
                            : null
                    }
                </div>
                <MousePointedShuriken className='ml-4' elementId='shurikenmenu' />
            </div>
        </div>
    );

    return content;
};

export default ShurikenMenu;