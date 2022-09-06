import { useState } from 'react';


function ReviewForm() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    
    const onClickHandler = () => {
        setComments((comments) => [...comments, comment]);
    };

    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };
  return (
    <div className="main-container">
        {comments.map((text) => {
            <div className="comment-container">{text}</div>
        })}
        <div className="comment-container">{comment}</div>
        <div className="comment-flexbox">
            <h3 className="comment-text">Leave a Review:</h3>
            <textarea value={comment} onChange={onChangeHandler} className="input-box" />
            <button className= "comment-button">Submit</button>
        </div>
    </div>
  );
}

export default ReviewForm