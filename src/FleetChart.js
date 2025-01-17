import "./App.css"

const FleetChart =()=>{
    return (
     <div class="FleetChart">
        <h2 class="chartHeading">Predicted Allotment</h2>
<table>
  <thead>
    <tr>
      <th></th>
      <th>ROM Shifting</th>
      <th>Fresh Tailing Shifting</th>
      <th>Reject Shifting</th>
      <th>Wagon Loading Site</th>
      <th>Tailing Shifting</th>
    </tr>
  </thead>
  <tbody>
    <tr class="trucks">
      <td>Trucks</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr class="loader">
      <td>Loader</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="dozer">
      <td>Dozer</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr class="poclane">
      <td>Poclane</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr class="jcb">
      <td>JCB</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

{/* <div class="legend">
  <div><span class="trucks"></span> Trucks</div>
  <div><span class="loader"></span> Loader</div>
  <div><span class="dozer"></span> Dozer</div>
  <div><span class="poclane"></span> Poclane</div>
  <div><span class="jcb"></span> JCB</div>
</div> */}

     </div>
    );
};

export default FleetChart;