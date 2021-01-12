import React from 'react';
import Button from './Button';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: '123',
};
