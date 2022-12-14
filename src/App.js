import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Profile = lazy(() => import("./pages/other/Profile"));
const Management = lazy(() => import("./pages/other/Management"));
const Message = lazy(() => import("./pages/other/Message"));
const Mission = lazy(() => import("./pages/other/Mission"));
const Vision = lazy(() => import("./pages/other/Vision"));
const Goal = lazy(() => import("./pages/other/Goal"));
const Gallery = lazy(() => import("./pages/other/Gallery"));
const Contact = lazy(() => import("./pages/other/Contact"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

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
                  component={ShopGridStandard}
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
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
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
                  path={process.env.PUBLIC_URL + "/mission"}
                  component={Mission}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/vision"}
                  component={Vision}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/goal"}
                  component={Goal}
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

export default connect()(multilanguage(App));
