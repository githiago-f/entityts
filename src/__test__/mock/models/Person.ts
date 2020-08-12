import { Entity } from '../../../decorators/entity';

@Entity('persons', {
    id: {
        type: 'number',
        name:'',
        defaultValue: 0
    },
    name: {
        type: 'string',
        defaultValue: 'Thiago'
    }
})
export class Person {
    constructor(
        private _id: number,
        private _name: string
    ){}

    get id(): number { return this._id; }
    get name(): string { return this._name; }
}
