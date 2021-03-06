import React from "react";
import "./tasks.scss";

import editsvg from "../../assets/edit.svg";

function Tasks() {
  return (
    <div className="tasks">
         <div className="tasks__title">
          <h2>Фронтенд</h2>
          <img src={editsvg} alt="карандаш" />
        </div>
        
      <div className="tasks_item">
        <div className="title__items">
          <div className="checkbox">
            <input id="check" type="checkbox" />
            <label htmlFor="check">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
          <p>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
