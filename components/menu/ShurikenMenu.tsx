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
        y: ["0%", "-100%"],
        fontSize: [
            `${2 / (Math.abs(props.index - 4) + 1)}rem`,
            `${props.animationDirection == "up" ? 2 / (Math.abs(props.index - 5) + 1) : 2 / (Math.abs(props.index - 3) + 1)}rem`
        ],
        fontWeight: 800,
        color: ((props.index == 5 && props.animationDirection == "up") || (props.index == 3 && props.animationDirection == "down") ? "#D19E18" : "#9197A0"),
        opacity: [
            `${100 / (Math.abs(props.index - 4) + 1)}%`,
            `${props.animationDirection == "up" ? 100 / (Math.abs(props.index - 5) + 1) : 100 / (Math.abs(props.index - 3) + 1)}%`
        ],
    } : {
        y: "0%",
        fontSize: `${2 / (Math.abs(props.index - 3) + 1)}rem`,
        fontWeight: 800,
        color: (props.index == 4 ? "#D19E18" : "#9197A0"),
        opacity: `${100 / (Math.abs(props.index - 4) + 1)}%`,
    });
    const [duration, setDuration] = React.useState<any>(0.5);
    const [value, setValue] = React.useState<string>(props.animate ? props.startItem : props.stopItem);

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
                    fontSize: `${2 / (Math.abs(props.index - 4) + 1)}rem`,
                    fontWeight: 800,
                    color: (props.index == 4 ? "#D19E18" : "#9197A0"),
                    opacity: `${100 / (Math.abs(props.index - 4) + 1)}%`,
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
        setPlaces(null);
    }, [selectedIndex]);

    React.useEffect(() => {
        if (!places) {
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
        }
    }, [places]);

    let content = (
        <div className={props.className}>
            <div className="h-full w-full flex flex-row items-center">
                <div ref={menuRef} className="flex flex-col items-end">
                    {places ? places.map((place, index) => {
                        return (<ShurikenMenuItem
                            key={index + 1}
                            index={index + 1}
                            className=""
                            startItem={places[index - 1] ? places[index - 1].name : ""}
                            stopItem={place ? place.name : ""}
                            animate
                            animationDirection='up'
                            onClick={() => {
                                if (place) {
                                    setSelectedIndex(place.id);
                                }
                            }}
                        />)
                    }) : null}
                </div>
                <MousePointedShuriken className='ml-4' />
            </div>
        </div>
    );

    return content;
};

export default ShurikenMenu;