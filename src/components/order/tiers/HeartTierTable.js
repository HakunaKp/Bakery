import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './ResponsiveTableStyles.css';

import CreateNotification from '../../notifications/Notification';

function PickTier(e) {

  // Clear all buttons
  var elements = document.getElementsByClassName("tier-button");
  for (var i = 0; i < elements.length; i++) {
    elements[i].checked = false;
  }
  
  // Recheck chosen button
  e.target.checked = true;

  // Saved Tier Notification
  CreateNotification("Saved Tier", "Heart - " + e.target.id);
}

class HeartTierTable extends Component{

  render() {
  return (
    <div className="tier-form">
      <br></br>
      <h2 class="mt-0 mb-16">Heart-Shaped Cake - Tier (Required)</h2>
      <Table>
      <Thead>
        <Tr>
          <Th>Select</Th>
          <Th>Cake Size</Th>
          <Th>Estimated Servings</Th>
          <Th>Base Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td><input type="radio" id="5 Inches" className="tier-button" value="15.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>5 Inches</Td>
          <Td>Serves 4-5 People</Td>
          <Td>$15.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="8 Inches" className="tier-button" value="25.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>8 Inches</Td>
          <Td>Serves 10-12 People</Td>
          <Td>$25.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="11 Inches" className="tier-button" value="35.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>11 Inches</Td>
          <Td>Serves 20-25 People</Td>
          <Td>$35.00</Td>
        </Tr>
      </Tbody>
    </Table>
    </div>
  );
}
}
export default HeartTierTable;