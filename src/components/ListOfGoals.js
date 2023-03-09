import React from "react";

const ListOfGoals = ({mygoal,bygoal}) => {
    return (
      <ul>
        <li>
            <p>My goal is to {mygoal}, by {bygoal}.</p>
          </li>
      </ul>
    );
}

export default ListOfGoals;