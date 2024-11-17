import { createContext, useState } from 'react';

export const PageStateContext = createContext();

export const PageStateProvider = ({ children }) => {
  const [pageState, setPageState] = useState('default');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [contentState, setContentState] = useState('');
  const [activeDrawer, setActiveDrawer] = useState('');

  const data = {
    pageState: pageState,
    setPageState: setPageState,
    isOpen: isOpen,
    toggle: toggle,
    contentState: contentState,
    setContentState: setContentState,
    activeDrawer: activeDrawer,
    setActiveDrawer: setActiveDrawer,
  };

  return <PageStateContext.Provider value={data}>{children}</PageStateContext.Provider>;
};
