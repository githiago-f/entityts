
declare interface IService<Entity, Identificator = number> {
    _entity?: unknown;
    _config: IConfiguration;
    save: (entity: Entity) => Promise<Entity>;
    update: (entity: Entity, id: Identificator) => Promise<Entity>;
    delete: (entity: Entity) => Promise<void>;
    getOne: (entity: Entity) => Promise<Entity>;
    getAll: () => Promise<Entity[]>;
}
