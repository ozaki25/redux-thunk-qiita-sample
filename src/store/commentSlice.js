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
      state.inputText = action.payload.inputText;
    },
    setComments(state, action) {
      state.comments = action.payload.comments;
    },
    setLoading(state, action) {
      state.loading = action.payload.loading;
    },
    setError(state, action) {
      state.error = action.payload.error;
    },
  },
});

// Actions
export const {
  changeText,
  setComments,
  setLoading,
  setError,
} = commentsSlice.actions;

export const addComment = comment => async dispatch => {
  dispatch(setError(null));
  dispatch(setLoading(true));
  try {
    await postComment({ comment });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchComments = () => async dispatch => {
  dispatch(setError(null));
  dispatch(setLoading(true));
  try {
    const { comments } = await getComments();
    console.log({ comments });
    dispatch(setComments({ comments }));
  } catch (error) {
    dispatch(setError(error));
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
