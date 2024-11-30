// ContextProvider.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const UserContext = createContext<{ userId: string | null }>({ userId: null });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setUserId(user?.id || null);
    }
  }, [user, isLoaded, isSignedIn]);

  return <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
