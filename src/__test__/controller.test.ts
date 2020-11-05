import { MyController } from './mock/controllers/MyController';
import { IoCContainer } from '../ioc-container/index';
import { MyService } from './mock/services/MyService';
import { Person } from './mock/models/Person';

describe('Integrations between Controller and Service', () => {
    beforeEach(() => {
        IoCContainer.instance.erase();
    });

    const useController = () => {
        return new MyController();
    };

    test('should include a "MyService" instance', ()=>{
        const controller = useController();
        expect(controller.service).toBeInstanceOf(MyService);
    });

    test('Should realize a simple query and return one value', async () => {
        const controller = useController();
        const service = controller.service;
        const person = (await service.getOne({ id: 1 } as Person));
        expect(person.id).toBe(1);
    });
});
