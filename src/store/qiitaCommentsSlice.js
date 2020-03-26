import { createSlice } from '@reduxjs/toolkit';
import { getComments, postComment } from '../api/qiita';

// Slice
export const qiitaCommentsSlice = createSlice({
  name: 'qiita-comments',
  initialState: {
    loading: false,
    error: null,
    comments: [],
  },
  reducers: {
    start(state, action) {
      state.loading = true;
      state.error = null;
    },
    failure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getCommentsSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.comments = action.payload;
    },
  },
});

// Actions
export const {
  start,
  failure,
  getCommentsSuccess,
} = qiitaCommentsSlice.actions;

export const fetchComments = () => async dispatch => {
  try {
    dispatch(start());
    dispatch(getCommentsSuccess(await getComments()));
  } catch (error) {
    console.log({ error });
    dispatch(failure(error.stack));
  }
};

export const addComment = comment => async dispatch => {
  console.log({ comment });
  try {
    dispatch(start());
    await postComment({ comment });
    dispatch(fetchComments());
  } catch (error) {
    console.log({ error });
    dispatch(failure(error.stack));
  }
};

// Selectors
export const selectFetchState = ({ comments }) => ({
  loading: comments.loading,
  error: comments.error,
});
export const selectComments = ({ comments }) => comments.comments;

// Reducer(must be default export)
export default qiitaCommentsSlice.reducer;
