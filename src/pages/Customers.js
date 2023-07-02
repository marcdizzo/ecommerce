import React from 'react'
import {  Table } from 'antd';
import axios from '../axios';
import { useState } from 'react';
import Loading from '../components/loading';
import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Table } from "react-bootstrap";

  

const Customers = () => {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  // const users = useSelector((state) => state.users)

  useEffect(() => {
    setLoading(true);
    axios
        .get("/users")
        .then(({ data }) => {
          setLoading(false);
          setUsers(
            data.map((user) => ({
              _id: user._id,
              name: user.name,
              email: user.email
          }))
          );
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        })
    
  },[]);


  

  const columns = [
    {
      title: 'Customer Id',
      dataIndex: '_id',
    },
    {
      title: 'Customer Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    }
  ];

  if(loading) return <Loading />;
  if(users?.length === 0) return <h2 className='py-2 text-center'>No users yet</h2>

  return (
    <div>
        <h3 className="mb-4">
         Customers
        </h3>
        <div>
        
        <Table 
          columns={columns}
          dataSource={users}
          pagination = {{
            pageSize:5,
          }}
          />
        </div>
    </div>
  )
}

export default Customers