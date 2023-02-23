import React from 'react';
import { tailwindcss } from '../../types.d';
import { GlobalContext } from '../../components/context/Context';

type ScrollLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const ScrollLayout: React.FC<ScrollLayoutProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    const scrollableElementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (scrollableElementRef && scrollableElementRef.current) {
            scrollableElementRef.current.scroll({
                top: 0,
            });
        }
    }, [params.selectedSectionId]);

    let content = (
        <div className={props.className}>
            <div ref={scrollableElementRef} className="relative h-screen w-full overflow-auto">
                {props.children}
            </div>
        </div>
    );

    return content;
};

export default ScrollLayout;