import { MyController } from './mock/controllers/MyController';
import { MyService } from './mock/services/MyService';

describe('Controller Database integration', () => {
    test('should include a "MyService" instance', ()=>{
        const controller = new MyController();
        controller.log();

        expect(controller.service).toBeInstanceOf(MyService);
    });
});
