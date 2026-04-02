"use client";

import { createContext, ReactNode, useState } from "react";

export const CardContext = createContext({});

type CardContextProviderProps = {
  children: ReactNode;
};

export const CardContextProvider = ({ children }: CardContextProviderProps) => {
  const [card, setCard] = useState([]);

  const addCard = () => {};

  const value = {};

  return <CardContext.Provider value={card}>{children}</CardContext.Provider>;
};
