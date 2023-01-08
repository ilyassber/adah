import React from 'react';
import { tailwindcss } from '../../types.d';
import Icon from '../icon/Icon';
import MousePointedShuriken from '../shuriken/MousePointedShuriken';
import { motion } from "framer-motion";

type ShurikenMenuProps = {
    className: tailwindcss;
};

const ShurikenMenu: React.FC<ShurikenMenuProps> = (props) => {

    const menuRef = React.useRef<HTMLDivElement>(null);
    const [animation1, setAnimation1] = React.useState<any>({
        y: ["0%", "-100%"],
        fontSize: ["2rem", "1rem"],
        fontWeight: 800,
        color: "#D19E18"
    });
    const [animation2, setAnimation2] = React.useState<any>({
        y: ["0%", "-100%"],
        fontSize: ["3rem", "2rem"],
        fontWeight: 800,
        color: "#D19E18"
    });
    const [animation3, setAnimation3] = React.useState<any>({
        y: ["0%", "-100%"],
        fontSize: ["2rem", "3rem"],
        fontWeight: 800,
        color: "#D19E18"
    });
    const [duration, setDuration] = React.useState<any>(0.5);

    React.useEffect(() => {
        if (menuRef && menuRef.current) {
            menuRef.current.addEventListener("wheel", (event: any) => {
                event.preventDefault();
                console.log(event);
            });
        }
    }, []);

    let content = (
        <div className={props.className}>
            <div className="h-full w-full flex flex-row items-center">
                <div ref={menuRef} className="flex flex-col items-end">
                    <motion.p
                        className="h-24 flex items-center"
                        transition={{ duration: duration }}
                        animate={animation1}
                        onAnimationComplete={() => {
                            setDuration(0);
                            setAnimation1({
                                y: "0%",
                                fontSize: "2rem",
                                fontWeight: 800,
                                color: "#D19E18"
                            });
                        }}
                    >
                        Home
                    </motion.p>
                    <motion.p
                        className="h-24 flex items-center"
                        transition={{ duration: duration }}
                        animate={animation2}
                        onAnimationComplete={() => {
                            setDuration(0);
                            setAnimation2({
                                y: "0%",
                                fontSize: "3rem",
                                fontWeight: 800,
                                color: "#D19E18"
                            });
                        }}
                    >
                        Home
                    </motion.p>
                    <motion.p
                        className="h-24 flex items-center"
                        transition={{ duration: duration }}
                        animate={animation3}
                        onAnimationComplete={() => {
                            setDuration(0);
                            setAnimation3({
                                y: "0%",
                                fontSize: "2rem",
                                fontWeight: 800,
                                color: "#D19E18"
                            });
                        }}
                    >
                        Home
                    </motion.p>
                </div>
                <MousePointedShuriken className='ml-4' />
            </div>
        </div>
    );

    return content;
};

export default ShurikenMenu;