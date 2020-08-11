import { Service } from '../../../decorators/service';
import { Person } from '../models/Person';
import { Autowire } from '../../../decorators/autowired';
import { DBTestConfig } from '../config/DBTestConfig';
import { Query } from '../../../decorators/query';

@Service
export class MyService implements IService<Person, number> {
    @Autowire('test')
    _config: DBTestConfig;

    save: (entity: Person) => Promise<Person>;
    update: (entity: Person, id: number) => Promise<Person>;
    delete: (id: number) => Promise<void>;
    getOne: (id: number) => Promise<Person>;
    getAll: () => Promise<Person[]>;

    @Query('SELECT id FROM persons')
    selectIdsOnly: () => Promise<{id: number}[]>;

    log(): string {
        return 'Service is being used';
    }
}
