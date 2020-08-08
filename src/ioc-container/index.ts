// will contain a ioc-container
export class IoCContainer {
    private static _instance = new IoCContainer();
    private dependencies: Unknown = {};
    public static get instance(): IoCContainer { return this._instance; }
    private constructor() {
        if(IoCContainer._instance) {
            throw new Error('yoy can\'t instantiate this class');
        }
        IoCContainer._instance = this;
    }

    resolve(name: string): unknown {
        if(!this.dependencies[name]) {
            throw new Error('this implementation isn\'t registered.');
        }
        return this.dependencies[name];
    }

    register(name: string, implementation: TClass): void {
        if(this.dependencies[name]) {
            throw new Error('this dependencie is already registered');
        }
        this.dependencies[name] = new implementation();
    }
}
