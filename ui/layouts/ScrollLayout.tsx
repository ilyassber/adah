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
        if (scrollableElementRef && scrollableElementRef.current) {
            scrollableElementRef.current.addEventListener("scroll", onScroll);
            setClientHeight(scrollableElementRef.current.clientHeight);
            setScrollHeight(scrollableElementRef.current.scrollHeight);
        }
    }, [props.children]);

    React.useEffect(() => {
        if (scrollableElementRef && scrollableElementRef.current) {
            scrollableElementRef.current.scroll({
                top: 0,
            });
        }
    }, [params.selectedSectionId]);

    React.useEffect(() => {
        console.log(clientHeight, scrollHeight, scrollTop);
    }, [clientHeight, scrollHeight, scrollTop]);

    let content = (
        <div className={props.className}>
            <div ref={scrollableElementRef} className="relative h-screen w-full overflow-auto">
                {clientHeight == scrollHeight ? null : (
                    <div
                        className={`fixed left-0 h-full w-1.5 md:w-2 ml-0.5 md:ml-1.5`}
                    >
                        <motion.div
                            className={'w-1.5 md:w-2 rounded bg-gradient-to-b from-transparent via-[#0c151588] to-transparent'}
                            animate={{
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