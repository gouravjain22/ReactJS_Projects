import { useEffect, useState } from "react";

function Form (){


    const  [user, setUser] = useState(
        {name:"", lastName:"", email: "", password : "", address:"", address2:"", city:"", zip:""}
    )
    // here we have created the useSate object of all the fields
  let name, value;
    const handleChange = (e) =>{
        name = e.target.name
        value = e.target.value
        setUser({...user,[name]:value})
    }
    const saveData =()=>{
      return user;
      console.log(user)
    }

    // here three dots are creating the shallow copy of the current user
    useEffect(() => { 
      console.log(user) 
      }, [saveData]); 
// console.log(saveData())
    return (
        <>
        <div className='container'>
        <form>
        <div className="form-row">
         <div className="form-group col-md-6">
           <label htmlFor="inputEmail4">Name</label>
           <input type="name" className="form-control" id="inputName" placeholder="Name"
           value={user.name} onChange ={handleChange} name="name"
           />
         </div>
         <div className="form-group col-md-6">
           <label htmlFor="inputPassword4">LastName</label>
           <input type="lastName" className="form-control" id="inputLastName" placeholder="LastName"
            value={user.lastName} onChange ={handleChange} name="lastName"
           />
         </div>
       </div>
       <div className="form-row">
         <div className="form-group col-md-6">
           <label htmlFor="inputEmail4">Email</label>
           <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
            value={user.email} onChange ={handleChange} name="email"
           />
         </div>
         <div className="form-group col-md-6">
           <label htmlFor="inputPassword4">Password</label>
           <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
           value={user.password} onChange ={handleChange} name="password"
           />
         </div>
       </div>
       <div className="form-group">
         <label htmlFor="inputAddress">Address</label>
         <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
          value={user.address} onChange ={handleChange} name="address"
          />
       </div>
       <div className="form-group">
         <label htmlFor="inputAddress2">Address 2</label>
         <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
          value={user.address2} onChange ={handleChange} name="address2"
         />
       </div>
       <div className="form-row">
         <div className="form-group col-md-6">
           <label htmlFor="inputCity">City</label>
           <input type="text" className="form-control" id="inputCity"
           value={user.city} onChange ={handleChange} name="city"/>
         </div>
        
         <div className="form-group col-md-2">
           <label htmlFor="inputZip">Zip</label>
           <input type="text" className="form-control" id="inputZip"
           value={user.zip} onChange ={handleChange} name="zip"
           />
         </div>
       </div>
       <div className="form-group">
         <div className="form-check">
           <input className="form-check-input" type="checkbox" id="gridCheck"/>
           <label className="form-check-label" htmlFor="gridCheck">
             Check me out
           </label>
         </div>
       </div>
       <button type="submit" className="btn btn-primary" onClick={saveData}>Sign in</button>
     </form>
        </div>
         </>
    )
}
export default Form;