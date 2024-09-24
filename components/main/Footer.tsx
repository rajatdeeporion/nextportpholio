"use client"; // Mark this component as a client component

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaGithub, FaYoutube, FaSkype } from 'react-icons/fa';
import axios from 'axios';
import { formSchema } from '@/schemas';
import { useFormik } from 'formik'
const Footer: React.FC = () => {
    const initialValues = {
        name: '',
        lastname: '',
        email: '',
        description: ''

    }
    const { values, handleChange, touched, errors, handleBlur, handleSubmit } = useFormik({
        validationSchema: formSchema,
        initialValues: initialValues,
        onSubmit: async (values, actions) => {
            console.log("Values of formik", values);

            try {
                const response = await axios.post('https://formspree.io/f/xdknrbql', values, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    // If the submission is successful, clear the form
                    actions.resetForm(); // Reset the form
                    alert('Form submitted successfully!'); // Notify the user
                }
            } catch (error) {
                alert('There was a problem with your submission.'); // Error handling
                console.error('Error submitting form:', error);
            }
        }

    })

    const [formData, setFormData] = useState<{
        name: string;
        lastname: string;
        email: string;
        description: string;
    }>({
        name: '',
        lastname: '',
        email: '',
        description: ''
    });



    // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault(); // Prevent default form submission

    //     try {
    //         const response = await axios.post('https://formspree.io/f/xdknrbql', formData, {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }
    //         });

    //         if (response.status === 200) {
    //             // If the submission is successful, clear the form
    //             setFormData({
    //                 name: '',
    //                 lastname: '',
    //                 email: '',
    //                 description: ''
    //             });
    //             alert('Form submitted successfully!'); // Notify the user
    //         }
    //     } catch (error) {
    //         alert('There was a problem with your submission.'); // Error handling
    //         console.error('Error submitting form:', error);
    //     }
    // };

    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>
                            {/* Community */}
                        </div>
                        <div className='flex flex-row items-center my-[15px]'>
                            <p className='cursor-pointer'>
                                <FaYoutube className='text-5xl' />
                            </p>
                            <p className='cursor-pointer mx-4'>
                                <a href='https://github.com/love211' target='_blank' rel='noopener noreferrer'>
                                    <FaGithub className='text-5xl m-4' />
                                </a>
                            </p>
                            <p className='cursor-pointer'>
                                <a href='skype:live:.cid.da0d5784de52013' target='_blank' rel='noopener noreferrer'>
                                    <FaSkype className='text-5xl' />
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='mb-[20px] text-[15px] text-center'>
                            &copy; <span>Made by:-</span>&nbsp;&nbsp;<strong>Love khadolia</strong><br /><br />
                            <span>Contact me at:<br />+91 7223018822 <br />love.kumar9626@gmail.com</span>
                        </div>
                    </div>

                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px] mb-4'>
                            About
                        </div>
                        <form onSubmit={handleSubmit} className='flex flex-col w-[300px]'> {/* Adjust width here */}
                            <div className='flex justify-between mb-4'>
                                <div className='mr-2 w-full max-w-[48%]'>
                                    <input
                                        name='name'
                                        value={values.name}
                                        onBlur={handleBlur}
                                        type='text'
                                        placeholder='First Name'
                                        onChange={handleChange}
                                        className='border border-[#763bff] bg-[#1f0e48] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200 w-full'
                                        required
                                    />
                                    {errors.name && touched.name ? <p className='form-error text-small text-red-500'>{errors.name}</p> : null}
                                </div>
                                <div className='w-full max-w-[48%]'>
                                    <input
                                        name='lastname'
                                        value={values.lastname}
                                        type='text'
                                        placeholder='Last Name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='border border-[#763bff] bg-[#1f0e48] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200 w-full'
                                        required
                                    />
                                    {errors.lastname && touched.lastname ? <p className='form-error text-small text-red-500'>{errors.lastname}</p> : null}
                                </div>
                            </div>
                            <input
                                name='email'
                                value={values.email}
                                type='email'
                                placeholder='Email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='border border-[#763bff] bg-[#1f0e48] text-white p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200 w-full'
                                required
                            />
                            {errors.email && touched.email ? <p className='form-error text-small text-red-500'>{errors.email}</p> : null}

                            <textarea
                                name='description'
                                value={values.description}
                                placeholder='Description'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='border border-[#763bff] bg-[#1f0e48] text-white p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200 w-full'
                                rows={4}
                                required
                            />
                            {errors.description && touched.description ? <p className='form-error text-small text-red-500'>{errors.description}</p> : null}

                            <button
                                type='submit'
                                className='bg-[#18063e] text-white p-2 rounded hover:bg-[#763bff] transition duration-200'
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
