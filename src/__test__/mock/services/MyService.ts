import { Service } from '../../../decorators/service';
import { Person } from '../models/Person';
import { Autowire } from '../../../decorators/autowired';
import { DBTestConfig } from '../config/DBTestConfig';

@Service
export class MyService implements IService<Person, number> {
    @Autowire('test')
    _config: DBTestConfig;

    delete: (entity: Person) => Promise<void>;
    getOne: (entity: Person) => Promise<Person>;
    save: (entity: Person) => Promise<Person>;
    update: (entity: Person, id: number) => Promise<Person>;
    getAll: () => Promise<Person[]>;
}
