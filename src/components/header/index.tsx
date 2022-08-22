import { Link } from "react-router-dom";
import { RoutesArray } from "src/constants";
import { RouteObject } from "src/constants/interfaces";

const Header = () => {
  return (
    <main>
      <section>
        {RoutesArray.map(({ name, path }: RouteObject) => (
          <Link to={path}>{name}</Link>
        ))}
      </section>
    </main>
  );
};

export default Header;
