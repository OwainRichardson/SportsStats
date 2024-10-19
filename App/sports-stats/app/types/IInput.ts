export interface IInput {
    label: string;
    value: string;
    onChange: Function | null;
    id: string;
    size: 'sm' | 'md' | 'lg';
}