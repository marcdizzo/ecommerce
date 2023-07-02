import React, { useEffect, useState } from 'react'
import { BsArrowDownRight , BsArrowUpRight } from "react-icons/bs";
import { Column } from '@ant-design/plots';
import {  Badge, Table } from 'antd';
import axios from '../axios';
import Loading from '../components/loading';



const Dashboard = () => {
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      axios
          .get("/orders")
          .then(({ data }) => {
            setLoading(false)
            setOrders(
              data.map((order) => ({
                _id: order._id,
                owner: order.owner,
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
      return <h2 className="text-center pt-3">No orders yet</h2>
    }




  const columns = [
    {
      title: 'Order Id',
      dataIndex: '_id',
    },
    {
      title: 'Customer Id',
      dataIndex: 'owner',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: status => <Badge bg={`${status == "processing" ? "warning" : "success" }`} text="white">
            {status}
          </Badge>
    },
    {
      title: 'Total',
      dataIndex: 'total',
      render: total => <p>${total}</p>
    }
  ];
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 60,
    },
    {
      type: 'Sept',
      sales: 40,
    },
    {
      type: 'Oct',
      sales: 35,
    },
    {
      type: 'Nov',
      sales: 35,
    },
    {
      type: 'Dec',
      sales: 35,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {

      return "#ffd333";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Months',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className='d-flex  justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end bg-white flex-grow-1 p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p> <h4 className='mb-0 sub-title'>$1000</h4>
            </div> 
          <div className='d-flex flex-column align-items-end'>
            <h6><BsArrowDownRight />32%</h6>
            <p className='mb-0 desc'>Compared to April 2022</p>
          </div>        
        </div>
        <div className='d-flex justify-content-between align-items-end bg-white flex-grow-1 p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p> <h4 className='mb-0 sub-title'>$1000</h4>
          </div> 
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'>
              <BsArrowDownRight />32%
            </h6>
            <p className='mb-0 desc'>Compared to April 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end bg-white flex-grow-1 p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p> <h4 className='mb-0 sub-title'>$1000</h4>
          </div> 
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'>
              <BsArrowDownRight />
            32%
            </h6>
            <p className='mb-0 desc'>Compared to April 2022</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className='mt-4'>
                <h3 className='mb-5'>Income Statics</h3>
              <div>
                    <Column {...config} />
              </div>
            </div>
            <div className='mt-4'>
              <h3 className="mb-5">
                Recent Orders
              </h3>
              <div>
              <Table 
                columns={columns}
                dataSource={orders} />
              </div>
            </div>
      
    </div> 
  )
}

export default Dashboard