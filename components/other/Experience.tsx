import React from 'react';

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
        <div className="flex flex-col">
            <p className="">{props.position}</p>
            <div className="flex flex-row">
                <p className="grow">{props.company}</p>
                <p className="">{props.startDate + " - " + props.endDate}</p>
                <p className="">{props.location}</p>
            </div>
            <div className="flex flex-col">
                <p className="">{props.description}</p>
                {props.tasks.map((task: string, index: number) => {
                    return <p key={index} className="">{task}</p>;
                })}
            </div>
        </div>
    </div>);

    return content;
};

export default Experience;