declare interface IColumn {
    type: 'string' | 'number';
    name?: string;
    defaultValue?: string | number;
}

declare type TColumn = Record<string, IColumn>
