import { Service } from '../../../decorators/service';
import { Person } from '../models/Person';
import { Autowire } from '../../../decorators/autowire';
import { DBTestConfig } from '../config/DBTestConfig';
import { UseEntity } from '../../../decorators/useEntity';
import { Query } from '../../../decorators/query';

@Service
@UseEntity(Person)
export class MyService implements IService<Person, number> {
    @Autowire('test')
    _config: DBTestConfig;

    delete: (entity: Person) => Promise<void>;
    getOne: (entity: Person) => Promise<Person>;
    save: (entity: Person) => Promise<Person>;
    update: (entity: Person, id: number) => Promise<Person>;
    getAll: () => Promise<Person[]>;

    // access data
    @Query('SELECT * FROM _tableName')
    testQuery: () => Promise<Person[]>;
}
