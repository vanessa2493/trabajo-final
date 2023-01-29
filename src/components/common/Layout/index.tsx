import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";

type Props = {
  children: ReactNode;
  page: string;
  hideNav?: boolean;
};

const Layout: FC<Props> = ({ children, page}) => {
  return (
    <div className="layout">
      <Header/>
        <div className="d-flex flex-grow-1">
            <Aside />
            <Main className={`page ${page}`}>{children}</Main>
        </div>
      <Footer />
    </div>
  );
};

export { Layout };
