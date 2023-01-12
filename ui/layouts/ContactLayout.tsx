import React from 'react';
import { tailwindcss } from '../../types.d';

type ContactLayoutProps = {
    className: tailwindcss;
    children?: React.ReactNode;
};

const ContactLayout: React.FC<ContactLayoutProps> = (props) => {

    let content = (
        <div className={props.className}>
            <div className="h-full w-full flex flex-col">
                <div className="w-full"></div>
                <div className="grow w-full">
                    {props.children}
                </div>
                <div className="w-full"></div>
            </div>
        </div>
    );

    return content;
};

export default ContactLayout;