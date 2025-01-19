import "./App.css";

const Capacity =(props) =>{
const class_name= props.class
    return (
    <div class={class_name}>
      {props.text } 
    </div>
    );
};
export default Capacity;    