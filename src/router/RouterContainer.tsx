import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Container, CssBaseline } from '@material-ui/core';

import rootReducer from '../store';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Develop from '../pages/Develop';
import Favorite from '../pages/Favorite';
import Header from '../components/Header/Header';

const store = createStore(rootReducer);

const RouterContainer = (): JSX.Element => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/develop" component={Develop} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/info" component={Info} />
        </BrowserRouter>
      </Container>
    </Provider>
  );
};
export default RouterContainer;
