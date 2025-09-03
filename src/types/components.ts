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
  subTitle?: string | React.ReactNode;
  imageUrl?: string;
  description: string;
  linkTo?: string;
  children?: React.ReactNode;
  thumbnail?: React.ReactNode;
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

export interface ProjectMeta {
  id: string;
  link?: string;
  imgUrl: string;
  externalLinks?: { title: string; url: string, icon: string }[];
}

export interface Project extends ProjectMeta {
  title: string;
  description: string;
}


export type NavItemProps = {
  navKey: string;
  active: boolean;
  onClick: (id: string) => void;
}
