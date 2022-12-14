import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <section className='m-5'>
            <div className='flex justify-between items-center mb-5'>
                <h2 className='text-3xl font-medium'>My Appointment</h2>
                <button className='btn px-8 btn-outline'>Date</button>
            </div>
            {
                bookings.length === 0 ?
                    <>
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className="text-3xl">You Have No Booking</h2>
                        </div>
                    </>
                    :
                    <>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Treatment</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings.map((booking, i) => <tr key={booking._id}>
                                            <th>{i + 1}</th>
                                            <td>{booking.patient}</td>
                                            <td>{booking.treatment}</td>
                                            <td>{booking.appointmentDate}</td>
                                            <td>{booking.slot}</td>
                                            <td>
                                                {
                                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                                        <button
                                                            className='btn btn-sm btn-primary'>
                                                            Pay
                                                        </button>
                                                    </Link>
                                                }
                                                {
                                                    booking.price && booking.paid && <span>Paid</span>
                                                }
                                            </td>
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

export default MyAppointment;