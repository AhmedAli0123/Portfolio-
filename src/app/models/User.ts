export interface UserObject {
    name: string
    picture:string
    heading:string
    about:string
    skills:Array<string>
}

export interface headerItem {
    label: string
    page: string
}

export interface NavItem {
    home: headerItem,
    about:headerItem
    skills:headerItem
    projects:headerItem
    contact:headerItem
}

export interface propsType{
    title:string;
}

export interface project{
    _id:string
    title:string,
    desc:string,
    imageUrl:string,
    tags:Array<string>,
    url:string
}