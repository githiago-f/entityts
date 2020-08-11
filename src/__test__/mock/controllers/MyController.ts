import { Autowire } from '../../../decorators/autowired';
import { MyService } from '../services/MyService';

export class MyController {
    @Autowire('MyService')
    private _service: MyService;

    /**
     * used to access it's service from the
     * tests.
     */
    get service(): MyService { return this._service; }

    async runQuery(): Promise<{id: number}[]> {
        const persons = await this.service.selectIdsOnly();
        return persons;
    }

    log(): string {
        if(this._service){
            return this._service.log();
        } else {
            throw new Error('_service is not implemented');
        }
    }
}
