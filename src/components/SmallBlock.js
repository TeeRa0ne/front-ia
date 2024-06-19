'use client'
import React, {useState} from 'react';
import { LuWind } from "react-icons/lu";
import { PiTargetDuotone } from "react-icons/pi";
import { TbAtom2 } from "react-icons/tb";
import { TbMagnetic } from "react-icons/tb";

const SmallBlock = ({type, onSpeedChange, onCMIChange, onProtonChange, onOMagChange}) => {

  const [Speed, setSpeed] = useState(0)
  const [CMI, setCMI] = useState(0)
  const [Proton, setProton] = useState(0)
  const [OMag, setOMag] = useState(0)

  const handleSpeedChange = (e) => {
    const value = e.target.value;
    setSpeed(value);
    onSpeedChange(value);
  };

  const handleCMIChange = (e) => {
    const value = e.target.value;
    setCMI(value);
    onCMIChange(value);
  };

  const handleProtonChange = (e) => {
    const value = e.target.value;
    setProton(value);
    onProtonChange(value);
  };

  const handleOMagChange = (e) => {
    const value = e.target.value;
    setOMag(value);
    onOMagChange(value);
  };

  return (
    <div className="w-64 h-40 bg-gradient-to-br from-blue-500 to-blue-200 rounded-lg flex flex-col items-center justify-center shadow-lg p-4">
      {
        type === 'wind' ? (
          <>
            <div className="mb-4 flex flex-row items-center gap-2">
              <LuWind className="text-white text-6xl" />
              <p className="text-white text-2xl font-bold">Vent</p>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                <input onChange={handleSpeedChange} maxLength={3} className='w-24 text-4xl border-none bg-transparent text-white text-1xl underline underline-offset-8 decoration-8 decoration-indigo-500 text-center font-bold' />
                <div className='w-24 h-1 bg-indigo-500 rounded-lg'></div>
              </div>
              <p className="text-white text-4xl font-bold">km/s</p>
            </div>
          </>
        ) : type === 'KP' ? (
          <>
            <div className="mb-4 flex flex-row items-center gap-1">
              <PiTargetDuotone className="text-white text-6xl" />
              <p className="text-white text-2xl font-bold">CMI</p>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                  <input onChange={handleCMIChange} maxLength={4} className='w-20 text-4xl border-none bg-transparent text-white underline underline-offset-8 decoration-8 decoration-indigo-500 text-center font-bold' />
                  <div className='w-20 h-1 bg-indigo-500 rounded-lg'></div>
              </div>
              <p className="text-white text-4xl font-bold"> nT</p>
            </div>
          </>
        ) : type === 'proton' ? (
          <>
            <div className="mb-4 flex flex-row items-center gap-1">
              <TbAtom2 className="text-white text-6xl" />
              <p className="text-white text-2xl font-bold">Proton</p>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                <input onChange={handleProtonChange} maxLength={4} className='w-20 text-4xl border-none bg-transparent text-white underline underline-offset-8 decoration-8 decoration-indigo-500 text-center font-bold' />
                <div className='w-20 h-1 bg-indigo-500 rounded-lg'></div>
              </div>
              <p className="text-white text-4xl font-bold">cm<sup>3</sup></p>
            </div>         
          </>
        ) : type === "omag" ? (
          <>
            <div className="mb-4 flex flex-row items-center gap-1">
              <TbMagnetic className="text-white text-6xl" />
              <p className="text-white text-2xl font-bold">OMag</p>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                  <input onChange={handleOMagChange} maxLength={4} className='w-20 text-4xl border-none bg-transparent text-white underline underline-offset-8 decoration-8 decoration-indigo-500 text-center font-bold' />
                  <div className='w-20 h-1 bg-indigo-500 rounded-lg'></div>
              </div>
              <p className="text-white text-4xl font-bold"> nT</p>
            </div>
          </>
        ) : (
          <></> 
        )
      }
    </div>
  );
};

export default SmallBlock;