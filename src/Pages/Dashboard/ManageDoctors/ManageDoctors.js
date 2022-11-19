import { useQuery } from '@tanstack/react-query';
import { info } from 'daisyui/src/colors/colorNames';
import React from 'react';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = res.json();
                return data;
            }
            catch (err) {
                console.log('Error:', err);
            }
        }
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleDoctorDelete = id => {
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const proceed = window.confirm('Are you sure you want to delete this doctor')
                    if (proceed) {
                        toast.success('Deleted Doctor Successfully');
                        refetch();
                    }
                }
            })
    }
    return (
        <section className='m-5'>
            <h2 className='text-3xl font-medium'>Manage Doctors: {doctors.length}</h2>
            {
                doctors.length === 0 ?
                    <>
                        <h2 className="text-4xl font-semibold text-center mt-20">No Doctors</h2>
                    </>
                    :
                    <>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Specialty</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        doctors.map((doctor, i) => <tr key={doctor._id}>
                                            <th>{i + 1}</th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask rounded-full w-12 h-12">
                                                            <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div className="font-bold">{doctor.name}</div>
                                                </div>
                                            </td>
                                            <td>{doctor.email}</td>
                                            <td>{doctor.specialty}</td>
                                            <th><button
                                                onClick={() => handleDoctorDelete(doctor._id)}
                                                className="btn btn-error btn-xs text-white">Delete</button></th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
            }
        </section>
    );
};

export default ManageDoctors;