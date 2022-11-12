import React, { useState } from 'react';
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <header>
            <div className="hero banner-image">
                <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
                    <img
                        src={chair}
                        className="w-5/12 rounded-lg shadow-2xl"
                        alt='dentist chair'
                    />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You Have Selected {format(selectedDate, "PP") }</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;