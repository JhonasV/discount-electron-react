export interface IMenuItem{
    title: string;
    icon: string;
    pathname: string;
    access?:string[];
    onClick?: () => void;
}

