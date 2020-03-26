import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectComments, fetchComments } from '../store/qiitaCommentsSlice';

function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
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
