import App from "./App";
import Playground from "./components/Playground";
import OptimalSolvePage from "./components/OptimalSolvePage";
import AboutPage from "./components/AboutPage";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "optimal-solve", element: <OptimalSolvePage />},
        { path: "playground", element: <Playground />},
        { path: "about", element: <AboutPage />},
        { path: "/", element: <div style={{height: "100vh", display:"flex", alignItems:"center", justifyContent:"center"}}><h2>Choose a mode on the left to get started!</h2></div>}
      ]
    },
  ];
  
  export default routes;