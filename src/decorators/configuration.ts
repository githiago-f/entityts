
export const Configuration: ClassDescriptor =
    (config: Config ) =>
        (constructor) => {
            constructor.prototype['_config'] = config;
        };
