import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FAQs from "./lib/pages/FAQs/FAQs";
import Newsletter from "./lib/pages/Newsletter/Newsletter";
import Library from "./lib/pages/Library/Library";
import ViewNewsletter from "./lib/pages/Newsletter/ViewNewsletter";
import ViewLibrary from "./lib/pages/Library/ViewLibrary";
import ScrollToTop from "./lib/components/scroll-to-top/ScrollToTop";
import SEO from "./lib/components/helmet/Helmet";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
  }
  callAPI(){
    fetch("http://localhost:3001/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }
  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div>
        <SEO title={`Home | NU Innovation Tech Hub`} />
        <Router>
          <Link to="/"></Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/newsletter">Newsletter</Link>
          <Link to="/library">Library</Link>
          <Switch>
            <Route exact path="/" />
            <Route exact name="faqs" path="/faqs" component={FAQs} />
            <Route
              exact
              name="newsletter"
              path="/newsletter"
              component={Newsletter}
            />
            <Route exact name="library" path="/library" component={Library} />
            <Route
              exact
              name="viewnewsletter"
              path="/newsletter/:id"
              component={ViewNewsletter}
            />
            <Route
              exact
              name="viewlibrary"
              path="/viewlibrary/:id"
              component={ViewLibrary}
            />
          </Switch>
        </Router>
        <ScrollToTop />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <SEO title={`Home | NU Innovation Tech Hub`} />
//       <Router>
//         <Link to="/"></Link>
//         <Link to="/faqs">FAQs</Link>
//         <Link to="/newsletter">Newsletter</Link>
//         <Link to="/library">Library</Link>
//         <Switch>
//           <Route exact path="/" />
//           <Route exact name="faqs" path="/faqs" component={FAQs} />
//           <Route
//             exact
//             name="newsletter"
//             path="/newsletter"
//             component={Newsletter}
//           />
//           <Route exact name="library" path="/library" component={Library} />
//           <Route
//             exact
//             name="viewnewsletter"
//             path="/newsletter/:id"
//             component={ViewNewsletter}
//           />
//           <Route
//             exact
//             name="viewlibrary"
//             path="/viewlibrary/:id"
//             component={ViewLibrary}
//           />
//         </Switch>
//       </Router>
//       <ScrollToTop />
//     </div>
//   );
// };

export default App;
