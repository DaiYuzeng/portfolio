export interface SwitcherProps {
  defaultChecked?: boolean,
  onChange: (value: boolean) => void,
  ariaLabel?: string,
  ariaDescription?: string,
  role?: string,
  children?: React.ReactNode
}

export interface PanelProps {
  title: string;
  subTitle?: string;
  imageUrl?: string;
  description: string;
  linkTo: string;
  children?: React.ReactNode;
}

export interface ExperienceMeta {
  id: string;
  period: string;
  companyUrl: string;
  skills?: string[];
}

export interface Experience extends ExperienceMeta {
  company: string;
  position: string;
  description: string;
}
