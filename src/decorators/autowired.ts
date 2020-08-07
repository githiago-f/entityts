
export const Autowire: MethodDescriptor<string> =
(implementationOf: string) =>
    (target, methodName, descriptor) => {
        console.log(methodName, descriptor, implementationOf);
        return {
            get () {
                return IoCContainer.instance().resolve(implementationOf);
            }
        };
    };
