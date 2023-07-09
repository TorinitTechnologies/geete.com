import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
	component: Input,
	argTypes: {
		variant: {
			options: ['outlined', 'filled', 'standard'],
			control: { type: 'select' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Outlined: Story = {
	args: {
		variant: 'outlined',
		label: 'Text Field',
		type: 'text',
	},
};
