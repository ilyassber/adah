import React from 'react';
import Link from 'next/link';
import Icon from '../icon/Icon';

type Media = {
    iconSrc?: string;
    iconName?: string;
    iconColor?: string;
    iconHoverColor?: string;
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
                            {media.iconSrc ? (
                                <Icon key={index} className="" src={media.iconSrc} alt="" dim="22" />
                            ) : media.iconName ? (
                                <Icon key={index} className="flex justify-center" name={media.iconName} color={media.iconColor} hoverColor={media.iconHoverColor} alt="" dim="25" />
                            ) : (
                                null
                            )}
                        </Link>);
                    })
                }
            </div>
        </div>
    );

    return content;
};

export default SocialMedia;