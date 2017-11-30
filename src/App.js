import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import Navigation from './components/Navigation'
import Content from './components/Content'

import categoriesInitial from './data/categories.json';
import coursesInitial from './data/courses.json';
import verticalsInitial from './data/verticals.json';

const verticals = JSON.parse(JSON.stringify(verticalsInitial));
const courses = JSON.parse(JSON.stringify(coursesInitial));
const categories = JSON.parse(JSON.stringify(categoriesInitial));

const initialState = {navigation: {verticals, categories, courses}};

const store = createStore(
  rootReducer,
  initialState
);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navigation />
        <Content />
      </div>
    </Provider>
  )
};

export default App;






