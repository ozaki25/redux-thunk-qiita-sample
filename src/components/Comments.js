import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectComments,
  fetchComments,
} from '../store/commentSlice';

function Comments() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const comments = useSelector(selectComments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Comments</h1>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.created_at}</p>
          <pre>{comment.body}</pre>
        </div>
      ))}
    </div>
  );
}

export default Comments;
