import { RoutesArray } from "src/constants";
import { Header } from "src/components";
import { RouteObject } from "src/constants/interfaces";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Routes>
        {RoutesArray.map((routeProps: RouteObject) => (
          <Route {...routeProps} />
        ))}
      </Routes>
    </main>
  );
};

export default App;
