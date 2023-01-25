import React from 'react';
import Icon from '../icon/Icon';

type ExperienceType = {
    className: string;
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    tasks: string[];
};

const Experience: React.FC<ExperienceType> = (props) => {

    let content = (<div className={props.className}>
        <div className="flex flex-col px-6 py-4 border border-[#D19E18] rounded-md">
            <p className="font-bold text-lg text-[#B1B7C0]">{props.position}</p>
            <div className="flex flex-row mt-1 mb-4">
                <p className="grow font-medium text-base text-[#D19E18]">{props.company}</p>
                <div className="flex flex-row justify-center items-center mr-6">
                    <Icon className="flex justify-center items-center mr-2" name="CalendarMonthIcon" color="#9197A0" alt="" dim="18" />
                    <p className="inline-block align-middle text-sm text-[#9197A0]">{props.startDate + " - " + props.endDate}</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Icon className="flex justify-center items-center mr-2" name="LocationOnIcon" color="#9197A0" alt="" dim="18" />
                    <p className="inline-block align-middle text-sm text-[#9197A0]">{props.location}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="inline-block align-middle text-sm text-[#9197A0] mb-2">{props.description}</p>
                {props.tasks.map((task: string, index: number) => {
                    return (<div key={index} className="flex flex-row">
                        <p className="inline-block align-middle text-sm text-[#9197A0] mr-2">
                            &#8226;
                        </p>
                        <p key={index} className="inline-block align-middle text-sm text-[#9197A0]">
                            {task}
                        </p>
                    </div>);
                })}
            </div>
        </div>
    </div>);

    return content;
};

export default Experience;