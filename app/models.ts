export class Session {
    status: string = 'idle';
    distance: number = 500; //meters
    rowers: Rower[] = [
    ];

    start(distance?:number) {
        if(distance) this.distance = distance;
        this.status = 'active';
    }

    end() {
        this.status = 'idle';
    }
}

export class Rower {
    name:string;
    distance:number;
}