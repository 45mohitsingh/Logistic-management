import Capacity from './Capacity';
import "./App.css";

const  StockLevel= () =>  {
  // const theme = {
  //   spacing: 8,
  // }
  return (
     <div class="stock_container">
    
       <Capacity 
         text={"Hello world"} 
         class={"stock_pos1"}
       />
              <Capacity 
         text={"Hello world"} 
         class={"stock_pos1"}
       />
            <Capacity 
         text={"Hello world"} 
         class={"stock_pos1"}
       />
              <Capacity 
         text={"Hello world"} 
         class={"stock_pos1"}
       />
              <Capacity 
         text={"Hello world"} 
         class={"stock_pos1"}
       />
     
     <Capacity 
         text={"Hello world"} 
         class={"stock_pos1"}
       />
     
     
     


   </div>
  );
};

export default StockLevel;
