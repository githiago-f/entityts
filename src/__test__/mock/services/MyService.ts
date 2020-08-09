import { Service } from '../../../decorators/service';
import { Person } from '../models/Person';

@Service('test')
export class MyService implements IService<Person, number> {
    _connection: any;

    save: (entity: Person) => Person;
    update: (entity: Person, id: number) => Person;
    delete: (id: number) => void;
    getOne: (id: number) => Person;
    getAll: () => Person[];

    log(): string {
        return 'Service is being used';
    }
}
