import './App.css'
import React, {useEffect} from 'react';


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
	
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentDay  = currentDate.getDate();

	const checkDateMonth=(month,day)=>{
		return month=== currentMonth && day === currentDay;
	}

	const scrollableToCurrentDate=()=>{
		const currentDateElement = document.querySelector('.currentDate');
		if(currentDateElement){
			currentDateElement.scrollIntoView({behavior:'smooth',block:'center'});
		}

	}
	useEffect(()=>{
		scrollableToCurrentDate();
	});
    return (
        
		<div >   
			  
            { Array.from({length: v}).map((_,index)=>(
				<div>
					<h1>{month[index]}</h1>
			        <ul class="allignCalendar"  key ={index}>	
				 
				      {Array.from({length:numOfDays(index)}).map((_,innerInd)=>{
						const istoday = checkDateMonth(index,innerInd+1);
					  
					  return (
					 <li key={innerInd} class={istoday?'currentDate':''}><time >{innerInd+1}</time>{istoday?'Today':''}</li>
					  );
                    })}
				    </ul> 
				</div>
			))}

        </div>

    );
};
export default CalendarDates;