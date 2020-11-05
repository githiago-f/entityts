import { IoCContainer } from '../ioc-container/index';

describe('# IoCContainer', ()=>{
    beforeEach(() => {
        IoCContainer.instance.erase();
    });

    it('should not implement an unamed object', ()=>{
        const errorWrapper = () => IoCContainer.instance.register('', class {});
        expect(
            errorWrapper
        ).toThrowError(new Error('this name isn\'t applyable.'));
    });

    it('can\'t get a unimplemented object', () => {
        const errorWrapper = () => IoCContainer.instance.resolve('');
        expect(
            errorWrapper
        ).toThrowError(new Error('this implementation isn\'t registered.'));
    });

    it('can\'t register an object more than one time', () => {
        const errorWrapper = () => IoCContainer.instance.register('Effect', class {});

        IoCContainer.instance.register('Effect', class {});

        expect(errorWrapper)
            .toThrowError(new Error('this dependencie is already registered.'));
    });
});
