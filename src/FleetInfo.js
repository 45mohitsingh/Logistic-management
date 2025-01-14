import "./App.css";

const FleetInfo = () =>{

    return (
<div class="container">
    <div class="fleet-info">
      <div class="header">INTERNAL FLEET INFO</div>
      <div class="row">
        <span class="label">TRUCKS</span>
        <span class="value" contenteditable="true">:</span>
      </div>
      <div class="row">
        <span class="label">LOADER</span>
        <span class="value" contenteditable="true">:</span>
      </div>
      <div class="row">
        <span class="label">DOZER</span>
        <span class="value" contenteditable="true">:</span>
      </div>
      <div class="row">
        <span class="label">JCB</span>
        <span class="value" contenteditable="true">:</span>
      </div>
      <div class="row">
        <span class="label">POCLAIN</span>
        <span class="value" contenteditable="true">:</span>
      </div>
    </div>
  </div>
    );
};

export default FleetInfo;