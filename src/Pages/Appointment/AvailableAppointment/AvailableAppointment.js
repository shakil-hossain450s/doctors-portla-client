import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='mt-8'>
            <p
                className='text-primary font-bold text-center'>
                Available Appointments on {format(selectedDate, "PP")}
            </p>
            <div className='lg:w-11/12 lg:mx-auto mx-2 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;