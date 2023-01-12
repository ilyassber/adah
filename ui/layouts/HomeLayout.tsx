import React from 'react';
import ShurikenMenu from '../../components/menu/ShurikenMenu';
import { tailwindcss } from '../../types.d';
import ContactLayout from './ContactLayout';

type HomeLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {

    let content = (
        <div className={props.className}>
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
        </div>
    );

    return content;
};

export default HomeLayout;