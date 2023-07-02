import React, { useEffect, useState } from 'react'
import {  Table } from 'antd';
import axios from '../axios';
import Loading from '../components/loading';


 

const Orders = () => {
  const [orders,setOrders] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    axios
        .get("/orders")
        .then(({ data }) => {
          setLoading(false);
          setOrders(
            data.map((order) => ({
                _id: order._id,
                date: order.date,
                status: order.status,
                total: order.total
            }))
          )
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        })
  },[]);

  if(loading){
    return <Loading />
  }

  if(orders.length === 0){
    return <h2 className='text-center pt-3'>No Orders Yet</h2>
  }

  const columns = [
    {
      title: 'Order Id',
      dataIndex: '_id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      render: total => <p>${total}</p>
    }
  ];
  return (
    <div>
        <h3 className="mb-4 title">
         Orders
        </h3>
        <div>
        <Table 
          columns={columns}
          dataSource={orders} />
        </div>
    </div>
  )
}

export default Orders