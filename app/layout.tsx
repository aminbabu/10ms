import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IProps>) {
  return children;
}
