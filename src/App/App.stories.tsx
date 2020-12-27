import React from 'react';
import App from 'App';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'App',
  component: App,
} as Meta;

const Template: Story = () => <App />;

export const Default = Template.bind({});
Default.args = {};
