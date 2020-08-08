
export const Configuration: TClassDecorator =
    (config: Config ) =>
        (constructor) => {
            constructor.prototype['_config'] = config;
        };
