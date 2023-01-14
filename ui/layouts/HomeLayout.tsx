import React from 'react';
import ShurikenMenu from '../../components/menu/ShurikenMenu';
import { GlobalContext } from '../../components/context/Context';
import { tailwindcss } from '../../types.d';
import ContactLayout from './ContactLayout';
import Icon from '../../components/icon/Icon';
import { motion } from "framer-motion";

type HomeLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    const [duration, setDuration] = React.useState<number>(0.4);
    const [rotation, setRotation] = React.useState<number[]>([0, 180]);
    const [step, setStep] = React.useState<number>(0);
    const xSteps: number[] = [0, -10, -15, -18, -15, 0, 100, 200, 300, 400, 500, 600, 700];
    const ySteps: number[] = [0, 50, 100, 50, 0, -50, 0];

    React.useEffect(() => { }, []);

    let content = (
        <div className={props.className}>
            {params.initAnimation ? (
                <ContactLayout className="w-full h-full">
                    <div className="h-full w-full flex flex-row">
                        <div className="grow">
                            {props.children}
                        </div>
                        <div className="h-full flex content-center items-center">
                            <ShurikenMenu className='h-full' />
                        </div>
                    </div>
                </ContactLayout>
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
                            console.log(animation);
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