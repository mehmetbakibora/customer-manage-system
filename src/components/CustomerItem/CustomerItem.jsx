import React from 'react'
import styled from 'styled-components'
import './CustomerItem.css'

const DeleteButton = styled.button`
  background-color: red;
  padding: 8px;
  `;

const CustomerItem = ( {customer , handleDelete} ) => {
  return (
    <div>
      <li className='customer-item'>
        <div className='customer-info'>
          <img src='https://i.pravatar.cc/300' className='customer-avatar'></img>
          <span className='customer-name'>{customer.customerName}</span>
        </div>
        <DeleteButton onClick={() => handleDelete(customer)} className='delete-button'>
          <i className='bi bi-trash3'></i>
        </DeleteButton>
      </li>
    </div>
  )
}

export default CustomerItem
