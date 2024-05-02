import App from "./App";
import Playground from "./components/Playground";
import OptimalSolvePage from "./components/OptimalSolvePage";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "optimal-solve", element: <OptimalSolvePage />},
        { path: "playground", element: <Playground />}
      ]
    },
  ];
  
  export default routes;