import React from 'react';

const FormData = ({firstname, lastname, email, gender, address, bio}) => {
  return (
    <div className='rounded-md overflow-hidden  text-[#76568A] '>
        <h2 className=' px-8 text-center sticky top-0 left-0 right-0 text-3xl font-semibold py-4 bg-[#DBC1ED] tracking-wide '>Your details</h2>
        <div className=" p-4 bg-[#E2D0F0] font-semibold  shadow-black/40 shadow-[0px_2px_5px] ">
            Firstname : {firstname ? firstname : 'no input'}
        </div>
        <div className=" p-4 bg-[#E2D0F0] font-semibold  shadow-black/40 shadow-[0px_2px_5px] ">
            Fastname : {lastname ? lastname : 'no input'}
        </div>
        <div className=" p-4 bg-[#E2D0F0] font-semibold  shadow-black/40 shadow-[0px_2px_5px] ">
            Email : {email ? email : 'no input'}
        </div>
        <div className=" p-4 bg-[#E2D0F0] font-semibold  shadow-black/40 shadow-[0px_2px_5px] ">
            Gender : {gender ? gender : 'no input'}
        </div>
        <div className=" p-4 bg-[#E2D0F0] font-semibold  shadow-black/40 shadow-[0px_2px_5px] ">
            Address : {address ? address : 'no input'}
        </div>
        <div className=" p-4 bg-[#E2D0F0] font-semibold  shadow-black/40 shadow-[0px_2px_5px] ">
            Bio : {bio  ? bio : 'no input'}
        </div>

    </div>
  )
}

export default FormData;