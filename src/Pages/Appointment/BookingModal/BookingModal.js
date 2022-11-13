import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {

    const { name, slots } = treatment;

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
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='w-11/12 mx-auto my-4'>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                value={format(selectedDate, "PP")}
                                disabled
                                className='bg-gray-100 font-medium pl-3 py-2 rounded-md border border-gray-200 w-full'
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <select className='bg-gray-100 font-medium pl-3 py-2 rounded-md border border-gray-200 w-full' name="" id="">
                                <option disabled selected>Pick your Time</option>
                                {
                                    slots.map(slot => <option value={slot}>{slot}</option>)
                                }
                            </select>
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                placeholder='Full Name'
                                className='bg-base-100 pl-3 py-2 rounded-md border border-gray-200 w-full'
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                placeholder='Phone Number'
                                className='bg-base-100 pl-3 py-2 rounded-md border border-gray-200 w-full'
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                placeholder='Email'
                                className='bg-base-100 pl-3 py-2 rounded-md border border-gray-200 w-full'
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