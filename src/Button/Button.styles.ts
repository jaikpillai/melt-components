export type ButtonVariant = 'filled' | 'outline';

export const baseButtonStyles = `pl-6 pr-6 pt-2 pb-2
    m-2
    uppercase
    inline-flex
    items-center
    justify-center
    gap-2
    text-xs
    font-medium
    rounded-md
    focus:ring
    border-2
    border-transparent
    disabled:select-none disabled:cursor-not-allowed`;

export const disabledButtonStyles = `
    bg-neutral-200
    text-neutral-500
    dark:bg-neutral-500
    dark:text-neutral-700
`;

export const loadingStateStyles =
  'cursor-not-allowed bg-primary-300 text-white dark:bg-primary-800 dark:text-primary-400';

export const buttonVariantStyles: { [key in ButtonVariant]: string } = {
  outline:
    'bg-none box-border border-2 inset-auto border-primary-700 text-primary-700 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-800/20',
  filled: 'bg-primary-700 text-white hover:bg-primary-900',
};
