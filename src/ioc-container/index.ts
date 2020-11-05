export class IoCContainer {
    private static _instance = new IoCContainer();
    private dependencies: Unknown = {
        'console': console.log
    };
    public static get instance(): IoCContainer { return this._instance; }
    private constructor() {
        if(IoCContainer._instance) {
            throw new Error('yoy can\'t instantiate this class');
        }
        IoCContainer._instance = this;
    }

    resolve(name: string): unknown | Error {
        if(name.trim() === '' || !this.dependencies[name]) {
            throw new Error('this implementation isn\'t registered.');
        }
        return this.dependencies[name];
    }

    register(name: string, Implementable: TClass): void | Error {
        if(name.trim() === '') {
            throw new Error('this name isn\'t applyable.');
        }
        if(this.dependencies[name]) {
            throw new Error('this dependencie is already registered.');
        }
        this.dependencies[name] = new Implementable();
    }

    /**
     * @description this is only applyable to tests
     */
    erase(): void {
        this.dependencies = {
            'console': console.log
        };
    }
}
