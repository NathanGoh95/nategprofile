import { createContext, useState } from "react";

export const PageStateContext = createContext();

export const PageStateProvider = ({ children }) => {
  const [pageState, setPageState] = useState("default");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const data = {
    pageState: pageState,
    setPageState: setPageState,
    isOpen: isOpen,
    toggle: toggle,
  };

  return <PageStateContext.Provider value={data}>{children}</PageStateContext.Provider>;
};
