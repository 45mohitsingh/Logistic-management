import { useState } from "react";
import "./App.css"
import "./CalendarDates"
import CalendarDates from "./CalendarDates";

const Calendar =()=>{

const [isExpanded,setIsExpanded]=useState(false);

const handleToggle =()=>{
    setIsExpanded(!isExpanded);
}

    return (
        <div  class={`calendar  ${isExpanded? "expand":""}`} id="dates">
           <button id="toggleButton" onClick={handleToggle}>{!isExpanded? "Expand":"Contract"}</button>
           <CalendarDates
           />
        </div>
    );
};
export default Calendar;
