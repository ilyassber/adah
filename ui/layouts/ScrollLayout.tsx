import React from 'react';
import { tailwindcss } from '../../types.d';
import { GlobalContext } from '../../components/context/Context';
import { motion } from 'framer-motion';

type ScrollLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const ScrollLayout: React.FC<ScrollLayoutProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    const scrollableElementRef = React.useRef<HTMLDivElement>(null);

    const [clientHeight, setClientHeight] = React.useState(0);
    const [scrollHeight, setScrollHeight] = React.useState(0);
    const [scrollTop, setScrollTop] = React.useState(0);

    const onScroll = (event: Event) => {
        if (scrollableElementRef && scrollableElementRef.current) {
            setScrollTop(scrollableElementRef!.current!.scrollTop);
        }
    };

    React.useEffect(() => {
        if (params.selectedSectionId == params.nextSectionId) {
            if (scrollableElementRef && scrollableElementRef.current) {
                scrollableElementRef.current.addEventListener("scroll", onScroll);
                setClientHeight(scrollableElementRef.current.clientHeight);
                setScrollHeight(scrollableElementRef.current.scrollHeight);
            }
        }
    }, [props.children, params.selectedSectionId]);

    React.useEffect(() => {
        if (scrollableElementRef && scrollableElementRef.current) {
            scrollableElementRef.current.scroll({
                top: 0,
            });
        }
    }, [params.selectedSectionId]);

    let content = (
        <div className={props.className}>
            <div ref={scrollableElementRef} className="relative h-full w-full overflow-auto">
                {clientHeight == scrollHeight ? null : (
                    <div
                        className={`fixed left-0 h-full w-1.5 md:w-2 ml-0.5 md:ml-2`}
                    >
                        <motion.div
                            className={'w-1.5 md:w-2 bg-gradient-to-b from-[#0c151518] via-[#0c151588] to-[#0c151518]'}
                            animate={{
                                opacity: [0, 1],
                                marginTop: (scrollTop * (clientHeight / scrollHeight)) + 30,
                                height: `${(clientHeight * (clientHeight / scrollHeight)) - 60}px`
                            }}
                        >
                        </motion.div>
                    </div>
                )}
                {props.children}
            </div>
        </div>
    );

    return content;
};

export default ScrollLayout;