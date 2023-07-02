import React from 'react'
import CustomInput from '../components/customInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useCreateProductMutation } from '../services/appApi';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';





const AddProduct = () => {
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const [quantity,setQuantity] = useState("");
    const navigate = useNavigate();
    const [createProduct, { isError, error, isLoading, isSuccess }] = useCreateProductMutation();

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
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!name || !description || !price || !category || !quantity || !images.length) {
          return alert("Please fill out all the fields");
      }
      createProduct({ name , description , price , category, images, quantity }).then(({ data }) => {
        if(data.length > 0) {
          setTimeout(() => {
            navigate("/admin");
          }, 1500);
        }
      });
    }
    function showWidget() {
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
    const [desc,setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e);
    }
  return (
    <div>
        <h3 className="mb-4 title">Add Product</h3>
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
                {/* <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                    </p>
                </Dragger> */}
                <button 
                type='submit' disabled={isLoading || isSuccess}
                className="btn btn-success border-0 rounded-3 my-5">
                    Add Product
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddProduct