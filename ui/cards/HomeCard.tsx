import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { GlobalContext } from '../../components/context/Context';
import { useTranslation, Trans } from 'next-i18next';

type HomeCardProps = {
    className: string;
};

const HomeCard: React.FC<HomeCardProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);
    const { t } = useTranslation('common');

    const [animation, setAnimation] = React.useState<string>("initAnimation");

    const variants = {
        initAnimation: {
            y: [-20, 0],
            opacity: ["0%", "100%"],
        },
        exitAnimation: {
            y: [0, -10],
            opacity: ["100%", "0%"],
        },
    }

    React.useEffect(() => {
        if (params.nextSectionId != params.selectedSectionId) {
            setAnimation("exitAnimation");
        }
    }, [params.nextSectionId]);

    let content = (
        <div className={props.className}>
            <motion.div
                className="h-screen flex items-center justify-center"
            >
                <div className="relative max-h-screen w-full overflow-auto">
                    <motion.div
                        className="h-screen flex flex-col justify-center p-8 sm:p-12 md:p-20 lg:p-24"
                        variants={variants}
                        animate={animation}
                        transition={{
                            duration: (animation == "initAnimation" ? 0.5 : 0.3),
                            ease: "easeOut",
                        }}
                        onAnimationComplete={(animation: string) => {
                            console.log(animation);
                            if (animation == "exitAnimation") {
                                dispatchParams({ key: "selectedSectionId", value: params.nextSectionId });
                            }
                        }}
                    >
                        <p className="font-semibold text-base sm:text-lg md:text-xl text-yano-500 mb-4 sm:mb-4 md:mb-6 lg:mb-8">
                            {t('home.hi')}
                        </p>
                        <p className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#E2E8F0] mb-4 sm:mb-4 md:mb-6 lg:mb-8">
                            {t('home.name')}
                        </p>
                        <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#9197A0] leading-normal mb-4 sm:mb-4 md:mb-6 lg:mb-8">
                            <Trans i18nKey="home.slogan">
                                I build things & ensure
                                <br />
                                functionality.
                            </Trans>
                        </p>
                        <p className="max-w-lg font-normal text-xs sm:text-sm md:text-base text-[#9197A0] leading-relaxed">
                            <Trans i18nKey="home.intro">
                                I'm a <span className="font-semibold text-yano-500">Software developer</span> specialized in creating digital experiences mainly for the web. Currently focusing on building digital tools that enhance agriculture at <span className="font-semibold text-yano-500">AgriEdge</span>.
                            </Trans>
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );

    return content;
};

export default HomeCard;