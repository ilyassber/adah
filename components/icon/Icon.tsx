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
import Image from 'next/image';


const Icon: React.FC<{
    className: string;
    iconRef?: React.RefObject<HTMLDivElement>;
    name?: string;
    src?: string;
    alt?: string;
    color?: string;
    hoverColor?: string;
    dim: string;
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
    ];

    const [IC, setIC] = React.useState<any>(null);

    React.useEffect(() => {
        if (props.name) {
            for (let i = 0; i < iconsList.length; i++) {
                if (iconsList[i][0] == props.name) {
                    setIC(iconsList[i][1]);
                }
            }
        }
    }, [props.name]);

    let content = (<div ref={props.iconRef ? props.iconRef : undefined} className={props.className}>
        {IC ? (<IC
            style={{
                color: `${props.color ? props.color : "white"}`,
                height: `${props.dim}`,
                width: `${props.dim}`,
                stroke: `${props.color && props.strokeWidth ? props.color : ""}`,
                strokeWidth: `${props.strokeWidth ? props.strokeWidth : 0}`,
            }}
            role={props.role}
        />) : props.src ? (<div className="w-full h-full flex justify-center items-center relative">
            <Image className="object-contain" alt={props.alt ? props.alt : ""} height={Number(props.dim)} width={Number(props.dim)} src={props.src} />
        </div>) : null}
    </div>);

    return content;
};

export default Icon;