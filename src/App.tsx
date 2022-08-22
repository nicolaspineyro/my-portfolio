import { RoutesArray } from "src/constants";
import { Header } from "src/components";
import { RouteObject } from "src/constants/interfaces";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const renderRoutes = RoutesArray.map((routeProps: RouteObject) => (
    <Route {...routeProps} />
  ));

  return (
    <main className="intro-container">
      <Header />
      <Routes>{renderRoutes}</Routes>
    </main>
  );
};

export default App;
