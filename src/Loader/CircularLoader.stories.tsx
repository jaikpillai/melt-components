import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CircularLoader, CircularLoaderProps } from './CircularLoader';

const meta: Meta<CircularLoaderProps> = {
  title: 'Loaders/CircularLoader',
  component: CircularLoader,
  argTypes: {
    size: {
      control: {
        default: 'small',
        type: 'select',
      },
    },
  },
};

export default meta;

const Template: Story = args => <CircularLoader {...args} />;

export const Default: Story = Template.bind({});
