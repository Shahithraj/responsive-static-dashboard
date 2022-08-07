import React from 'react';
import Table from '../Table/Table';
import Cards from './Cards/Cards';
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='mainDash'>
    <h1>Dashboard</h1>
    <Cards />
    <Table />
    </div>
  )
}

export default Dashboard