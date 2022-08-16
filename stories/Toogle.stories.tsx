import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToogleSwitch, ToggleSwitchProps } from '../src/ToogleSwitch';

const meta: Meta = {
  title: 'Welcome',
  component: ToogleSwitch,
  argTypes: {
    looks: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleSwitchProps> = args => <ToogleSwitch {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: Story<ToggleSwitchProps> = Template.bind({});

Default.args = {
  looks: 'bg-blue-400',
};
