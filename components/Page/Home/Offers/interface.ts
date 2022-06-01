import { ReactElement } from "react";
export interface IntOffer {
    content:string;
    icon:ReactElement;
    title:string;
}

export interface IntOffers {
    title:string;
    cards:any[];
}