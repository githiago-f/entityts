import { MyController } from './mock/controllers/MyController';
import { IoCContainer } from '../ioc-container/index';
import { MyService } from './mock/services/MyService';

describe('Integrations between Controller and Service', () => {
    test('should include a "MyService" instance', ()=>{
        IoCContainer.instance.erase();
        const controller = new MyController();
        expect(controller.service).toBeInstanceOf(MyService);
    });

    test('should override log() from MyService', () => {
        IoCContainer.instance.erase();
        const controller = new MyController();
        expect(controller.log()).toBe('Service is being used');
    });

    test('Should realize a simple query and return one value', async () => {
        IoCContainer.instance.erase();
        const controller = new MyController();
        const value = await controller.runQuery();
        expect(value[0].id).toBe(1);
    });
});
