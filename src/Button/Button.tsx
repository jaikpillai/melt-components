import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { CircularLoader } from '../Loader';

import {
  baseButtonStyles,
  ButtonVariant,
  buttonVariantStyles,
  disabledButtonStyles,
  loadingStateStyles,
} from './Button.styles';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  label?: string;
  variant?: ButtonVariant;
  loading?: boolean;
}

const _Button: React.FunctionComponent<ButtonProps> = props => {
  return (
    <button {...props} disabled={props.disabled || props.loading}>
      {props.loading === true && (
        <CircularLoader className="m-0 dark:text-primary-900 dark:fill-neutral-200" />
      )}
      {props.label}
    </button>
  );
};

const StyledButton = tw(_Button)<ButtonProps>`
      ${() => baseButtonStyles}

      ${(p: ButtonProps) => {
        if (p.disabled === true || p.loading == true)
          return disabledButtonStyles;
        else {
          return p?.variant
            ? buttonVariantStyles[p.variant]
            : buttonVariantStyles['filled'];
        }
      }}

      ${(p: ButtonProps) => {
        if (p.loading === true) {
          return loadingStateStyles;
        } else {
          return '';
        }
      }}
`;

export const Button: React.ForwardRefExoticComponent<ButtonProps> = StyledButton;
