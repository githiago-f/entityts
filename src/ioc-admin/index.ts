// will contain a ioc-container
class IoCContainer {
    private static _instance = new IoCContainer();
    private implementations: {[key: string]: Object} = {};
    public static instance() { return this._instance; }
    private constructor() {
        if(IoCContainer._instance) {
            throw new Error('yoy can\'t instantiate this class');
        }
    }

    resolve(name: string) {
        if(!this.implementations[name]) {
            throw new Error('this implementation isn\'t registered.');
        }
        return this.implementations[name];
    }

    register(name: string, deps: string[], impl: any) {
        this.implementations[name] = new impl();
    }

    get getDependenciesImplementations() {
        return [];
    }
}
