export interface IBucketlist {
    id: number;
    name: string;
    date_created: string;
    date_modified: string;
    created_by: string;
    items: IItem[];
}

export interface IData {
    count: number;
    next: string;
    previous: string;
    results: IBucketlist[];
}

export interface IItem {
    id: number;
    name: string;
    date_created: string;
    date_modified: string;
    done: boolean;
    bucket: string;
    created_by: string;
}