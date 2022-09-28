import { FC } from "react";
import { MainNav } from "../MainNav";

type Props = {
  hideNav?: boolean;
};

const Header: FC<Props> = ({ hideNav }) => {
  return (
    <header>
      <MainNav hideNav={!hideNav} />
    </header>
  );
};

export { Header };
