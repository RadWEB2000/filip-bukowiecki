import { IntButton } from "../Button/interface";
export interface IntMenuItem extends IntButton {
    path:string;
    title:string;
}