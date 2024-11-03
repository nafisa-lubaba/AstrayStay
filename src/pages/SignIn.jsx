// import React, { useContext, useEffect, useState } from 'react';
// import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../authProvider/AuthProvider';
// import Swal from "sweetalert2";
// import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
// import { useForm } from 'react-hook-form';


// const SignIn = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { signInUser, googleLogin, user } = useContext(AuthContext);
//     const [showPassword, setShowPassword] = useState(false);
//     useEffect(() => {
//         if (user) {
//             navigate('/');
//         }
//     }, [navigate, user]);

//     const from = location?.state?.from || '/';
//     const handleSocialLogin = socialProvider => {
//         socialProvider()
//             .then(result => {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Login successful',
//                     showConfirmButton: false,
//                     timer: 1500,
//                 });
//                 if (result.user) {
//                     Navigate(from)
//                 }
//             })
//             .catch(error => {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Oops... Login Failed",
//                     text: "Something went wrong!",
//                     footer: '<a href="#">Why do I have this issue?</a>'
//                 });


//             })
//         const {
//             register,
//             handleSubmit,
//             formState: { errors },
//         } = useForm()
//         const onSubmit = data => {
//             const { email, password } = data
//             if (password.length < 6) {
//                 toast('Password should be 6 character or more')
//             }
//             else if (!/[A-Z]/.test(password)) {
//                 toast('Password should have at lease one Uppercase letter')
//                 return;
//             }
//             else if (!/[a-z]/.test(password)) {
//                 toast('Password should have at lease one Lowercase letter')
//                 return;
//             }
//             signInUser(email, password)
//                 .then(result => {
//                     Swal.fire({
//                         icon: 'success',
//                         title: 'Login successful',
//                         showConfirmButton: false,
//                         timer: 1500,
//                     });
//                     if (result.user) {
//                         Navigate(from)
//                     }
//                 })
//                 .catch(error => {
//                     Swal.fire({
//                         icon: "error",
//                         title: "Oops... Login Failed",
//                         text: "Something went wrong!",
//                         footer: '<a href="#">Why do I have this issue?</a>'
//                     });


//                 })
//         }
//         const togglePasswordVisibility = () => {
//             setShowPassword(!showPassword);
//         };
        
//         return (
//             <div className='flex justify-center bg-gradient-to-r from-cyan-100 to-blue-200 items-center min-h-[calc(100vh-306px)]'>
//             <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl '>
//                 <div className='hidden bg-cover bg-center lg:block lg:w-1/2'>
//                     <img className="w-full h-full" src="https://i.ibb.co/rxmLngN/login.jpg" alt="" />
//                 </div>

//                 <div className='w-full px-6 py-8 md:px-8 lg:w-1/2 bg-gradient-to-r from-cyan-100 to-blue-200'>
//                     <div className='flex justify-center mx-auto'>
//                         <img className='w-auto h-7 sm:h-8' src='' alt='' />
//                     </div>

//                     <p className='mt-3 text-xl text-center text-gray-600 '>
//                         Welcome back!
//                     </p>

//                     <div
//                         onClick={handleSocialLogin}
//                         className='flex bg-gradient-to-r from-cyan-100 to-blue-200 cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '
//                     >
//                         <div className='px-4 py-2 '>
//                             <svg className='w-6 h-6' viewBox='0 0 40 40'>
//                                 <path
//                                     d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
//                                     fill='#FFC107'
//                                 />
//                                 <path
//                                     d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
//                                     fill='#FF3D00'
//                                 />
//                                 <path
//                                     d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
//                                     fill='#4CAF50'
//                                 />
//                                 <path
//                                     d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
//                                     fill='#1976D2'
//                                 />
//                             </svg>
//                         </div>

//                         <span className='w-5/6 px-4 py-3 font-bold text-center'>
//                             Sign in with Google
//                         </span>
//                     </div>

//                     <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6 ">
//                         {/* Email Input */}
//                         <div className="space-y-1 text-sm text-black">
//                             <label htmlFor="userame" className="block dark:text-gray-100">Email</label>
//                             <input type="Email" name="Email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-black text-black dark:border-gray-100 dark:bg-gray-50 dark:text-gray-100 focus:dark:border-violet-100"
//                                 {...register("email", { required: true })} />
//                             {errors.email && <span className="text-red-600">This field is required</span>}
//                         </div>

//                         {/* Password Input */}
//                         <div className="space-y-1 text-sm">
//                             <label htmlFor="password" className="block dark:text-gray-600 text-black">Password</label>
//                             <div className="relative">
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     name="userpassword"
//                                     id="password"
//                                     placeholder="Password"
//                                     className="w-full px-4 py-3 text-black border border-black rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
//                                     {...register("password", { required: true })}
//                                 />
//                                 {/* Show/hide password toggle */}
//                                 <button type="button" className="absolute inset-y-0 right-0 px-3 flex items-center text-black" onClick={togglePasswordVisibility}>
//                                     {showPassword ? (
//                                         <FaRegEye className="w-6 h-6" />
//                                     ) : (
//                                         <FaRegEyeSlash className="w-6 h-6" />
//                                     )}
//                                 </button>
//                             </div>
//                             {errors.password && <span className="text-red-600">{errors.password.message}</span>}
//                             <div className="flex justify-end text-xs dark:text-gray-600">
//                                 <a rel="noopener noreferrer" href="#">Forgot Password?</a>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <button className="block w-full p-3 text-center rounded-sm btn btn-outline border bg-[#158260] hover:text-white hover:outline-none hover:bg-gray-400 text-white">Sign In</button>
//                     </form>

//                     <div className='flex items-center justify-between mt-4'>
//                         <span className='w-1/5 border-b  md:w-1/4'></span>
//                         <Link
//                             to='/signup'
//                             className='text-xs text-gray-500 uppercase hover:underline'
//                         >
//                             or sign up
//                         </Link>
//                         <span className='w-1/5 border-b  md:w-1/4'></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
           
//         );
//     };
// }

//     export default SignIn;


import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signInUser, googleLogin, user } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const from = location?.state?.from?.pathname || '/';
    
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user, navigate, from]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log("User logged in:", result.user);
                
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from); // Redirect after successful login
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops... Login Failed",
                    text: error.message || "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    };

    const onSubmit = data => {
        const { email, password } = data;

        if (password.length < 6) {
            Swal.fire('Password should be 6 characters or more');
        } else if (!/[A-Z]/.test(password)) {
            Swal.fire('Password should have at least one uppercase letter');
        } else if (!/[a-z]/.test(password)) {
            Swal.fire('Password should have at least one lowercase letter');
        } else {
            signInUser(email, password)
                .then(result => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login successful',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate(from);
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops... Login Failed",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex justify-center bg-gradient-to-r from-cyan-100 to-blue-200 items-center min-h-[calc(100vh-306px)]'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl '>
                <div className='hidden bg-cover bg-center lg:block lg:w-1/2'>
                    <img className="w-full h-full" src="https://i.ibb.co/rxmLngN/login.jpg" alt="" />
                </div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2 bg-gradient-to-r from-cyan-100 to-blue-200'>
                    <p className='mt-3 text-xl text-center text-gray-600 '>Welcome back!</p>

                    <div
                        onClick={handleGoogleSignIn}
                        className='flex bg-gradient-to-r from-cyan-100 to-blue-200 cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50'
                    >
                        <span className='w-5/6 px-4 py-3 font-bold text-center'>Sign in with Google</span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6 ">
                        <div className="space-y-1 text-sm text-black">
                            <label htmlFor="email" className="block dark:text-gray-100">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-md border border-black text-black dark:border-gray-100 dark:bg-gray-50 dark:text-gray-100 focus:dark:border-violet-100"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600 text-black">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 text-black border border-black rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                    {...register("password", { required: true })}
                                />
                                <button type="button" className="absolute inset-y-0 right-0 px-3 flex items-center text-black" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaRegEye className="w-6 h-6" /> : <FaRegEyeSlash className="w-6 h-6" />}
                                </button>
                            </div>
                            {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>

                        <button className="block w-full p-3 text-center rounded-sm btn btn-outline border bg-[#158260] hover:text-white hover:outline-none hover:bg-gray-400 text-white">Sign In</button>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b md:w-1/4'></span>
                        <Link to='/signup' className='text-xs text-gray-500 uppercase hover:underline'>or sign up</Link>
                        <span className='w-1/5 border-b md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
