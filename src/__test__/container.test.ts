import { IoCContainer } from '../ioc-container/index';

describe('IoC Container', ()=>{
    test('should return a instance of Container', ()=> {
        expect(IoCContainer.instance).toBeInstanceOf(IoCContainer);
    });

    test('implement an nonamed class should return an error', ()=>{
        const errorWrapper = () => IoCContainer.instance.register('', class {});
        IoCContainer.instance.erase();
        expect(
            errorWrapper
        ).toThrowError(new Error('this name isn\'t applyable.'));
    });

    test('try to get an non implemented class should return an error', () => {
        const errorWrapper = () => IoCContainer.instance.resolve('');
        IoCContainer.instance.erase();
        expect(
            errorWrapper
        ).toThrowError(new Error('this implementation isn\'t registered.'));
    });
});
