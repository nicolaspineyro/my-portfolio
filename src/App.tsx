import { RoutesArray } from "src/constants";
import { Header, Footer } from "src/components";
import { RouteObject } from "src/constants/interfaces";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const renderRoutes = RoutesArray.map((routeProps: RouteObject) => (
    <Route {...routeProps} />
  ));

  return (
    <>
      <Header />
      <Routes>{renderRoutes}</Routes>
      <Footer />
    </>
  );
};

export default App;
