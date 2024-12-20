import React, { useState } from 'react'
import "./CustomerForm.css"

const CustomerForm = ({ addNewCustomer }) => {

  const [customerName, setCustomerName] = useState("");
  const [isValid, setIsValid] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(customerName.trim().length === 0){
      setIsValid(true)
      return;
    }
    const newCustomer = {
      id: Math.random(),
      customerName,
    }
    addNewCustomer(newCustomer);
    setCustomerName("");
  }

  const nameInputChangeHandler = (e) => {
    const nameValue = e.target.value;
    if(nameValue.trim().length > 0){
      setIsValid(false);
    }
    setCustomerName(nameValue)
  }


  return (
    <form className='customer-form' onSubmit={handleSubmit}>
      <input type='text' className={`customer-input ${isValid ? "invalid" : ""}`} placeholder='Add a new customer'
        onChange={nameInputChangeHandler} value={customerName}>
      </input>
      <button>
        <i className='bi bi-plus-lg'></i>
      </button>
    </form>
  )
}

export default CustomerForm
