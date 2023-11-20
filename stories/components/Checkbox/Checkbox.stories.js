import { Checkbox } from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    placeholder: 'Checkbox',
  },
};

export const Secondary = {
  args: {
    placeholder: 'Checkbox',
  },
};

export const Large = {
  args: {
    size: 'large',
    placeholder: 'Checkbox',
  },
};

export const Small = {
  args: {
    size: 'small',
    placeholder: 'Checkbox',
  },
};
