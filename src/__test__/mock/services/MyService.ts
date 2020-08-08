import { Service } from '../../../decorators/service';

@Service
export class MyService {
    log(): string {
        return 'Service is being used';
    }
}
