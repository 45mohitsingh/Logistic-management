import './App.css'

const CalendarDates =(props)=>{
	var v = 12;

	const date=()=>{
		return new Date();
	};
    const month=["January","February","March","April","May","June","july","August","September","October","November","December"];
	const numOfDays=(month)=>{
		const date1=date();
	return new Date(date1.getFullYear(),month+1,0).getDate();
	}

    return (
        
		<div >   
			  <button id="toggleButton" onClick={handleToggle}>{!isExpanded? "Expand":"Contract"}</button>
            { Array.from({length: v}).map((_,index)=>(
				<div>
					<h1>{month[index]}</h1>
			        <ul class="allignCalendar"  key ={index}>	
				 
				      {Array.from({length:numOfDays(index)}).map((_,innerInd)=>(
					// <h1>February 2022</h1>
					 <li key={innerInd}><time >{innerInd+1}</time>Dark Chocolate Day</li>
				    ))}
				    </ul> 
				</div>
			))}

        </div>

    );
};
export default CalendarDates;