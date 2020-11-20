import React from 'react';
import App from 'App';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'App',
  component: App,
} as Meta;

export const Default: Story = () => <App />;
Default.args = {};
