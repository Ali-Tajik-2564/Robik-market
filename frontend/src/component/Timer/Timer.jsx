import React, { useState } from 'react'

export default function Timer({ date }) {
    let currentDate = Date.now();
    let futureDate = new Date(date).getTime();
    const persianNumber = new Intl.NumberFormat("fa");
    const [leftDays, setDays] = useState(
        persianNumber.format(Math.floor((futureDate - currentDate) / 86_400_000))
    );
    const [leftHours, setHours] = useState(
        persianNumber.format(
            Math.floor(((futureDate - currentDate) % 86_400_000) / 3_600_000)
        )
    );
    const [leftMinutes, setMinutes] = useState(
        persianNumber.format(
            Math.floor(
                (((futureDate - currentDate) % 86_400_000) % 3_600_000) / 60_000
            )
        )
    );
    const [leftSeconds, setSeconds] = useState(
        persianNumber.format(
            Math.floor(
                ((((futureDate - currentDate) % 86_400_000) % 3_600_000) % 60_000) /
                1_000
            )
        )
    );
    setInterval(() => {
        currentDate = Date.now();

        setSeconds((prevSeconds) => {
            return (prevSeconds = persianNumber.format(
                Math.floor(
                    ((((futureDate - currentDate) % 86_400_000) % 3_600_000) % 60_000) /
                    1_000
                )
            ));
        });

        setMinutes((prevMinutes) => {
            return (prevMinutes = persianNumber.format(
                Math.floor(
                    (((futureDate - currentDate) % 86_400_000) % 3_600_000) / 60_000
                )
            ));
        });
        setHours((prevHour) => {
            return (prevHour = persianNumber.format(
                Math.floor(((futureDate - currentDate) % 86_400_000) / 3_600_000)
            ));
        });

        setDays((prevDay) => {
            return (prevDay = persianNumber.format(
                Math.floor((futureDate - currentDate) / 86_400_000)
            ));
        });
    }, 1000);
    return (
        <div className="w-4/5 h-20 flex flex-row flex-nowrap justify-start items-center mr-3 space-x-2 text-lg  mt-1 xl:mt-2 lg:text-[sm]  md:mt-2">
            <div className=" flex flex-col justify-evenly items-center">
                <span className='text-white text-xl font-bold  bg-yellow-400 rounded-1 w-14 h-11  flex items-center justify-center'>{leftDays}</span>
                <span className='block text-sm  '>روز</span>
            </div>
            <div className=" flex flex-col justify-evenly items-center">
                <span className='text-white text-xl font-bold  bg-yellow-400 rounded-1 w-14 h-11  flex items-center justify-center'>  {leftHours}</span>
                <span className='block text-sm  '>ساعت</span>
            </div>
            <div className=" flex flex-col justify-evenly items-center">
                <span className='text-white text-xl font-bold  bg-yellow-400 rounded-1  w-14 h-11 flex items-center justify-center'> {leftMinutes}</span>
                <span className='block text-sm  '>دقیقه</span>
            </div>
            <div className=" flex flex-col justify-evenly items-center">

                <span className='text-white text-xl font-bold  bg-yellow-400 rounded-1  w-14 h-11 flex items-center justify-center'>{leftSeconds} </span>
                <span className='block text-sm  '>ثانیه</span>
            </div>
        </div >
    )
}
