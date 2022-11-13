import React from 'react';

const BookingModal = ({ treatment }) => {

    const { name } = treatment;

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
                                placeholder='Date'
                                className='bg-base-100 pl-3 py-2 rounded-md border-2 border-gray-300 w-full'
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                placeholder='Time'
                                className='bg-base-100 pl-3 py-2 rounded-md border-2 border-gray-300 w-full'
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                placeholder='Full Name'
                                className='bg-base-100 pl-3 py-2 rounded-md border-2 border-gray-300 w-full'
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                placeholder='Phone Number'
                                className='bg-base-100 pl-3 py-2 rounded-md border-2 border-gray-300 w-full'
                            />
                        </div>
                        <div className='my-3 flex justify-center'>
                            <input
                                type="text"
                                name=""
                                placeholder='Email'
                                className='bg-base-100 pl-3 py-2 rounded-md border-2 border-gray-300 w-full'
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