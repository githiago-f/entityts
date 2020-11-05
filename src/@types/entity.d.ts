declare type TEntity = {
    _tableName: string;
    _runMigrations: TEvaluable
}

declare type DecoratorEntity =
(tableName: string, schema: TColumn) =>
    (target: TClass) => void;
