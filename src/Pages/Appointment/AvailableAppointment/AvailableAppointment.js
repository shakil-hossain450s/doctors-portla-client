import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <div className='mt-8'>
            <p className='text-primary font-bold text-center'>Available Appointments on { format(selectedDate, "PP")}</p>
        </div>
    );
};

export default AvailableAppointment;