import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
        default: false,
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: {
        type: 'boolean',
        default: false,
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    label: {
      control: {
        type: 'text',
        default: null,
      },
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: {
        type: 'radio',
        default: null,
      },
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default: Story<ButtonProps> = Template.bind({});

Default.args = {
  label: 'Default Button',
};
