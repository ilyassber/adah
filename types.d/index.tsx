export type tailwindcss = string;

export type Message = {
    message: string;
    sendDateTime: string;
};

export type Experience = {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    state: string;
    location: string;
    description: string;
    tasks: string[];
};

export type Project = {
    title: string;
    description: string;
    tasks: string[];
    technologies: string[];
    projectLink: string;
    webLink: string;
};