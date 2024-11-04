import  { useContext, useState } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { FaEyeSlash } from "react-icons/fa";



const Registration = () => {
    const { createUser } = useContext(AuthContext)
	const Navigate = useNavigate()
	const location = useLocation()
	const from = location?.state || '/'
	const [showPassword, setShowPassword] = useState(false);
     console.log(createUser)
     const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data
        if (password.length < 6) {
            Swal.fire('Password should be 6 character or more')
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire('Password should have at lease one Uppercase letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire('Password should have at lease one Lowercase letter')
            return;
        }
        createUser(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                if (result.user) {
                    Navigate(from)
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops... Registration Failed",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });


            })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

   

    return (
        <div>
            <div className="hero min-h-screen">
        <div className=""></div>
       
           
       

        <div className="w-full max-w-md p-8 space-y-3 bg-[#434336] bg-opacity-20 backdrop-blur-base rounded-lg text-[#682018]">
            <h1 className="text-2xl font-bold text-center">Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Fullname</label>
                    <input type="text" name="username" id="username" placeholder="Fullname" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        {...register("fullName", { required: true })} />
                    {errors.fullName && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                    <input type="text" name="username" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Image Url</label>
                    <input type="text" name="username" id="username" placeholder="Image url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                        {...register("imageUrl")} />

                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("password", { required: true })} />
                        {/* Show/hide password toggle */}
                        <button type="button" className="absolute inset-y-0 right-0 px-3 flex items-center" onClick={togglePasswordVisibility}>
                            {showPassword ? (
                                <FaEyeSlash className="w-6 h-6" />
                            ) : (
                                <FaEyeSlash className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                    {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                    <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm  btn btn-outline border border-[#682018] hover:text-white  hover:outline-none hover:bg-[#682018] text-[#682018] dark:text-gray-50 dark:bg-violet-600">Sign up</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>

                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">

            </div>
            <p className="text-center sm:px-6 dark:text-gray-600 text-xl">Already have an account?
                <Link to='/signin' rel="noopener noreferrer" href="#" className="underline text-[#682018] font-semibold text-xl">Sign in</Link>
            </p>
        </div>
    

    </div>
        
            
        </div>
    );
};

export default Registration;