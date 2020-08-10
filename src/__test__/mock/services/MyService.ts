import { Service } from '../../../decorators/service';
import { Person } from '../models/Person';
import { Autowire } from '../../../decorators/autowired';
import { DBTestConfig } from '../config/DBTestConfig';

@Service
export class MyService implements IService<Person, number> {
    @Autowire('test')
    _connection: DBTestConfig;

    save: (entity: Person) => Person;
    update: (entity: Person, id: number) => Person;
    delete: (id: number) => void;
    getOne: (id: number) => Person;
    getAll: () => Person[];

    log(): string {
        return 'Service is being used';
    }
}
