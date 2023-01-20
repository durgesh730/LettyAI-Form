import React, { useState } from 'react'
import '../style/form.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../component/Navbar'

const Form = () => {

  const [inVal, setInpval] = useState({
    fname: '',
    lastname: "",
    DOB: "",
    phonenumber: "",
    email:" ",
    gender:'',
    country:" ",
    state: ""
  })

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inVal,
        [name]: value
      }
    })
  }

  const handleform = async (e) => {
    e.preventDefault();

    const { fname, lastname, DOB, phonenumber,gender, country, state, email } = inVal;

    if (fname === '') {
      toast("Enter Your Name", {
        autoClose: 3000,
      })
    } else if (phonenumber.length < 10) {
      toast("Enter Your Correct Phone number", {
        autoClose: 3000,
      })
    } else {
      const data = await fetch(`http://localhost:5000/studentform`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({  fname, lastname, DOB, phonenumber,gender, country, state, email  })
      });

      const res = await data.json();
      console.log(res)
      console.log(res.status)

      if (res.status === (201)) {
        toast("Your form submitted successfully", {
          autoClose: 3000,
        })
        setInpval({
          ...inVal,
          fname: '',
          lastname: "",
          DOB: "",
          phonenumber: "",
          email:" ",
          gender:'',
          country:" ",
          state: ""
        })

      } else {
        toast("Please Enter Correct Details!", {
          autoClose: 3000,
        })
      }
    }

  }

  return (
    <>

    <Navbar/>
     
      <div className='container formfields '>
        <form >
          <h2 className='text-center my-4'>Form</h2>
          <div className=' inputs'>

            <div className="form-group p-3 ">
              {/* <label htmlfor="name">Name</label> */}
              <input type="fname" className="form-control" value={inVal.fname} name="fname" id="name" aria-describedby="emailHelp" placeholder="First Name" onChange={setVal}  />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="lastname">Last Name</label> */}
              <input type="lastname" className="form-control" id="lastname" name="lastname" value={inVal.lastname} placeholder="Last Name" onChange={setVal} />
            </div>



            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="DOB" className="form-control" id="DOB" value={inVal.DOB} name="DOB" placeholder="DOB" onChange={setVal} />
            </div>
          </div>

          <div className='inputs'>
            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="phonenumber" className="form-control" name="phonenumber" value={inVal.phonenumber} id="phonenumber" placeholder="Phone Number" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="email" className="form-control" name="email" value={inVal.email} id="email" placeholder="Email Id" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="gender" className="form-control  " value={inVal.gender} name="gender" id="gender" placeholder="Gender" onChange={setVal} />
            </div>

          </div>

          <div className='textarea'>
            <div className="form-group p-3 ">
            <label htmlFor="DOB"> State Name</label>
              <input type="state" className="form-control" value={inVal.state} id="state" name="state"  onChange={setVal} required />
            </div>

            <div className="form-group p-3 ">
              <label htmlFor="DOB"> Country Name</label>
              <input type="country" className="form-control" value={inVal.country} id="country" name="country" placeholder="Country Name" onChange={setVal} required />
            </div>

          </div>

          <div className='formbutton my-4'>
            <button type="submit" onClick={handleform} className="btn">Submit</button></div>
        </form>
      </div>

      {/* <Footer/> */}

      <ToastContainer />
    </>
  )
}

export default Form
