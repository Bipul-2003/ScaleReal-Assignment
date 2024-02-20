import React from 'react'
import Dropdown from '../Dropdown'
import SearchBar from '../SearchBar'

const Navbar = () => {
    return (
        <div className='max-w-full grid grid-cols-12 items-center bg-gray-200 py-2'>
            <div className=" col-span-1">
                <Dropdown/>
            </div>
            <div className='col-span-11 mr-3'>
                <SearchBar />
            </div>

        </div>
    )
}

export default Navbar