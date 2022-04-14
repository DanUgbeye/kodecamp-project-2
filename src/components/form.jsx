import React, { useState } from 'react';
import FormData from './formData';

const Form = () => {

    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ gender, setGender ] = useState('null');
    const [ address, setAddress ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ message, setMessage ] = useState('');

    const [submitted, setSubmitted] = useState(false);

    function submitForm(e) {
      e.preventDefault();
      setSubmitted(true);
      setMessage('scroll down to see your submission');
      setTimeout(() => {
        setMessage('');
      }, 3000)
    }


  return (
    <div className=' flex flex-col gap-12'>

      { (
        <div className={(message ? 'translate-x-none' : 'translate-x-[150%]') + " fixed overflow-hidden top-6 right-4 bg-green-600 p-6 max-w-sm text-white font-semibold rounded-lg transition-all duration-400 ease-in-out " }>{message}</div>
      )}

      <form onSubmit={(e) => submitForm(e)} className=' bg-[#E2D0F0] p-6 min-w-[90%] rounded-b-md '>

          <fieldset className=' flex flex-col gap-4 sm:flex-row sm:items-center mb-8 '>
              <label htmlFor="firstname" className=' font-semibold text-lg text-[#76568A] min-w-[7rem] '>Firstname</label>
              <input id='firstname' name='firstname' placeholder='firstname' value={firstname} type="text" onChange={(e) => {setFirstName(e.target.value)}} className=' outline-none border-2 border-solid border-gray-400 focus:border-[#76568A]  text-gray-700 rounded-md h-12 w-full sm:max-w-md px-4 ' required />
          </fieldset>

          <fieldset className=' flex flex-col gap-4 sm:flex-row sm:items-center mb-8 '>
              <label htmlFor="lastname" className=' font-semibold text-lg text-[#76568A] min-w-[7rem] '>Lastname</label>
              <input id='lastname' name='lastname' placeholder='lastname' value={lastname} type="text" onChange={(e) => {setLastname(e.target.value)}} className=' outline-none border-2 border-solid border-gray-400 focus:border-[#76568A]  text-gray-700 rounded-md h-12 w-full sm:max-w-md px-4 ' required />
          </fieldset>

          <fieldset className=' flex flex-col gap-4 sm:flex-row sm:items-center mb-8 '>
              <label htmlFor="email" className=' font-semibold text-lg text-[#76568A] min-w-[7rem] '>email</label>
              <input id='email' name='email' placeholder='email' value={email} type="email" onChange={(e) => {setEmail(e.target.value)}} className=' outline-none border-2 border-solid border-gray-400 focus:border-[#76568A]  text-gray-700 rounded-md h-12 w-full sm:max-w-md px-4 ' required />
          </fieldset>

          <fieldset className=' flex flex-col gap-4 sm:flex-row sm:items-center mb-8 '>
              <label htmlFor="gender" className=' font-semibold text-lg text-[#76568A] min-w-[7rem] '>gender</label>
              <select id='gender' name='gender' placeholder='gender' value={gender} type="text" onChange={(e) => {setGender(e.target.value)}} className=' outline-none border-2 border-solid border-gray-400 focus:border-[#76568A]  text-gray-700 rounded-md h-12 w-full sm:max-w-md px-4 ' required>
                <option defaultChecked disabled hidden value="null" className=' text-gray-600 '>select your gender</option>
                <option value="male" className=' text-gray-600 '>male</option>
                <option value="female" className=' text-gray-600 '>female</option>
              </select>
          </fieldset>

          <fieldset className=' flex flex-col gap-4 sm:flex-row sm:items-center mb-8 '>
              <label htmlFor="address" className=' font-semibold text-lg text-[#76568A] min-w-[7rem] '>address</label>
              <input id='address' name='address' placeholder='address' value={address} type="address" onChange={(e) => {setAddress(e.target.value)}} className=' outline-none border-2 border-solid border-gray-400 focus:border-[#76568A]  text-gray-700 rounded-md h-12 w-full sm:max-w-md px-4 ' required />
          </fieldset>

          <fieldset className=' flex flex-col gap-4 sm:flex-row  mb-8 '>
              <label htmlFor="bio" className=' font-semibold text-lg text-[#76568A] min-w-[7rem] '>bio</label>
              <textarea id='bio' name='bio' rows="5" placeholder='bio' value={bio} type="bio" onChange={(e) => {setBio(e.target.value)}} className=' outline-none border-2 border-solid border-gray-400 focus:border-[#76568A]  text-gray-700 rounded-md  w-full sm:max-w-md py-2 px-4 resize-none ' required />
          </fieldset>

          <button type="submit" value="Submit" className=' font-semibold w-full max-w-[10rem] mx-auto flex justify-center items-center h-12 bg-[#c797ec] text-white hover:bg-[#76568A] rounded-lg '>
            submit
          </button>

      </form>

      {submitted && (
        <FormData 
         firstname={firstname}
         lastname={lastname}
         email={email}
         address={address}
         bio={bio}
         gender={gender}
        />
      )}

    </div>
  )
}

export default Form;