import React, { useEffect, useState } from 'react'
import bgImg from './pexels-pixabay-207692 (1).jpg';
import profile from './download (1).jpeg';

function Page2() {
    const initalValue = { first_name: "", last_name: "", DOB: "", Gender: "", phone: "", email: "", University: "", stream: "", YOJ: "", YOP: "", Pass: "" }
    const [setForm, updateForm] = useState(initalValue);

    const [isFormSubmit, setisFormSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateForm({ ...setForm, [name]: value });
        console.log(setForm)
    }
    const namePattern = /^[A-Za-z\s'-]+$/;
    const phoneNumberPattern = /^\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function handleSubmit(e){
    e.preventDefault();
    if(!setForm.first_name.trim() || !setForm.last_name.trim() || !setForm.email.trim()){
alert("All field are mendatory")
    }
    else{
        if(!setForm.first_name.match(namePattern) || setForm.first_name.length<3){
            alert("invalid first name field")
        }
        else{
            if(!setForm.last_name.match(namePattern) || setForm.last_name.length<3){
                alert("invalid last name field")
            }
            else{
                if(!setForm.phone.match(phoneNumberPattern)){
                    alert("invalid phone field")
                }
                else{
                    if(!setForm.email.match(emailPattern)){
                        alert("invalid email field")
                        }
                        else{
                           if(setForm.Pass.length<8){
                            alert( "Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long");
                           }
                           else{
                            // alert(JSON.stringify(setForm,undefined,2))
setisFormSubmit(true)
                           
                            let pro=document.getElementById("pro");
                            pro.classList.remove("hidden")
                           }
                        }
                }
            }
  
        }
    }
 


}    

        //     alert(JSON.stringify(setForm,undefined,2))
    


    //     const validate=(values)=>{
    //         const error={};

    //         if(!values.first_name){
    //  error.first_name="first name is  !"
    //         }
    // console.log(error)
    //     }




    return (
        <>
            <section className="bg-black h-screen w-screen flex " style={{
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                backgroundSize: "100% 100%",

            }}>
                <div className='w-1/2 px-10 py-10 font-libre  text-lg  '>
                    <h1 className="font-hertical text-teal-500 text-[40px] py-5 tracking-tighter font-[800] ">Registration Form</h1>

                    <form className="caret-red-500" onSubmit={handleSubmit}>
                        <fieldset className="py-3">
                            <input type="text" name="first_name" onChange={handleChange} className="w-[320px] h-16 px-3 py-2 input  hover:border-b-4 border-teal-500  outline-none text-white placeholder:text-gray-500 placeholder:font-mandala" placeholder='first name' style={{ background: "rgba(130, 130, 130, 0.22)" }} value={setForm.first_name} />

                            <input type="text" name="last_name" onChange={handleChange}   className="h-16 ml-5 px-3 py-2 hover:border-b-4  outline-none border-teal-500 input placeholder:font-mandala   text-white placeholder:text-gray-500" placeholder='last name' style={{ background: "rgba(130, 130, 130, 0.22)" }} value={setForm.last_name} />
                        </fieldset>



                        <fieldset className="pt-3">
                            <input type="text" name="phone" onChange={handleChange}   className="w-[300px] mr-5  h-16 px-3 py-2 input  hover:border-b-4  outline-none border-teal-500  text-white placeholder:text-gray-500 placeholder:font-mandala" placeholder='phone' style={{ background: "rgba(130, 130, 130, 0.22)" }} value={setForm.phone}/>
                            <input type="text" name="email" onChange={handleChange}   className="w-[295px] h-16 w- px-3 py-2 input  hover:border-b-4  outline-none border-teal-500  text-white placeholder:text-gray-500 placeholder:font-mandala" placeholder='email' style={{ background: "rgba(130, 130, 130, 0.22)" }} />
                        </fieldset>







                        <fieldset className="pt-3">

                            <input name="Pass" onChange={handleChange}   className="h-16 w-[615px] px-3 py-2 input hover:border-b-4  outline-none border-teal-500 active:border-2  text-white placeholder:text-gray-500 placeholder:font-mandala font-libre" placeholder='password' style={{ background: "rgba(130, 130, 130, 0.22)" }} value={setForm.Pass}/>
                        </fieldset>
                        <input type="submit" value="Submit"className=" cursor-pointer px-10 py-3 w-60 mt-5 bg-orange-50 text-black hover:bg-teal-500 hover:text-white font-hertical"   />
                   
                    </form>

                </div>

                {/* profile section */}
                <div className="w-[50%] h-screen font-century hidden" id='pro'>


                    <h1 className="text-center font-hertical font-thin text-2xl text-white py-5">Profile</h1>
                    <section className="flex justify-center">

                        <div className='w-[400px] h-[600px] flex justify-center flex-col pb-5 px-10  bg-blue-200  rounded-md'>

                            <img src={profile} alt="" className="rounded-full h-32 w-32 mx-auto bg-teal-500 p-[2px]" />

                            <h1 className="text-black text-2xl font-hertical  uppercase  pt-5 text-start px-10 ">{setForm.first_name} {setForm.last_name}</h1>

                            <div className='px-10 pt-3 font-century text-black text-md font-thin'><span><i className="fa-solid fa-envelope text-black text-xl pr-3"></i></span>{setForm.email}</div>
                            <div className='px-10 pt-3 font-century text-black text-lg'><span><i className="fa-solid fa-phone text-black text-xl pr-3"></i></span>{setForm.phone}</div>
                            {/* <div className='px-10 pt-3 font-century text-black text-lg'><span><i className="fa-solid fa-calendar-days text-black text-xl pr-3"></i></span>{setForm.DOB}</div>
                            <div className='px-10 pt-3 font-century text-black text-lg'><span><i className="fa-solid fa-location-arrow text-black text-xl pr-3"></i></span>{setForm.Address}</div> */}

                        </div>
                    </section>
                </div>
            </section >
        </>
    )
}

export default Page2