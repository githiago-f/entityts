import { Service } from '../../../decorators/service';

@Service
export class MyService {
    log() {
        console.log('Service is being used');
    }
}
