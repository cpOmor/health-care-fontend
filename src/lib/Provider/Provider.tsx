"use client";
import { ThemeProvider } from "@mui/material";
import { Theme } from "../theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default Providers;
