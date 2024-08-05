import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import auth from '../lib/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const createAccount = async (data) => {
        setError('')
        try {
            const signUpResponse = await auth.SignUp(data)
            if (signUpResponse) {
                const userData = await auth.GetCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                    reset()
                    navigate('/')
                }
            }
        } catch (error) {
            console.log('Error Message : ', error.message);
            setError(error.message)
        }
    }
    return (
        <section className="rounded-md bg-black/80 p-2">
            <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2">
                        <svg
                            width="50"
                            height="56"
                            viewBox="0 0 50 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold leading-tight text-black">Sign up to create account</h2>
                    <p className="mt-2 text-base text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="font-medium text-black transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                    <form onSubmit={handleSubmit(createAccount)} className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <Input label='name' type='text' placeholder='Full Name' {...register('name', { required: true })} />
                                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                            </div>
                            <div>
                                <Input label='email' type='email' placeholder='Email'  {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPattern: (value) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            "Email address must be a valid address",
                                    },
                                })}
                                />
                                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                            </div>
                            <div>
                                <Input
                                label='password'
                                type='password'
                                placeholder='Password'
                                {...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters long',
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Password must be less than 20 characters',
                                    },
                                    pattern: {
                                        value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
                                        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                                    },
                                })}
                            />
                                {errors.password && <p className="text-red-600">{errors.password.message}</p>}</div>


                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                >
                                    Create Account <ArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <div className="mt-3 space-y-3">
                        <button
                            type="button"
                            className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                        >
                            <span className="mr-2 inline-block">
                                <svg
                                    className="h-6 w-6 text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.204.084 1.836 1.236 1.836 1.236 1.07 1.833 2.807 1.303 3.492.996.108-.774.418-1.303.76-1.603-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.524.118-3.176 0 0 1.008-.322 3.3 1.23a11.512 11.512 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.874.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.624-5.476 5.922.428.368.81 1.096.81 2.21 0 1.596-.015 2.883-.015 3.276 0 .32.218.694.824.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </span>
                            Sign up with GitHub
                        </button>

                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default SignUp