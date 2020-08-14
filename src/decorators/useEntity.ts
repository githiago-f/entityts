const UseEntity: TUseEntity =
(entity) =>
    (target) => {
        const prototype = target.prototype as {_entity: TClass;};
        prototype._entity = entity.prototype;
    };

export { UseEntity };
