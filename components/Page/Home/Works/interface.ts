
export interface IntButton {
    path:string;
}
export interface IntColumn {
    movies:string[];
    title:string;
}
export interface IntSection{
    content:string;
    title:string;
}
export interface IntWork {
    movie:string;
}

export interface IntWorks extends IntSection, IntButton, IntWorksObject{};

export interface IntWorksObject {
    assembled:string[];
    recorded:string[];
}