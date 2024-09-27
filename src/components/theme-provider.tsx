"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderProps {
  // Define children prop type
  children: ReactNode;
  attribute: string; // Add attribute prop
  defaultTheme: string; // Add defaultTheme prop
  enableSystem?: boolean; // Add enableSystem prop
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Wait for the client to determine the theme
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // or a skeleton
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
