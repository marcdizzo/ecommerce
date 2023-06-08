import React from 'react'
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import BlogCard from "../components/blogCard";
import Container from '../components/Container';

const Blogs = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-3">
                  <div className='filter-card mb-3'>
                    <div className="filter-title">Find By Categories</div>
                       <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                      </div>
                  </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6">
                <BlogCard />
                </div>
                <div className="col-6">
                <BlogCard />
                </div>
                
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Blogs