import { Entity } from '../../../decorators/entity';

@Entity('persons', {
    id: {
        type: 'number',
        defaultValue: 1
    },
    name: {
        type: 'string'
    },
    createdAt: {
        type: 'evaluable',
        defaultValue: () => new Date().toISOString()
    }
})
export class Person {
    constructor(
        private id: number,
        private name: string,
        private createdAt: string
    ){}

    get getId(): number { return this.id; }
    get getName(): string { return this.name; }

    get getCreatedAt(): Date { return new Date(this.createdAt); }
    set setCreatedAt(createdAt: Date) {
        this.createdAt = createdAt.toISOString();
    }
}
