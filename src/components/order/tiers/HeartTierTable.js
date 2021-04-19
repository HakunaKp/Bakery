import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import PickTier from './PickTier.js';

class HeartTierTable extends Component{

  render() {
  return (
    <div className="tier-form">
      <br></br>
      <h2 class="mt-0 mb-16">Heart-Shaped Cake</h2>
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
          <Td><input type="radio" id="5 Inches" className="tier-button" value="15.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>5 Inches</Td>
          <Td>Serves 4-5</Td>
          <Td>$15.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="8 Inches" className="tier-button" value="25.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>8 Inches</Td>
          <Td>Serves 10-12</Td>
          <Td>$25.00</Td>
        </Tr>
        <Tr>
          <Td><input type="radio" id="11 Inches" className="tier-button" value="35.00" onClick={ (e) => PickTier(e) } /></Td>
          <Td>11 Inches</Td>
          <Td>Serves 20-25</Td>
          <Td>$35.00</Td>
        </Tr>
      </Tbody>
    </Table>
    </div>
  );
}
}
export default HeartTierTable;