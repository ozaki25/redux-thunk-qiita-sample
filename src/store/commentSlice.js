import { createSlice } from '@reduxjs/toolkit';
import { getComments, postComment } from '../api/qiita';

// Slice
export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    loading: false,
    inputText: '',
    comments: [],
    error: null,
  },
  reducers: {
    changeText(state, action) {
      state.inputText = action.payload;
    },
    setComments(state, action) {
      state.comments = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Actions
export const {
  setLoading,
  setError,
  changeText,
  setComments,
} = commentsSlice.actions;

export const fetchComments = () => async dispatch => {
  dispatch(setError(null));
  dispatch(setLoading(true));
  try {
    dispatch(setComments(await getComments()));
  } catch (error) {
    console.log({ error });
    dispatch(setError(error.stack));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addComment = comment => async dispatch => {
  dispatch(setError(null));
  dispatch(setLoading(true));
  try {
    console.log({ comment });
    await postComment({ comment });
    dispatch(fetchComments());
  } catch (error) {
    console.log({ error });
    dispatch(setError(error.stack));
  } finally {
    dispatch(setLoading(false));
  }
};

// Selectors
export const selectLoading = ({ comments }) => comments.loading;
export const selectError = ({ comments }) => comments.error;
export const selectInputText = ({ comments }) => comments.inputText;
export const selectComments = ({ comments }) => comments.comments;

// Reducer(must be default export)
export default commentsSlice.reducer;
