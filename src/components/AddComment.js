import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFetchState, addComment } from '../store/qiitaCommentsSlice';

function AddComment() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectFetchState);
  const [text, setText] = useState('');

  const onChange = event => setText(event.target.value);
  const onClick = () => {
    dispatch(addComment(text));
    setText('');
  };

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Add Comment</h1>
      <textarea onChange={onChange} value={text}></textarea>
      <br />
      <button onClick={onClick}>送信</button>
    </div>
  );
}

export default AddComment;
