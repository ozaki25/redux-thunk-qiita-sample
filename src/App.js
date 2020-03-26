import React from 'react';
import { useSelector } from 'react-redux';

import AddComment from './components/AddComment';
import Comments from './components/Comments';
import { selectFetchState } from './store/qiitaCommentsSlice';

function App() {
  const { loading, error } = useSelector(selectFetchState);
  return (
    <div>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      <AddComment />
      <Comments />
    </div>
  );
}

export default App;
