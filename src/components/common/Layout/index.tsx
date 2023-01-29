import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";

type Props = {
  children: ReactNode;
  page: string;
  hideNav?: boolean;
};

const Layout: FC<Props> = ({ children, page, hideNav }) => {
  return (
    <div className="layout">
      <Header hideNav={hideNav} />
      <Main className={`page ${page}`}>{children}</Main>
      <Footer />
    </div>
  );
};

export { Layout };
