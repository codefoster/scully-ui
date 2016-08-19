export class Session {
    status: string = 'idle';
    rowers: Rower[] = [
        { name: 'jeremy', distance: 0 }
    ];

    start() {
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