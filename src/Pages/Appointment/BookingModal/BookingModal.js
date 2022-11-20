import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, "PP");

    const { name: treatmentName, slots, price } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const slot = form.slot.value;
        const patient = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient,
            slot,
            phone,
            email,
            price
        }



        //TODO: send data to the server
        // and once data is saved then close the modal
        // and display success toast

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='w-11/12 mx-auto my-4'>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                value={date}
                                disabled
                                className='bg-gray-100 font-medium pl-3 pr-2 py-2 rounded-md border border-gray-200 w-full'
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <select required className='bg-gray-100 font-medium pl-3 pr-2 py-2 rounded-md border border-gray-200 w-full' name="slot">

                                {
                                    slots.map((slot, i) => <option
                                        key={i}
                                        value={slot}
                                    >{slot}</option>)
                                }
                            </select>
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name="name"
                                placeholder='Full Name'
                                defaultValue={user?.displayName}
                                disabled
                                className='bg-base-100 pl-3 pr-2 py-2 rounded-md border border-gray-200 w-full'
                                required
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="number"
                                name="phone"
                                placeholder='Phone Number'
                                className='bg-base-100 pl-3 pr-2 py-2 rounded-md border border-gray-200 w-full'
                                required
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name="email"
                                defaultValue={user?.email}
                                disabled
                                placeholder='Email'
                                className='bg-base-100 pl-3 pr-2 py-2 rounded-md border border-gray-200 w-full'
                                required
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <button
                                type="submit"
                                className='bg-accent w-full py-2 text-white font-semibold rounded-lg hover:bg-gray-900 duration-150 ease-out'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;