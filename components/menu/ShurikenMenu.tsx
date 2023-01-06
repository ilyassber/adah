import React from 'react';
import { tailwindcss } from '../../types.d';
import Icon from '../icon/Icon';

type ShurikenMenuProps = {
    className: tailwindcss;
};

const ShurikenMenu: React.FC<ShurikenMenuProps> = (props) => {

    const [mouseXCord, setMouseXCord] = React.useState<number>(-1);
    const [mouseYCord, setMouseYCord] = React.useState<number>(-1);
    const iconRef = React.useRef<HTMLDivElement>(null);

    const onMouseMove = (event: MouseEvent) => {
        setMouseXCord(event.clientX);
        setMouseYCord(event.clientY);
    };

    React.useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
    }, []);

    React.useEffect(() => {
        if (iconRef && iconRef.current) {
            let iconRect = iconRef.current.getBoundingClientRect();
            let iconX = (iconRect.left + iconRect.right) / 2;
            let iconY = (iconRect.top + iconRect.bottom) / 2;
            let opposite = iconY - mouseYCord;
            let adjacent = iconX - mouseXCord;
            let hypotenuse = Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
            let sinAlpha = opposite / hypotenuse;
            let alpha = Math.asin(sinAlpha) * (180 / Math.PI);
            if (mouseXCord > iconX) {
                if (alpha > 0) {
                    alpha = 180 - alpha;
                } else {
                    alpha = -180 - alpha;
                }
            }
            iconRef.current.style.transform = `rotate(${alpha}deg)`;
        }
    }, [mouseXCord, mouseYCord]);

    let content = (
        <div className={props.className}>
            <Icon iconRef={iconRef} className="" src='/icons/shuriken.svg' dim="100" priority={true} />
        </div>
    );

    return content;
};

export default ShurikenMenu;