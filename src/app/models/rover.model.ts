export interface IRover {
    id: number;
    name: string;
    landing_date: Date;
    launch_date: Date;
    status: string;
    max_sol: number;
    max_date: Date;
    total_photos: number;
    cameras: ICamera[];
}


export interface ICamera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface IPhotos {
    id: number;
    sol: number;
    camera: {
        id: number;
        name: string;
        rover_id: number;
        full_name: string;
    },
    img_src: string;
    earth_date: Date;
    rover: {
        id: 5,
        name: string;
        landing_date: Date;
        launch_date: Date;
        status: string;
    }
}