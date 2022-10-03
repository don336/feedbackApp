import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  if(!feedback || feedback.length === 0){
    return <p>No Feedback returned</p>
  }
  return ( 
    <div className='feedback-List'>
        {feedback.map((item)=>(
         <FeedbackItem key={item.id} item={item} />
        // <div>{item.rating}</div>
       ))}

    </div>
  )


}

export default FeedbackList