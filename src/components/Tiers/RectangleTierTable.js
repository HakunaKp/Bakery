import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { store } from 'react-notifications-component';

// Function to Create notification
function CreateNotification(title_string, message_string) {
  store.addNotification({
      title: title_string,
      message: message_string,
      type: "default",                         // 'default', 'success', 'info', 'warning'
      container: "top-full",                // where to position the notifications
      insert: "top",
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
      dismiss: {
      duration: 2250,
      showIcon: true
      },
  })
}

function PickTier(e) {

  // Clear all buttons
  var elements = document.getElementsByClassName("tier-button");
  for (var i = 0; i < elements.length; i++) {
    elements[i].checked = false;
  }
  
  // Recheck chosen button
  e.target.checked = true;

  // Saved Tier Notification
  if (e.target.id === "square") CreateNotification("Saved Tier", "Square - (8\" x 8\")");
  else if (e.target.id === "quarter") CreateNotification("Saved Tier", "Quarter Sheet (8\" x 12\")");
  else if (e.target.id === "half") CreateNotification("Saved Tier", "Half Sheet (16\" x 24\")");

  document.getElementById("pick-extras").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

}

class RectangleTierTable extends Component{

render() {
  return (
    <div className="tier-form">
    <h1 id="tier-header" style={{ textAlign: 'left'}}>Rectangle-Shaped Cake - Select Tier (Required)</h1>
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
          <Td><input type="radio" id="square" className="tier-button" value="22.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>Square (8" x 8")</Td>
          <Td>Serves 12 People</Td>
          <Td>$22.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="quarter" className="tier-button" value="45.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>Quarter Sheet (8" x 12")</Td>
          <Td>Serves 25 People</Td>
          <Td>$45.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="half" className="tier-button" value="80.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>Half Sheet (16" x 24")</Td>
          <Td>Serves 50 People</Td>
          <Td>$80.00</Td>
        </Tr>
      </Tbody>
    </Table>
    </div>
  )
}
}

export default RectangleTierTable;