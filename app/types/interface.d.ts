interface DropdownPage {
  [title: string]: string;
}

interface NavBarProps {}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FooterProps {}

interface ContactProps {}

interface SideBarProps {
  nav: boolean;
  setNav: (arg: boolean) => void;
  handleNav: () => void;
  language: string;
  handleLanguage: () => void;
  homeDropdownPages: DropdownPage[];
}

interface HomeSidebarProps {
  homeDropdownPages: DropdownPage[];
  setNav: (arg0: boolean) => void;
}

interface HomeDropDownProps {
  homeDropdownPages: DropdownPage[];
}