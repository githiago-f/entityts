declare type TClass<T = unknown> = (new (...args: unknown[]) => T);

declare type InstanceTypes = 'singleton' | 'request' | 'trasient';
