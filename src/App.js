import './App.css';
import StockLevel from './StockLevel';
import FleetInfo from './FleetInfo';
import FleetChart from './FleetChart';
import Calendar from './Calendar';
const  App= () =>  {
  // const theme = {
  //   spacing: 8,
  // }
  return (
    <div >
    <StockLevel />
    <Calendar/>
    <FleetChart/>
    <FleetInfo />
     </div> 
  );
};

export default App;
