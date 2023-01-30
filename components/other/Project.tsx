import React from 'react';
import Icon from '../icon/Icon';

type ProjectType = {
    className: string;
    name: string;
    description: string;
    tasks: string[];
    technologies: string[];
    projectLink: string;
    webLink: string;
};

const Project: React.FC<ProjectType> = (props) => {

    let content = (<div className={props.className}>
        <div className="h-full flex flex-row">
            <div className="h-full w-[2px] bg-[#9197A0bb]"></div>
            <div className="grow flex flex-col px-8 py-6 border-[0.5px] border-[#D19E1800] hover:bg-[#9197A012]">
                <p className="font-bold text-base text-[#B1B7C0]">{props.name}</p>
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
        </div>
    </div>);

    return content;
};

export default Project;