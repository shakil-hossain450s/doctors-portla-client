import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='mt-8'>
            <p
                className='text-primary font-bold text-center text-xl'>
                Available Appointments on {format(selectedDate, "PP")}
            </p>
            <div className='lg:w-11/12 lg:mx-auto mx-2 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                        treatment={treatment}
                        selectedDate={selectedDate}
                        setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;