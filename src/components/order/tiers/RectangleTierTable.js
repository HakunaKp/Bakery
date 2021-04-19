import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import PickTier from './PickTier.js';

class RectangleTierTable extends Component{

render() {
  return (
    <div className="tier-form">
      <br></br>
      <h2 class="mt-0 mb-16">Rectangle-Shaped Cake - Tier</h2>    
      <Table>
      <Thead>
        <Tr>
          <Th style={{textAlign: "center"}}>Select</Th>
          <Th style={{textAlign: "center"}}>Cake Size</Th>
          <Th style={{textAlign: "center"}}>Estimated Servings</Th>
          <Th style={{textAlign: "center"}}>Base Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td><input type="radio" id="square" className="tier-button" value="22.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>Square (8" x 8")</Td>
          <Td>Serves 12</Td>
          <Td>$22.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="quarter" className="tier-button" value="45.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>Quarter Sheet (8" x 12")</Td>
          <Td>Serves 25</Td>
          <Td>$45.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="half" className="tier-button" value="80.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>Half Sheet (16" x 24")</Td>
          <Td>Serves 50</Td>
          <Td>$80.00</Td>
        </Tr>
      </Tbody>
    </Table>
    </div>
  )
}
}

export default RectangleTierTable;