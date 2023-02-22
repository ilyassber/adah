import React from 'react';
import { tailwindcss } from '../../types.d';
import { GlobalContext } from '../../components/context/Context';

type ScrollLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const ScrollLayout: React.FC<ScrollLayoutProps> = (props) => {

    const { params, dispatchParams } = React.useContext(GlobalContext);

    React.useEffect(() => {
    }, []);

    let content = (
        <div className={props.className}>
            <div className="relative h-screen w-full max-h-screen flex items-center justify-center overflow-auto">
                {props.children}
            </div>
        </div>
    );

    return content;
};

export default ScrollLayout;