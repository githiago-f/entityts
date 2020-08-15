declare interface IColumn {
    type: 'string' | 'number' | 'evaluable';
    name?: string;
    defaultValue?: string | number | TEvaluable;
}

declare type TColumn = Record<string, IColumn>
