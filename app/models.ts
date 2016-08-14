export class Session {
    status: string = 'idle';
    rowers: Rower[] = [
        { name: 'jeremy' }
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
}