'use client'

import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoopIcon from '@mui/icons-material/Loop';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import WarningIcon from '@mui/icons-material/Warning';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import CalculateIcon from '@mui/icons-material/Calculate';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ParkIcon from '@mui/icons-material/Park';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import Co2Icon from '@mui/icons-material/Co2';
import ReportIcon from '@mui/icons-material/Report';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PublicIcon from '@mui/icons-material/Public';
import LaunchIcon from '@mui/icons-material/Launch';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';


const Icon: React.FC<{
    className: string;
    iconRef?: React.RefObject<HTMLDivElement>;
    name?: string;
    src?: string;
    type?: string;
    alt?: string;
    priority?: boolean;
    color?: string;
    hoverColor?: string;
    dim?: string;
    strokeWidth?: number;
    role?: string
}> = (props) => {

    let iconsList = [
        ['AddIcon', AddIcon],
        ['AddBoxIcon', AddBoxIcon],
        ['SpaIcon', SpaIcon],
        ['MenuIcon', MenuIcon],
        ['ExpandLessIcon', ExpandLessIcon],
        ['MoreHorizIcon', MoreHorizIcon],
        ['MoreVertIcon', MoreVertIcon],
        ['CloseIcon', CloseIcon],
        ['CancelIcon', CancelIcon],
        ['AccountCircleIcon', AccountCircleIcon],
        ['LoopIcon', LoopIcon],
        ['ArrowBackIosNewIcon', ArrowBackIosNewIcon],
        ['ArrowForwardIosIcon', ArrowForwardIosIcon],
        ['DoubleArrowIcon', DoubleArrowIcon],
        ['WarningIcon', WarningIcon],
        ['BarChartIcon', BarChartIcon],
        ['PieChartIcon', PieChartIcon],
        ['EditIcon', EditIcon],
        ['DownloadIcon', DownloadIcon],
        ['DeleteIcon', DeleteIcon],
        ['CalculateIcon', CalculateIcon],
        ['TrendingDownIcon', TrendingDownIcon],
        ['ParkIcon', ParkIcon],
        ['AssessmentIcon', AssessmentIcon],
        ['AgricultureIcon', AgricultureIcon],
        ['PersonIcon', PersonIcon],
        ['LogoutIcon', LogoutIcon],
        ['HomeIcon', HomeIcon],
        ['NorthIcon', NorthIcon],
        ['SouthIcon', SouthIcon],
        ['ArrowUpwardIcon', ArrowUpwardIcon],
        ['ArrowDownwardIcon', ArrowDownwardIcon],
        ['Co2Icon', Co2Icon],
        ['ReportIcon', ReportIcon],
        ['ErrorOutlineIcon', ErrorOutlineIcon],
        ['GitHubIcon', GitHubIcon],
        ['LinkedInIcon', LinkedInIcon],
        ['TwitterIcon', TwitterIcon],
        ['InstagramIcon', InstagramIcon],
        ['LocationOnIcon', LocationOnIcon],
        ['CalendarMonthIcon', CalendarMonthIcon],
        ['PublicIcon', PublicIcon],
        ['LaunchIcon', LaunchIcon],
        ['SendIcon', SendIcon],
        ['DoneIcon', DoneIcon],
        ['CircularProgress', CircularProgress]
    ];

    const [IC, setIC] = React.useState<any>(null);
    const [color, setColor] = React.useState<any>(props.color);

    React.useEffect(() => {
        if (props.name) {
            for (let i = 0; i < iconsList.length; i++) {
                if (iconsList[i][0] == props.name) {
                    setIC(iconsList[i][1]);
                }
            }
        }
    }, [props.name]);

    let content = (<div
        ref={props.iconRef ? props.iconRef : undefined}
        className={props.className}
        onMouseEnter={() => {
            if (color) {
                if (props.hoverColor) {
                    setColor(props.hoverColor);
                }
            }
        }}
        onMouseLeave={() => {
            if (color) {
                if (props.color) {
                    setColor(props.color);
                } else {
                    setColor(null);
                }
            }
        }}
    >
        {IC && props.type == "animated"
            ? (<IC
                style={{
                    color: `${color ? color : "white"}`,
                }}
                size={Number(props.dim)}
            />)
            : IC ? (<IC
                style={{
                    color: `${color ? color : "white"}`,
                    height: `${props.dim}`,
                    width: `${props.dim}`,
                    stroke: `${color && props.strokeWidth ? color : ""}`,
                    strokeWidth: `${props.strokeWidth ? props.strokeWidth : 0}`,
                }}
                role={props.role}
            />) : props.src ? (<div className="w-full h-full flex justify-center items-center relative">
                <Image
                    className={(props.dim ? "object-contain" : "h-full w-full object-fit")}
                    alt={props.alt ? props.alt : ""}
                    height={props.dim ? Number(props.dim) : undefined}
                    width={props.dim ? Number(props.dim) : undefined}
                    src={props.src}
                    priority={props.priority ? props.priority : false}
                    fill={props.dim ? false : true}
                    loading={props.priority ? "eager" : "lazy"}
                />
            </div>) : null}
    </div>);

    return content;
};

export default Icon;