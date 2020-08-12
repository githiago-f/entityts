const UseEntity: TClassDecorator =
(entity: TClass) =>
    (target: TClass) => {
        const prototype = target.prototype as {_entity: TClass;};
        prototype._entity = entity.prototype;
    };

export { UseEntity };
