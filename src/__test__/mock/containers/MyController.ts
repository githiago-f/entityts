import { Autowire } from '../../../decorators/autowired';
import { MyService } from './../services/MyService';

export class MyController {
    @Autowire('MyService')
    get service(): MyService {return null;}
}
