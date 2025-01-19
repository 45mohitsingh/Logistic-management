import Capacity from './Capacity';
import "./App.css";

const  StockLevel= () =>  {
  // const theme = {
  //   spacing: 8,
  // }
  return (
     <div class="stock_container">
    
       <Capacity 
         text={"Fresh Tailing"} 
         class={"stock_pos1"}
       />
              <Capacity 
         text={"ROM Stock"} 
         class={"stock_pos1"}
       />
            <Capacity 
         text={"Tailing Pond"} 
         class={"stock_pos1"}
       />
              <Capacity 
         text={"Reject Yard"} 
         class={"stock_pos1"}
       />
              <Capacity 
         text={"Waigon loading site"} 
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
