import React from 'react';
import Link from 'next/link';
import Icon from '../icon/Icon';

type Media = {
    iconSrc?: string;
    iconName?: string;
    iconAlt?: string;
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
                        return (<Link key={index} className="mx-4 sm:mx-6" href={media.url} target="_blank">
                            {media.iconSrc ? (
                                <Icon className="" src={media.iconSrc} alt={media.iconAlt} dim="22" />
                            ) : media.iconName ? (
                                <Icon className="flex justify-center" name={media.iconName} color={media.iconColor} hoverColor={media.iconHoverColor} alt={media.iconAlt} dim="25" />
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