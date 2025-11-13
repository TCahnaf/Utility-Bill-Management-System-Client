import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';




const Register = () => {
  document.title = "registration-page"

    const {createUser, setUser, updateUser, googleSignIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


    


    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
      if(!pattern.test(password)){
        setError('please make sure the password is at least 6 characters and contains at least one uppercase letter and one lower case letter')
        return
      }





        const photo = e.target.photo.value;
        const name = e.target.name.value
        createUser(email, password) 
        .then(result => {const user = result.user;
            updateUser({displayName:name, photoURL:photo}).then(
                () => {setUser({...user, displayName: name, photoURL: photo})
            console.log(user)
          navigate(location.state?.from || '/', { replace: true });
        
        }
            ).catch(error => {
                setUser(user);
            })
          




        })
        .catch(error => {
            console.log(error);})
      

    }


      const handleGoogleSignIn = () => {
        googleSignIn().then(()=> navigate(location.state?.from || '/', { replace: true })).catch(error => {
            const errorMessage = error.message
        })
    
        }





    return (

         <div className="flex justify-center min-h-screen items-center bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('images/palm_dubai.jpg')" }}>
           
      <div className="card color-selection2 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister}  className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className='name'>Name</label>
            <input 
            name = "name"
            type="text"
            className='input'
            placeholder='Name'
            required
            
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* photo-url */}
            <label className='label'>Photo</label>
            <input 
            name = "photo"
            type="text"
            className='input'
            placeholder='photoURL'
            required

            
            
            />
            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            
             {error && <p className='text-red-600'>{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
          <button onClick={handleGoogleSignIn} className="btn w-[300px] mx-auto bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
     

  
      
    </div>
  );
      
 
};

export default Register;