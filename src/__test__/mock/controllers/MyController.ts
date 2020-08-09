import { Autowire } from '../../../decorators/autowired';
import { MyService } from '../services/MyService';

export class MyController {
    @Autowire('MyService')
    private _service: MyService;

    get service(): MyService { return this._service; }

    log(): string {
        if(this._service){
            return this._service.log();
        } else {
            throw new Error('_service is not implemented');
        }
    }
}
