import { IoCContainer } from '../ioc-container/index';

describe('IoC Container', ()=>{
    test('should return a instance of Container', ()=> {
        expect(IoCContainer.instance).toBeInstanceOf(IoCContainer);
    });
});
