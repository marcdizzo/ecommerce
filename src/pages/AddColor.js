import React from 'react'
import CustomInput from '../components/customInput'

const AddColor = () => {
  return (
    <div>
        <h3 className="mb-4 title">Add Blog Category</h3>
        <div>
            <form action="">
                <CustomInput  type="color" label="Enter Color" />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
                    Add Color
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddColor