import { configureStore } from '@reduxjs/toolkit';
import qiitaCommentReducer from './qiitaCommentsSlice';

export const store = configureStore({
  reducer: {
    comments: qiitaCommentReducer,
  },
});
