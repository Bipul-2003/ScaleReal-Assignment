import React from 'react'

const MovieContainer = ({ epId, title, release_date, onClick }) => {
    function decimalToRoman(num) {
        if (num < 1 || num > 10) {
            return "Input should be a number between 1 and 10";
        }

        const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
        return romanNumerals[num - 1];
    }

    return (

        <div className="grid w-full grid-cols-4 items-center px-3  border-gray-200  border-b-2 py-3 rounded-md hover:bg-gray-100  cursor-pointer" onClick={onClick}>
            <div className='col-span-1 font-sans text-sm font-semibold text-gray-400'>{`EPISODE ${epId}`}</div>
            <div className='col-span-2 font-sans text-base font-semibold text-gray-600'>{`Episode ${decimalToRoman(epId)} - ${title}`}</div>
            <div className='col-span-1 text-end font-sans text-sm font-semibold text-gray-500'>{release_date}</div>
        </div>
    )
}

export default MovieContainer