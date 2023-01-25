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
                <div className="mx-6" role="button">
                    <Link className="flex flex-row items-center justify-center" href="" target="_blank">
                        <Icon className="" src="/icons/phone.svg" alt="" dim="18" />
                        <p className="font-medium text-sm text-[#9197A0] ml-2">+212 628 666599</p>
                    </Link>
                </div>
                <div className="mx-6" role="button">
                    <Link className="flex flex-row items-center justify-center" href="" target="_blank">
                        <Icon className="" src="/icons/mail.svg" alt="" dim="18" />
                        <p className="font-medium text-sm text-[#9197A0] ml-2">ilyass.berchida@gmail.com</p>
                    </Link>
                </div>
                <div className="mx-6" role="button">
                    <Link className="flex flex-row items-center justify-center" href="/files/BERCHIDA-ILYASS-CV.pdf" target="_blank">
                        <Icon className="" name="DownloadIcon" color="#9197A0" alt="" dim="18" />
                        <p className="font-medium text-sm text-[#9197A0] ml-2">Download my resume</p>
                    </Link>
                </div>
            </div>
        </div>
    );

    return content;
};

export default PhoneAndMail;