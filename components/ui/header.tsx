import Navbar from "./navbar";

interface Props {
  page: string;
}

const Header = (props: Props) => {
  return (
    <header>
      <Navbar page={props.page} />
    </header>
  );
};

export default Header;
