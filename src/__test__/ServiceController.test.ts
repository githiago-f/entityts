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
        const person = <Person> (await service.getOne(<Person> ({ id: 1 } as unknown)));

        console.log(Person['_columns']);

        expect(person).toEqual(
            new Person(1, 'Thiago Farias', '04:27:25')
        );
    });
});
