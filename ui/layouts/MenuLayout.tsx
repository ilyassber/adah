import React from 'react';
import ShurikenMenu from '../../components/menu/ShurikenMenu';
import { tailwindcss } from '../../types.d';
import Icon from '../../components/icon/Icon';
import { motion } from "framer-motion";

type MenuLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const MenuLayout: React.FC<MenuLayoutProps> = (props) => {

    let content = (
        <div className={props.className}>
            <div className="h-full w-full flex flex-row">
                <div className="grow xl:basis-2/3 flex items-center">
                    {props.children}
                </div>
                <div className="hidden xl:basis-1/3 h-full xl:flex flex-col items-end justify-center ">
                    <ShurikenMenu className='h-full' />
                </div>
            </div>
        </div>
    );

    return content;
};

export default MenuLayout;