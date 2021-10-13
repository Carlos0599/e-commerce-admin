import Create from "../src/components/innovation/components/Pages/Innovation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import users from "./components/Pages/users";
import productsOrders from "./components/Pages/productsOrders";
import exhibits from "./components/Pages/exhibits";
import reports from "./components/Pages/reports";
import InnovationSecondPage from "../src/components/innovation/components/Pages/InnovationSecondPage";
import Innovationthree from "../src/components/innovation/components/Pages/InnovationThree";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#002d84",
    },
  },
  typography: {
    fontFamily: "Raleway",
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Layout />
          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/users" component={users} />
              <Route
                exact
                path="/products & orders"
                component={productsOrders}
              />
              <Route exact path="/exhibits" component={exhibits} />
              <Route exact path="/reports" component={reports} />
              <Route exact path="/create" component={Create} />
              <Route
                exact
                path="/innovationSpecific"
                component={InnovationSecondPage}
              />
              <Route
                exact
                path="/innovationInvest"
                component={Innovationthree}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
