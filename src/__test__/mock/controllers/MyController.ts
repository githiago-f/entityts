import { Autowire } from '../../../decorators/autowired';
import { MyService } from '../services/MyService';
import { Person } from '../models/Person';

export class MyController {
    @Autowire('MyService')
    private _service: MyService;

    get service(): MyService { return this._service; }

    createOne(entity: Person): void {
        this._service.save(entity);
    }

    getAll(): Promise<Person[]> {
        return this._service.getAll();
    }
}
