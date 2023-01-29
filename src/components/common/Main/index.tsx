import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Main: FC<Props> = ({ children, className }) => {
  return <main className={`main ${className}`}>{children}</main>;
};

export { Main };
