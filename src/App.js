import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import AddComment from './components/AddComment';
import Comments from './components/Comments';

function App() {
  return (
    <Provider store={store}>
      <AddComment />
      <Comments />
    </Provider>
  );
}

export default App;
