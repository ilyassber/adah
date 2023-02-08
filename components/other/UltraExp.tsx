import React from 'react';
import Icon from '../icon/Icon';

type UltraExpType = {
    className: string;
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    tasks: string[];
};

const UltraExp: React.FC<UltraExpType> = (props) => {

    const [degree, setDegree] = React.useState<number>(90);

    React.useEffect(() => {
        setInterval(() => {
            if (degree >= 360) {
                setDegree(1);
            } else {
                setDegree((degree) => degree + ((Math.abs(Math.cos(degree * Math.PI / 180)) + 0.5) * 3));
            }
        }, 20);
    }, []);

    let content = (<div className={props.className}>
        <div className="flex flex-col">
            <div className="relative w-full flex flex-col px-8 py-6 shadow-xl rounded-md border border-[#9197A011] transition duration-200 ease-in-out transform hover:scale-[1.02] hover:bg-[#1B1B1B66]">
                <div
                    className={"absolute -top-4 -right-4 rounded shadow p-0.5"}
                    style={{
                        background: `${props.endDate == "Present" ? "conic-gradient(from " + degree + "deg, #9197A044, #9197A044, #D5A72F)" : "#9197A044"}`
                    }}
                >
                    <div
                        className={"flex justify-center w-24 bg-[#182B2B] font-bold text-sm rounded px-3 py-2 "
                            + (props.endDate == "Present" ? " text-yano-500" : " text-[#9197A077]")}
                    >
                        {props.endDate == "Present" ? "Ongoing" : "Ended"}
                    </div>
                </div>
                <p className="font-bold text-base text-[#B1B7C0]">{props.position}</p>
                <div className="flex flex-row mt-1 mb-4">
                    <p className="grow font-medium text-sm text-yano-500">{props.company}</p>
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
        </div>
    </div>);

    return content;
};

export default UltraExp;