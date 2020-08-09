import { MyController } from './mock/controllers/MyController';
import { IoCContainer } from '../ioc-container/index';
import { MyService } from './mock/services/MyService';

describe('Controller Database integration', () => {
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
});
