import React from 'react'
import {  Button, Table } from 'antd';
// import { BiEdit } from 'react-icons/bi';
// import { AiFillDelete  } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useDeleteProductMutation } from '../services/appApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';




const ProductList = ({_id}) => {
  
  const  products = useSelector((state) => state.products);
  const [gridData, setGridData] = useState([]);
  const   user = useSelector((state) => state.user);
  
  // removing the product 
  const[deleteProduct, { isLoading }] = useDeleteProductMutation();
  const handleDeleteProduct = async (id) => {
    // logic here 
    // if(window.confirm("Are you sure")) 
    const myData =  await deleteProduct({ product_id: id, user_id: user._id });  
    if(myData) setGridData(myData)

  }
  useEffect(() => {
      getData();
  },);

  const getData = () => {
    setGridData(
      products.map((product) => ({
        pictures: product.pictures[0].url,
        _id: product._id,
        name: product.name,
        price: product.price
      })),
    )
  }

  const columns = [
    // {
    //   title: 'SNo',
    //   dataIndex: 'key',
    // },
    {
      title: 'Image',
      dataIndex: 'pictures',
      render: pictures => <img alt='pictures' width={100} height={100} src={pictures} />
    },
    {
      title: 'Product ID',
      dataIndex: '_id',
    },
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Actions',
      render: (id) => {
        return (
          <>
            <Button className='button-2 border-0' onClick={() => handleDeleteProduct(id._id,user._id)} disabled={isLoading}>
              Delete
            </Button>
            <Link to={`/product/${id._id}/edit-product`} className='button-2 border-0 ms-1'>
                Edit
            </Link>
          </>
        )
      }
    }


  ];  
  
  return (
    <div>
        <h3 className="mb-4 title">
         Products
        </h3>
        <div>
        <Table 
          columns={columns}
          dataSource={gridData}
          pagination={{
            pageSize:5,
          }}
          />
        </div>
    </div>
  )
}

export default ProductList