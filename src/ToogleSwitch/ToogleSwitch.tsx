import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

export interface ToogleSwitchStylesProps {
  root?: string;
  label?: string;
}

export interface ToggleSwitchProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  styles?: ToogleSwitchStylesProps;
}

export const ToogleSwitch: React.FC<ToggleSwitchProps> = props => {
  const styles = (style?: ToogleSwitchStylesProps) => {
    return {
      root: `${'inline-flex items-center ' + style?.root}`,
      label: `mr-4 font-bold ${style?.label}`,
    };
  };

  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <div className={styles(props.styles).root}>
        {props.label && (
          <Switch.Label className={styles(props.styles).label}>
            {props.label}
          </Switch.Label>
        )}
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};
