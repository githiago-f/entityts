import { Entity } from '../../../decorators/entity';
import { Column } from '../../../decorators/column';

@Entity('persons')
export class Person {
    constructor(
        private _id: number,
        private _name: string
    ){}

    @Column('id')
    get id(): number { return this._id; }
    set id(id: number) {
        this._id = id;
    }

    @Column('name')
    get name(): string { return this._name; }
    set name(name: string) {
        this._name = name;
    }
}
