import React from "react";

const ListOfGoals = ({goals}) => {
    return (
      <ul>
        {goals.map((goal,idx) => (<li key={idx+1}><p>My goal is to {goal.goal}, by {goal.by}.</p></li>))}
        
      </ul>
    );
}

export default ListOfGoals;