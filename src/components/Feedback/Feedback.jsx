import { useState } from 'react'
import './Feedback.css'
import MyButton from '../myButton/myButton'

export default function Feedback() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
  
    const handleLike = () => {
      setLikes(likes=>likes + 1);
    };
  
    const handleDislike = () => {
      setDislikes(dislikes=>dislikes + 1);
    };
  
    const handleReset = () => {
      setLikes(0);
      setDislikes(0);
    };

    return (
        <div className='feedback-container'>
            <h3>Ставь 👍 если тебе понравилось!</h3>
            <div className='like-dislike-container'> 
                    <MyButton onClick={handleLike} type='button' name={`${likes} 👍`} />                           
                    <MyButton onClick={handleDislike} type='button' name={`${dislikes} 👎`} />              
            </div>
            <div className='feedback-reset'>
                <MyButton onClick={handleReset} type='button' name='RESET'>
                    Reset Results
                </MyButton>
            </div>
        </div>
    );
}