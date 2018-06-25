export interface TreeNode {
    label: string;
    value: any;
    disabled?: boolean;
    checked?: boolean;
    collapsed?: boolean;
    children?: TreeNode[];
}