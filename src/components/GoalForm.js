import React, { useState } from "react";

const GoalForm = ({onGoalHandler}) => {
  const [title,setTitle]=useState("");
  const [time,setTime]=useState("");
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });
    const submitHandler =(e)=>{
      e.preventDefault();
      onGoalHandler(formData);
      setAllGoals({goal:"",by:""})
    }
  
    return (
      <>
        <h1>My Goals</h1>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
            value={formData.goal}
            onChange={e => setFormData({...formData, goal: e.target.value})}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
            onChange={e => setFormData({...formData, by: e.target.value})}
          />
          <button>Add</button>
        </form>
      </>
    )
}

export default GoalForm;