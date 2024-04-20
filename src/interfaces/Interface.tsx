import { RefObject } from "react";

export interface RefContextType {
  hemRef: RefObject<HTMLDivElement>;
  psykoterapiRef: RefObject<HTMLDivElement>;
  omMigRef: RefObject<HTMLDivElement>;
  kontaktRef: RefObject<HTMLDivElement>;
}

export interface HeaderProps {
  scrollToRef: (refName: string) => void;
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}
