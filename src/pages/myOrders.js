import React, { useState } from 'react'
import {  Table } from 'antd';
import axios from '../axios';
import Loading from '../components/loading';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Badge, Container } from 'react-bootstrap';

const MyOrders = () => {

    const user = useSelector((state) => state.user);
    const [orders, setOrders] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios
            .get(`/users/${user._id}/orders`)
            .then(({ data }) => {
                setLoading(false);
                setOrders(
                    data.map((order) => ({
                        _id: order._id,
                        status: order.status,
                        date: order.date,
                        total: order.total
                    }))

                )
            })
            .catch((e) => {
                setLoading(false);
                console.log(e);
            })
    },[]);

    if(loading) {
        return <Loading />;
    }

    if(orders.length == 0){
        return <h1 className='text-center pt-3'>No orders yet</h1>
    }

    const columns = [
        {
          title: 'Order Id',
          dataIndex: '_id',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: status => <Badge bg={`${status == "processing" ? "warning" : "success" }`} text="white">
            {status}
          </Badge>
        },
        {
          title: 'Date',
          dataIndex: 'date',
        },
        {
          title: 'Total',
          dataIndex: 'total',
          render: total => <p>${total}</p>
        }
      ];
  return (
    <>
     
                <Container className='my-5'>
                        <h3 className="mb-4 title">
                        Orders
                        </h3>
                        <div>
                        <Table 
                        columns={columns}
                        dataSource={orders}
                        pagination={{
                            pageSize:5
                        }}
                        />
                        
                        </div>
                </Container>
    </>
    
  )
}

export default MyOrders