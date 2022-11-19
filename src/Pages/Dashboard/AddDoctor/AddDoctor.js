import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imageBB_key;
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleAddDoctor = data => {
        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imageData.data.url
                    }
                    // save doctor information to the database
                    fetch('http://localhost:5000/doctors', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success(`${doctor.name} doctor added successfully`);
                                navigate('/dashboard/manage-doctors');
                            }

                        })
                }
            })
    }

    return (
        <section className='m-5'>
            <h2 className="text-3xl">Add a Doctor </h2>
            <form className='w-96 m-8 rounded-lg shadow-xl px-10 py-12 border' onSubmit={handleSubmit(handleAddDoctor)}>
                <div className='mb-3'>
                    <label htmlFor="email">Name</label>
                    <input
                        {...register("name",
                            { required: "Name is required" }
                        )}
                        type="text"
                        className='bg-base-100 pl-3 pr-2 py-2 rounded-md border border-gray-200 w-full'
                        name="name"
                        placeholder='Name'
                    />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email",
                            { required: "Email Address is required" }
                        )}
                        type="email"
                        className='bg-base-100 pl-3 pr-2 py-2 rounded-md border border-gray-200 w-full'
                        name="email"
                        placeholder='Email Address'
                    />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="option">Specialty</label>
                    <select {...register('specialty')} required className=' bg-gray-100 font-medium pl-2 pr-2 py-2 rounded-md border border-gray-200 w-full' name="slot">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="image">Image</label>
                    <input
                        {...register("image",
                            { required: "Image is required" }
                        )}
                        type="file"
                        className='bg-base-100 pl-3 pr-2 py-2 rounded-md border border-gray-200 w-full'
                        name="image"
                        placeholder='Image'
                    />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>
                <button
                    className='btn btn-accent w-full my-3'
                    type="submit">
                    Add Doctor
                </button>
            </form>
        </section>
    );
    /**
     * Three Place to stores image
     * 1. Third party image hosting server
     * 2. File system of your server
     * 3. mongodb (database)
     */
};

export default AddDoctor;