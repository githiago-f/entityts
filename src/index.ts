import { Service } from './decorators/service';
import { Autowire } from './decorators/autowired';

@Service
class MyService {}

class Controller {
    private _service;

    @Autowire('impl')
    get service() {return this._service;}

    constructor() {
        console.log(this._service);
    }
}

export const c = new Controller();
