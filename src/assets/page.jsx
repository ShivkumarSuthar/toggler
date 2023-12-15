import React from 'react'
import profile from './download (1).jpeg'
import bg from './images-modified.jpeg'

function page() {
    let fname=document.getElementById("fname");
let lname=document.getElementById("lnae");
let dob=document.getElementById("dob");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let adr=document.getElementById("adr");
let state=document.getElementById("state");



// function submits(){
//     console.log(fname.value)
// console.log(lname.value)
// console.log(dob.value)
// console.log(email.value)
// console.log(phone.value)
// console.log(adr.value)
// console.log(state.value)



    return (
        <>
        <section className='page1 md:h-screen  py-5  flex justify-center font-libre' style={{
            backgroundImage:`url(${bg})`,
            backgroundPosition:'center',
            backgroundSize:"cover"
        }}>

<div className=' w-[800px] pt-10 border-red-500 border-2 px-20' style={{
    backgroundColor:"#d8e4e9",
    
}}>



            <h1 className="text-center uppercase  tracking-wider font-bold font-hertical text-[25px] text-red-600 pb-10">student Registration form</h1>

            <div className="data pt-3">
                <fieldset className=''>
                    <label htmlFor="fname" className='font-libre font-bold'>First Name:</label> <input type="text" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' required id='fname'/>
                </fieldset>
                <fieldset className='py-5'>
                    <label htmlFor="fname" className='font-libre pt-4 font-bold'>Last Name:</label> <input type="text" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' required id='lname'/>
                </fieldset>
                
          
         
          <fieldset className="py-5 ">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' required id='dob'/>
          </fieldset>
          <fieldset className="py-5 ">
            <label htmlFor="dob">email:</label>
            <input type="email" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' required id='email'/>
          </fieldset>
          <fieldset className="py-5 ">
            <label htmlFor="dob">Phone:</label>
            <input type="number" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' required id='phone' max={10} min={10}/>
          </fieldset>
          <fieldset className="py-5 flex  justify-start items-center">
            <label htmlFor="dob">Address:</label>
            <textarea type="email" className='border-2 mx-2 px-2 py-1 border-red-500' width="500" rows={2} required id='adr'></textarea>
          </fieldset>
          <fieldset className="py-5 ">
            <label htmlFor="dob">State:</label>
            <select name="state" id="state" className='border-2 mx-2 w-60 px-2 py-1 border-red-500' required>
                <option value="rajasthan">Rajasthan</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujrat">Gujrat</option>
                
            </select>
           
          </fieldset >
          <button className='font-hertical text-center border-2 mx-2 px-5 py-3 rounded-full border-red-500 bg-red-500 text-white w-32 mt-3 hover:bg-teal-500 border-none hover:text-black' id='submit' >Submit</button>
            </div></div>


        </section>
          <hr />
       <h1 className="text-center mt-20 pb-5 font-hertical font-thin text-2xl">Profile</h1>
       <section className=" w-100 flex justify-center h-full">

       <div className='w-[400px] flex justify-center flex-col pt-10 pb-10 bg-blue-300 rounded-md'>

        <img src={profile} alt="" className="rounded-full h-48 w-48 mx-auto bg-teal-500 p-[2px]"/> 

        <h1 className="text-white text-3xl font-bold font-hertical pt-5 text-start px-10">Shivkumar<br/> Suthar</h1> 
             <div className='px-10 pt-3 font-libre text-white text-2xl'><span><i className="fa-solid fa-envelope text-white text-xl pr-3"></i></span>shiv@gmai.com</div>
       <div className='px-10 pt-3 font-hertical text-white text-2xl'><span><i className="fa-solid fa-phone text-white text-xl pr-3"></i></span>123456789</div>
       <div className='px-10 pt-3 font-hertical text-white text-2xl'><span><i className="fa-solid fa-calendar-days text-white text-xl pr-3"></i></span>15 March 2000</div>
       <div className='px-10 pt-3 font-hertical text-white text-2xl'><span><i className="fa-solid fa-location-arrow text-white text-xl pr-3"></i></span>Rajasthan, India</div>

       <div></div>
       </div>
       </section>
        </>

    )
}

export default page