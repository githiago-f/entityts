import { Autowire } from '../../../decorators/autowired';
import { MyService } from '../services/MyService';

export class MyController {
    @Autowire('MyService')
    private _service: MyService;

    get service(): MyService {
        return this._service;
    }

    log(): void {
        this._service.log();
    }
}
