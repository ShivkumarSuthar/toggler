import React, { useDebugValue } from 'react'
import profile from './download (1).jpeg'
import bg from './images-modified.jpeg'
import { useState } from 'react';

function Page() {

  const initialForm = { first_name: "", last_name: "", DOB: "", email: "", phone: "", address: "", state: "" };

  const [setFormValue, updateForm] = useState(initialForm);
  const [formError, setErrors] = useState({});


  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    updateForm({ ...setFormValue, [name]: value, });
    // console.log(setFormValue)

  }


  const handleClick = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(setFormValue, undefined,2));

    const namePattern = /^[A-Za-z\s'-]+$/;
    const phoneNumberPattern = /^\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errors = {};
    if (!setFormValue.first_name.trim()) {
      errors.first_name = "first name is required!";
    } else {
      if (!setFormValue.first_name.match(namePattern)) {
        errors.first_name = "first name must contain text only"
      }
      else {
        if (setFormValue.first_name.length < 3) {
          errors.first_name = "first name must contain atleast 3 characters";
        }
        else{
          if (!setFormValue.last_name.trim()) {
            errors.last_name = "Last name is required";
          }else {
            if (!setFormValue.last_name.match(namePattern)) {
              errors.last_name = "Last name must contain text only"
            }
            else {
              if (setFormValue.last_name.length < 3) {
                errors.last_name = "Last name must contain atleast 3 characters";
              }
              else{

                if (!setFormValue.DOB) {
                  errors.DOB = "DOB is required!";
                }
                else{
                  if (!setFormValue.email) {
                    errors.email = "email is required!";
                  }
                  else{
                    if(!setFormValue.email.match(emailPattern)){
                      errors.email="email is invalid"
                    }
                    else{
                      if (!setFormValue.phone) {
                        errors.phone = "phone is required!"
                      }
                      else{
                        if(!setFormValue.phone.match(phoneNumberPattern)){
                          errors.phone="phone number must contain 10 digit"
                        }
                        else{

                          if (!setFormValue.address) {
                            errors.address = "Address is required!"
                          }
                         
                          
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }




    setErrors(errors);

    if(Object.keys(formError).length===0){
      alert("Congrats, you have Successfully Register")
      setTimeout(()=>{
window.scrollBy(0,1000)
      },1000)
    }


  }




  return (
    <>
      <section className='page1 md:h-screen  py-5  flex justify-center font-libre' style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: "cover"
      }}>
        <div>
          {/* <pre>{JSON.stringify(setFormValue, undefined,2)}</pre> */}
        </div>

        <div className=' w-[800px] pt-10 border-red-500 border-2 px-20' style={{
          backgroundColor: "#d8e4e9",

        }}>



          <h1 className="text-center uppercase  tracking-wider font-bold font-hertical text-[25px] text-red-600 pb-10">student Registration form</h1>

          <form className="data pt-3" onSubmit={handleClick}>
            <fieldset className=''>
              <label htmlFor="fname" className='font-libre font-bold'>First Name:</label> <input type="text" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' id='fname' value={setFormValue.fname} onChange={handleChange} name='first_name' /><span className='text-red-500'>{formError.first_name}</span>
            </fieldset>
            <fieldset className='py-5'>
              <label htmlFor="fname" className='font-libre pt-4 font-bold'>Last Name:</label> <input type="text" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' id='lname' value={setFormValue.lname} onChange={handleChange} name='last_name' /><span className='text-red-500'>{formError.last_name}</span>
            </fieldset>



            <fieldset className="py-5 ">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' id='dob' value={setFormValue.dob} onChange={handleChange} name='DOB' /><span className='text-red-500'>{formError.DOB}</span>
            </fieldset>
            <fieldset className="py-5 ">
              <label htmlFor="dob">email:</label>
              <input type="email" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' id='email' value={setFormValue.email} onChange={handleChange} name='email' /><span className='text-red-500'>{formError.email}</span>
            </fieldset>
            <fieldset className="py-5 ">
              <label htmlFor="dob">Phone:</label>
              <input type="number" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' id='phone' value={setFormValue.phone} onChange={handleChange} name='phone' /><span className='text-red-500'>{formError.phone}</span>
            </fieldset>
            <fieldset className="py-5 flex  justify-start items-center">
              <label htmlFor="dob">Address:</label>
              <textarea type="email" className='border-2 mx-2 px-2 py-1 border-red-500' width="500" rows={2} id='adr' value={setFormValue.adr} onChange={handleChange} name='address'></textarea><span className='text-red-500'>{formError.address}</span>
            </fieldset>
            {/* <fieldset className="py-5 ">
              <label htmlFor="dob">State:</label>
              <select name="state" id="state" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' value={setFormValue.state} onChange={handleChange}>
 
                <option value="rajasthan">Rajasthan</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujrat">Gujrat</option>
              </select><span className='text-red-500'>{formError.state}</span>

            </fieldset > */}
            <input className='font-hertical text-center border-2 mx-2 px-5 py-3 rounded-full border-red-500 bg-red-500 text-white w-32 mt-3 hover:bg-teal-500 border-none hover:text-black' id='submit' type='submit' />
          </form></div>


      </section >
      <hr />
      <h1 className="text-center mt-20 pb-5 font-hertical font-thin text-2xl">Profile</h1>
      <section className=" w-100 flex justify-center h-fit pb-28  ">

        <div className='w-[400px] flex justify-center flex-col pt-10 pb-10 bg-blue-300 rounded-md'>

          <img src={profile} alt="" className="rounded-full h-48 w-48 mx-auto bg-teal-500 p-[2px]" />

          <h1 className="text-black text-3xl font-bold font-hertical pt-5 text-start px-10">{setFormValue.first_name}<br /> {setFormValue.last_name}</h1>
          <div className='px-10 pt-3 font-libre text-black text-2xl'><span><i className="fa-solid fa-envelope text-black text-xl pr-3"></i></span>{setFormValue.email}</div>
          <div className='px-10 pt-3 font-libre text-black text-2xl'><span><i className="fa-solid fa-phone text-black text-xl pr-3"></i></span>{setFormValue.phone}</div>
          <div className='px-10 pt-3 font-libre text-black text-2xl'><span><i className="fa-solid fa-calendar-days text-black text-xl pr-3"></i></span>{setFormValue.DOB}</div>
          <div className='px-10 pt-3 font-libre text-black text-2xl'><span><i className="fa-solid fa-location-arrow text-black text-xl pr-3"></i></span>{setFormValue.address}</div>

        </div>
      </section>
    </>

  )
}

export default Page