import React from 'react';
import Link from 'next/link';
import Icon from '../icon/Icon';

type Media = {
    iconSrc: string;
    url: string;
}

type SocialMediaProps = {
    className: string;
    data: Media[];
};

const SocialMedia: React.FC<SocialMediaProps> = (props) => {
    let content = (
        <div className={props.className}>
            <div className="flex flex-row items-center justify-center">
                {
                    props.data.map((media: Media, index: number) => {
                        return (<Link className="mx-6" href={media.url} target="_blank">
                            <Icon key={index} className="" src={media.iconSrc} alt="" dim="22" />
                        </Link>);
                    })
                }
            </div>
        </div>
    );

    return content;
};

export default SocialMedia;