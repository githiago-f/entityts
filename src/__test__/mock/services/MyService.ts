import { Service } from '../../../decorators/service';

@Service
export class MyService {
    log(): void {
        console.log('Service is being used');
    }
}
