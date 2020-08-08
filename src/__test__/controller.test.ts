import { MyController } from './mock/controllers/MyController';
import { MyService } from './mock/services/MyService';

describe('Controller Database integration', () => {
    test('should include a "MyService" instance', ()=>{
        const controller = new MyController();
        expect(controller.log()).toBe('Service is being used');
    });
});
