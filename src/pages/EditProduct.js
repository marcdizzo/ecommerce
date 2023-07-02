import React, { useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom';
import axios from '../axios';
import { useUpdateProductMutation } from '../services/appApi';
import { useEffect } from 'react';
import { Alert } from 'antd';
import CustomInput from '../components/customInput';

// import { Link, useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { AiOutlineDashboard ,
     AiOutlineShoppingCart , 
     AiOutlineUser,
    AiOutlineBgColors,
    AiOutlinePicLeft,
    AiOutlinePicRight
    } from 'react-icons/ai';
import { IoIosNotifications } from "react-icons/io";
import { Outlet } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { FaClipboardList ,FaBloggerB } from 'react-icons/fa'
import { ImBlog } from 'react-icons/im'
  import { Button, Layout, Menu, theme } from 'antd';
import { useSelector } from 'react-redux';
const { Header, Sider, Content } = Layout;

const EditProduct = () => {
    const { id } = useParams();
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const [quantity,setQuantity] = useState("");
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [collapsed, setCollapsed] = useState(false);
    const [updateProduct,{ isError, error, isLoading, isSuccess }] = useUpdateProductMutation();

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    useEffect(() => {
        axios
        .get("/products/" + id)
        .then(({ data }) => {
            const product = data.product;
            setName(product.name);
            setPrice(product.price);
            setCategory(product.category);
            setDescription(product.description);
            setQuantity(product.quantity);
            setImages(product.pictures);
        })
        .catch((e) => console.log(e));
    },[id]);

    const handleRemoveImg = (imgObj) => {
        setImgToRemove(imgObj.public_id);
        axios
            .delete(`/images/${imgObj.public_id}/`)
            .then((res) => {
              setImgToRemove(null);
              setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
            })
            .catch((e) => console.log(e));
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!name || !description || !price || !category || !quantity || !images.length) {
            return alert("Please fill out all the fields");
        }
        updateProduct({ id ,name , description , price , category, images, quantity }).then(({ data }) => {
          if(data.length > 0) {
            setTimeout(() => {
              navigate("/admin/product-list");
            }, 1500);
          }
        });
      }

    const showWidget = () => {
        const widget = window.cloudinary.createUploadWidget(
            {
              cloudName: "dg4icria6",
              uploadPreset: "tjgej8ij",
            },
            (error,result) => {
              if(!error && result.event === "success") {
                setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
              }
            }
          );
          widget.open();
    }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className='text-center  text-white fs-5 py-3 mb-0'>
            <span className='logo-sm'>DM</span>
            <span className='logo-lg'> Dizzo Mart</span>
           
          </h2>
          
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key}) => {
            if(key == 'signout') {

            } else {
                navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
                key: 'customers',
                icon: <AiOutlineUser className='fs-4' />,
                label: 'Customers',
              },
              {
                key: 'Catalog',
                icon: <AiOutlineShoppingCart className='fs-4' />,
                label: 'Catalog',
                children: [
                    {
                        key: 'product',
                        icon: <AiOutlineShoppingCart className='fs-4' />,
                        label: 'Add product',
                    },
                    {
                        key: 'product-list',
                        icon: <AiOutlineShoppingCart className='fs-4' />,
                        label: 'Product List',
                    },
                    {
                        key: '/product/:id/edit-product',
                        icon: <AiOutlineShoppingCart className='fs-4' />,
                        label: 'Edit Product',
                    },
                    {
                        key: 'list-brand',
                        icon: <SiBrandfolder className='fs-4' />,
                        label: 'Brand List',
                    },
                    {
                        key: 'category',
                        icon: <BiCategoryAlt className='fs-4' />,
                        label: 'Category',
                    },
                    {
                        key: 'list-category',
                        icon: <BiCategoryAlt className='fs-4' />,
                        label: 'Category List',
                    },
                    {
                        key: 'color',
                        icon: <AiOutlineBgColors className='fs-4' />,
                        label: 'Color',
                    },
                    {
                        key: 'list-color',
                        icon: <AiOutlineBgColors className='fs-4' />,
                        label: 'Color List',
                    },  
                ]
              },
              {
                key: 'orders',
                icon: <FaClipboardList className='fs-4' />,
                label: 'Orders',
            },
            {
                key: 'blogs',
                icon: <FaBloggerB className='fs-4' />,
                label: 'Blogs',
                children: [
                    {
                        key: 'blog',
                        icon: <ImBlog className='fs-4' />,
                        label: 'Add Blog',
                    },
                    {
                        key: 'blog-list',
                        icon: <FaBloggerB className='fs-4' />,
                        label: 'Blog List',
                    },
                    {
                        key: 'blog-category',
                        icon: <ImBlog className='fs-4' />,
                        label: 'Add Blog Category',
                    },
                    {
                        key: 'blog-category-list',
                        icon: <FaBloggerB className='fs-4' />,
                        label: 'Blog Category List',
                    }
                ]
            },
            {
                key: 'enquiries',
                icon: <FaBloggerB className='fs-4' />,
                label: 'Enquiries',
            }
            
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='d-flex justify-content-between ps-3 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlinePicRight /> : <AiOutlinePicLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='d-flex gap-4 align-items-center'>
           <div className='position-relative'>
              <IoIosNotifications className='fs-5'  />
              <span className='badge bg-warning rounded-circle p-1  position-absolute'>3</span>
           </div>
           {
            user && (
              <>
                  <div className='d-flex gap-3 align-items-center dropdown'>
                          <div>
                              <img 
                              width={32}
                              height={32}
                              src="#"
                              className='img-fluid rounded-1'
                              alt="" />
                          </div>
                        {
                          user.isAdmin && (
                            <>
                                  <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      <h5 className='mb-0'>{`${user.name}`}</h5>
                                      <p className='mb-0'>{`${user.email}`}</p>
                                  </div>
                                  <div className="dropdown-menu">
                                      <li><Link className="dropdown-item py-1 mb-1" style={{height: "auto", lineHeight: "20px"}} to="/">View Profile</Link></li>
                                      <li><Link className="dropdown-item py-1 mb-1" style={{height: "auto", lineHeight: "20px"}} to="/admin/product-list">Product List</Link></li>   
                                  </div>
                            </>
                          )
                        }  
                          
                  </div>
              </>
            )
           }
           
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
           <div>
    <h3 className="mb-4 title">Edit Product</h3>
    <div>
        <form onSubmit={handleSubmit}>
            {isSuccess && <Alert variant="success">Product created with success</Alert>}
            {isError && <Alert>{error.data}</Alert>}
            <div className="mb-3">
              <CustomInput type="text" placeholder="Enter Product" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <CustomInput type="text" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} /> 
            <select className='form-control py-2 my-3' onChange={(e) => setCategory(e.target.value)} value={category}>
                 <option value='' disabled>
                       Select Category 
                 </option>
                 <option value="watches">Watches</option>
                 <option value="tablets">Tablets</option>
                 <option value="phones">Phones</option>
                 <option value="technology">technology</option>
            </select>
            <div className='mb-3'>
                 <textarea className='form-control' type="text" placeholder='Enter Description' 
                 cols="30" rows="3"
                 value={description} onChange={(e) => setDescription(e.target.value)}
                 ></textarea>
            </div>
            
              <div className='mb-3'>
                  <CustomInput  type="number" placeholder="Enter Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>
               
            <div className='mb-3'>
                 <button className="button border-0" type='button' onClick={showWidget}>
                        Upload Images
                 </button>
                 <div className='images-preview-container'>
                            {images.map((image) => (
                                <div className="image-preview">
                                    <img src={image.url} />
                                    {imgToRemove != image.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                </div>
                            ))}
                 </div>
            </div>
            <button 
            type='submit' disabled={isLoading || isSuccess}
            className="btn btn-success border-0 rounded-3 my-5">
                Update Product
            </button>
        </form>
    </div>
    </div>
        </Content>
      </Layout>
    </Layout>
    
  )
}

export default EditProduct