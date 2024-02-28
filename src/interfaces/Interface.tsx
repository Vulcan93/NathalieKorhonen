export interface RefContextType {
  hemRef: React.RefObject<HTMLDivElement>;
  psykoterapiRef: React.RefObject<HTMLDivElement>;
  omMigRef: React.RefObject<HTMLDivElement>;
  kontaktRef: React.RefObject<HTMLDivElement>;
}

export interface HeaderProps {
  scrollToRef: (refName: string) => void;
  highlightForRef: (refName: string) => void;
  activeTab: string;
}
