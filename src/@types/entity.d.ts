declare type TEntity = {
    _columns: TColumn;
    _tableName: string;
}

declare type DecoratorEntity =
(tableName: string, schema: TColumn) =>
    (target: TClass) => void;
