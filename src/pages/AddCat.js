import React from 'react'
import CustomInput from '../components/customInput'

const AddCat = () => {
  return (
    <div>
        <h3 className="mb-4 title">Add  Category</h3>
        <div>
            <form action="">
                <CustomInput type="text" placeholder="Enter  Category" />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
                    Add Blog Category
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddCat