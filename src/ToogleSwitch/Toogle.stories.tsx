import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToogleSwitch, ToggleSwitchProps } from '.';

const meta: Meta<ToggleSwitchProps> = {
  title: 'Toggle',
  component: ToogleSwitch,
  argTypes: {
    styles: {
      description: 'Supported\nroot\nlabel',
      control: {
        required: false,
        type: 'object',
      },
    },
    label: {
      control: { type: 'text' },
    },
  },
  parameters: {
    // controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleSwitchProps> = args => <ToogleSwitch {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: Story<ToggleSwitchProps> = Template.bind({});
export const WithLabel: Story<ToggleSwitchProps> = Template.bind({});
export const WithStyles: Story<ToggleSwitchProps> = Template.bind({});

Default.args = {};

WithLabel.storyName = 'With Label';
WithLabel.args = {
  label: 'Enable dark mode',
};

WithStyles.storyName = 'With Styles';
WithStyles.args = {
  label: 'Styled Toogle',
  styles: {
    root: 'm-2',
    label: 'text-lg text-green-400',
  },
};
