import { Button } from './Button';

export default {
    title: 'Design System/Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    //tags: ['autodocs'],
    argTypes: {
        brand: {control: 'select', options: ['hepsiburada', 'hepsipay', 'market', 'su', 'cicek',]},
        variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost', 'borderedGray', 'success', 'error']},
        size: { control: 'select', options: ['xs', 'sm', 'md', 'lg']},


        iconLeft: {table: { category: 'icon', },},
        iconRight: {table: { category: 'icon', },},
        iconOnly: {table: { category: 'icon', },},
        icon: {table: { category: 'icon', },},
    },  
};

export const Default = {
    args: {
        brand: 'hepsiburada',
        theme: 'light',
        variant: 'primary',
        text: 'Button',
        size: 'md',
        disabled: false,
        iconLeft: false,
        iconRight: false,
        iconOnly: false,
        icon: "+",
    },
};


