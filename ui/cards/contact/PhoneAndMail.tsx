import React from 'react';
import Link from 'next/link';
import Icon from '../../../components/icon/Icon';

type PhoneAndMailProps = {
    className: string;
};

const PhoneAndMail: React.FC<PhoneAndMailProps> = (props) => {
    let content = (
        <div className={props.className}>
            <div className="flex flex-row items-center justify-center">
                <div className="">
                    <Link className="flex flex-row items-center justify-center mx-6" href="" target="_blank">
                        <Icon className="" src="/icons/phone.svg" alt="" dim="18" />
                        <p className="font-medium text-sm text-[#9197A0] ml-2">+212 628 666599</p>
                    </Link>
                </div>
                <div className="">
                    <Link className="flex flex-row items-center justify-center mx-6" href="" target="_blank">
                        <Icon className="" src="/icons/mail.svg" alt="" dim="18" />
                        <p className="font-medium text-sm text-[#9197A0] ml-2">ilyass.berchida@gmail.com</p>
                    </Link>
                </div>
            </div>
        </div>
    );

    return content;
};

export default PhoneAndMail;