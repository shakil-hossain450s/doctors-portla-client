import React from 'react';
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


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
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;