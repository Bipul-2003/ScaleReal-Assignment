import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortByEpisode, sortByYear } from '../store/movieSlice'

const Dropdown = () => {
    const [dropdwn, setDropdwn] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className=" m-3 w-full">
            <div className="relative inline-block text-left">
                <div>
                    <button type="button" onClick={() => setDropdwn(true)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Short by..
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {dropdwn && <div className=" absolute w-44 bg-white">
                    <ul className=' right-0 z-20 w-full space-y-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <li className='hover:bg-slate-200 p-2 border-b-gray-400 border'>Short by<button className='ml-20' onClick={() => setDropdwn(false)}>&#10005;</button></li>
                        <li onClick={() => dispatch(sortByEpisode())} className='hover:bg-slate-200 text-center cursor-pointer'>Episode</li>
                        <li onClick={() => dispatch(sortByYear())} className='hover:bg-slate-200 text-center cursor-pointer'>Year</li>
                    </ul>
                </div>}
            </div>
        </div>

    )
}

export default Dropdown