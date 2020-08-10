import { Service } from '../../../decorators/service';
import { Person } from '../models/Person';
import { Autowire } from '../../../decorators/autowired';
import { DBTestConfig } from '../config/DBTestConfig';

@Service
export class MyService implements IService<Person, number> {
    save: (entity: Person) => Promise<Person>;
    update: (entity: Person, id: number) => Promise<Person>;
    delete: (id: number) => Promise<void>;
    getOne: (id: number) => Promise<Person>;
    getAll: () => Promise<Person[]>;

    @Autowire('test')
    _config: DBTestConfig;

    log(): string {
        return 'Service is being used';
    }
}
