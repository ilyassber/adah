import React from 'react';
import { tailwindcss } from '../../types.d';

type HomeLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {

    let content = (
        <div className={props.className}>
            {props.children}
        </div>
    );

    return content;
};

export default HomeLayout;