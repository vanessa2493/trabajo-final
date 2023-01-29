import { MainNav } from "../MainNav";
import "./styles.scss"


const hideNav:boolean = false

const Header = () => {
  return (
    <header className="main-header">
        {!hideNav && <MainNav hideNav={!hideNav} />}
    </header>
  );
};

export { Header };
