import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import CreateNotification from '../Notification';

function PickTier(e) {

  // Clear all buttons
  var elements = document.getElementsByClassName("tier-button");
  for (var i = 0; i < elements.length; i++) {
    elements[i].checked = false;
  }
  
  // Recheck chosen button
  e.target.checked = true;

  // Saved Tier Notification
  CreateNotification("Saved Tier", "Circle - " + e.target.id);

  document.getElementById("pick-extras").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

class CircleTierTable extends Component{

  render() {
  return (
    <div className="tier-form">
    <h1 id="tier-header" style={{ textAlign: 'left'}}>Circle-Shaped Cake - Select Tier (Required)</h1>
    <Table>
      <Thead>
        <Tr>
          <Th>Select</Th>
          <Th>Cake Size (Diameter)</Th>
          <Th>Estimated Servings</Th>
          <Th>Base Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td><input type="radio" id="6 Inches" className="tier-button" value="15.00" onChange={ (e) => PickTier(e) } /></Td>
          <Td>6 Inches</Td>
          <Td>Serves 5-6 People</Td>
          <Td>$15.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="7 Inches" className="tier-button" value="17.00" onChange={ (e) => PickTier(e) } /></Td>
          <Td>7 Inches</Td>
          <Td>Serves 6-7 People</Td>
          <Td>$17.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="8 Inches" className="tier-button" value="23.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>8 Inches</Td>
          <Td>Serves 8-12 People</Td>
          <Td>$23.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="10 Inches" className="tier-button" value="30.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>10 Inches</Td>
          <Td>Serves 15-20 People</Td>
          <Td>$30.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="12 Inches" className="tier-button" value="50.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>12 Inches</Td>
          <Td>Serves 30-35 People</Td>
          <Td>$50.00</Td>
        </Tr>
      </Tbody>
    </Table>
    </div>
  );
}
}
export default CircleTierTable;