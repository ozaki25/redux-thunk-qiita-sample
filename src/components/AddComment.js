import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectInputText,
  changeText,
  addComment,
} from '../store/commentSlice';

function useComments() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const inputText = useSelector(selectInputText);
  const add = comment => dispatch(addComment(comment));
  const onChangeText = comment => dispatch(changeText(comment));

  return { loading, error, inputText, add, onChangeText };
}

function AddComment() {
  const { loading, error, inputText, add, onChangeText } = useComments();
  const onChange = event => onChangeText(event.target.value);
  const onClick = () => add(inputText);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Add Comment</h1>
      <textarea onChange={onChange} value={inputText}></textarea>
      <br />
      <button onClick={onClick}>送信</button>
    </div>
  );
}

export default AddComment;
