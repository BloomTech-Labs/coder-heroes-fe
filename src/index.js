import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import './styles/index.less';
import 'antd/dist/antd.less';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './redux/reducers/index';
import thunk from 'redux-thunk';
import InstructorBooking from './components/pages/InstructorBooking';
import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import InstructorHome from './components/pages/InstructorHome';
import ParentHome from './components/pages/ParentHome';
import ParentBooking from './components/pages/ParentBooking';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import InstructorApplyConfirm from './components/pages/InstructorBooking/InstructorApplyConfirm';
import InstructorAddCourse from './components/pages/InstructorAddCourse';
import InstructorNewsFeed from './components/pages/InstructorNewsFeed';
import NewsfeedPutModal from './components/pages/InstructorNewsFeed/NewsFeedPutModal';
import ParentNewsFeed from './components/pages/ParentNewsFeed';
import PaymentSuccess from './components/pages/ParentHome/PaymentSuccess';
import Cart from './components/pages/ParentHome/Cart';
import ParentFamilyHome from './components/pages/ParentFamily/ParentFamilyHome';

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
        <Footer />
      </React.StrictMode>
    </Router>
    ,
  </Provider>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <div style={{ minHeight: '100vh' }}>
          <Route path="/implicit/callback" component={LoginCallback} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/instructor" component={InstructorHome} />
          <Route path="/parent" component={ParentHome} />
          <Route path="/instructor-booking" component={InstructorBooking} />
          <Route
            path="/instructor-booking-confirm"
            component={InstructorApplyConfirm}
          />
          <Route
            path="/instructor-add-course"
            component={InstructorAddCourse}
          />
          <Route path="/parent-booking" component={ParentBooking} />
          <Route path="/family" component={ParentFamilyHome} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment-success" component={PaymentSuccess} />
          {/* any of the routes you need secured should be registered as SecureRoutes */}
          <SecureRoute
            path="/"
            exact
            component={() => <HomePage LoadingComponent={LoadingComponent} />}
          />
          {/* The above route exists for developmental purposes, but the "/" path will be for the home page ("/landing") in the deployed version */}
          <SecureRoute
            path="/instructor-news-feed"
            component={InstructorNewsFeed}
          />
          <SecureRoute path="/edit-news" componenet={NewsfeedPutModal} />
          <SecureRoute path="/parent-news-feed" component={ParentNewsFeed} />
          <SecureRoute path="/example-list" component={ExampleListPage} />
          <SecureRoute path="/profile-list" component={ProfileListPage} />
          <SecureRoute path="/datavis" component={ExampleDataViz} />
        </div>
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
