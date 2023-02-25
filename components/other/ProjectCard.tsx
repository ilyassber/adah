import React from 'react';
import Link from 'next/link';
import Icon from '../icon/Icon';

type ProjectCardType = {
    className: string;
    name: string;
    description: string;
    tasks: string[];
    technologies: string[];
    projectLink: string;
    webLink: string;
    onProjectLinkClick: Function;
    onWebLinkClick: Function;
};

const ProjectCard: React.FC<ProjectCardType> = (props) => {

    let content = (<div className={props.className}>
        <div className="h-full flex flex-col bg-[#1B1B1B00] shadow-xl rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02] hover:bg-[#1B1B1B44] border-l border-[#D5A72FBB]">
            <div className="flex flex-col px-8 py-6">
                <div className="w-full flex flex-row items-center mb-4">
                    <p className="grow font-bold text-base text-[#B1B7C0] inline-block align-middle">{props.name}</p>
                    {props.projectLink ? (
                        <Link
                            href={props.projectLink}
                            target="_blank"
                            onClick={() => { props.onProjectLinkClick() }}
                        >
                            <Icon className="flex justify-center items-center" name="GitHubIcon" color="#9197A0" hoverColor="#D5A72F" alt="" dim="25" role='button' />
                        </Link>
                    ) : null}
                    {props.webLink ? (
                        <Link
                            href={props.webLink}
                            target="_blank"
                            onClick={() => { props.onWebLinkClick() }}
                        >
                            <Icon className="flex justify-center items-center ml-4" name="PublicIcon" color="#9197A0" hoverColor="#D5A72F" alt="" dim="25" role='button' />
                        </Link>
                    ) : null}
                </div>
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
                        return (<div key={index} className="flex items-center justify-center bg-[#485B5B] shadow rounded mr-2 mb-2">
                            <p key={index} className="inline-block align-middle font-bold text-sm text-[#102323] mx-2 my-1">
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

export default ProjectCard;