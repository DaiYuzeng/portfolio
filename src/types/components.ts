export type SwitcherProps = {
  defaultChecked?: boolean,
  onChange: (value: boolean) => void,
  ariaLabel?: string,
  ariaDescription?: string,
  role?: string,
  children?: React.ReactNode
}

export type PanelProps = {
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


export type NavItemProps = {
  navKey: string;
  active: boolean;
  onClick: (id: string) => void;
}
