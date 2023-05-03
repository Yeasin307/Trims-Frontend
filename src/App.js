import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import ScrollToTop from "./helpers/scroll-top";

// home page
const HomeFashion = lazy(() => import("./pages/home/Home"));

// shop page
const ShopGrid = lazy(() => import("./pages/shop/ShopGrid"));

// product page
const Product = lazy(() => import("./pages/shop-product/Product"));

// other pages
const Profile = lazy(() => import("./pages/others/Profile"));
const Management = lazy(() => import("./pages/others/Management"));
const Message = lazy(() => import("./pages/others/Message"));
const Mission = lazy(() => import("./pages/others/Mission"));
const Gallery = lazy(() => import("./pages/others/Gallery"));
const Contact = lazy(() => import("./pages/others/Contact"));
const NotFound = lazy(() => import("./pages/others/NotFound"));

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json")
        }
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeFashion}
                />

                {/* Homepages */}
                <Route
                  path={process.env.PUBLIC_URL + "/home"}
                  component={HomeFashion}
                />

                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/accessories/:id"}
                  component={ShopGrid}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/profile"}
                  component={Profile}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/management"}
                  component={Management}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/message"}
                  component={Message}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/mission&vision"}
                  component={Mission}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/gallery"}
                  component={Gallery}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default multilanguage(App);
