export interface SwitcherProps {
  defaultChecked?: boolean,
  onChange: (value: boolean) => void,
  ariaLabel?: string,
  ariaDescription?: string,
  role?: string,
  children?: React.ReactNode
}