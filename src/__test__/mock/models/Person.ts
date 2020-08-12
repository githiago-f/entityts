import { Entity } from '../../../decorators/entity';

@Entity('persons', {
    '_id': {
        type: 'number'
    },
    '_name': {
        type: 'string'
    }
})
export class Person {
    constructor(
        private _id: number,
        private _name: string
    ){}
}
