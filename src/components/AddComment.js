import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../store/qiitaCommentsSlice';

function AddComment() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const onChange = event => setText(event.target.value);
  const onClick = () => {
    dispatch(addComment(text));
    setText('');
  };
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
