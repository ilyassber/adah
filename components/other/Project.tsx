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
            <div className="h-full w-[2px] bg-[#9197A0bb] hidden"></div>
            <div className="grow flex flex-col px-8 py-6 bg-[#1B1B1B00] shadow-xl rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02] hover:bg-[#1B1B1B66] border border-[#A1A7B066]">
                <p className="font-bold text-base text-[#E2E8F0] mb-4">{props.name}</p>
                <div className="flex flex-col mb-6">
                    <p className="inline-block align-middle text-sm text-[#9197A0] mb-4">{props.description}</p>
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
                <div className="flex flex-wrap">
                    {props.technologies.map((tech: string, index: number) => {
                        return (<div key={index} className="flex items-center justify-center bg-[#A1A7B0] rounded mr-2 mb-2">
                            <p key={index} className="inline-block align-middle font-bold text-sm text-[#182B2B] mx-2 my-1">
                                <span className="whitespace-nowrap"></span>{tech}
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