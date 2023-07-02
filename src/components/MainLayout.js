import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
const MainLayout = () => {
    const user = useSelector((state) => state.user);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    const navigate = useNavigate();
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
                        key: 'products',
                        icon: <AiOutlineShoppingCart className='fs-4' />,
                        label: 'Add product',
                    },
                    {
                        key: 'product-list',
                        icon: <AiOutlineShoppingCart className='fs-4' />,
                        label: 'Product List',
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
                                      <li><Link className="dropdown-item py-1 mb-1" style={{height: "auto", lineHeight: "20px"}} to="/">Sign Out</Link></li>   
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
            <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout