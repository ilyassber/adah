import React from 'react';
import ShurikenMenu from '../../components/menu/ShurikenMenu';
import { tailwindcss } from '../../types.d';

type HomeLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {

    let content = (
        <div className={props.className}>
            <div className="h-full w-full flex flex-col">
                <div className="grow flex flex-row">
                    <div className="grow">
                        {props.children}
                    </div>
                    <div className="flex content-center items-center">
                        <ShurikenMenu className='' />
                    </div>
                </div>
            </div>
        </div>
    );

    return content;
};

export default HomeLayout;