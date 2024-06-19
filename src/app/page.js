'use client'
import LargeBlock from "@/components/LargeBlock";
import SmallBlock from "@/components/SmallBlock";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import React, {useState} from "react";

export default function Home() {
  const [speed, setSpeed] = useState(0);
  const [cmi, setCMI] = useState(0);
  const [proton, setProton] = useState(0);
  const [omag, setOMag] = useState(0);
  const [loading, setLoading] = useState(false);

  const predcictApi = async () => {
    setLoading(true)
    console.log(JSON.stringify({
      speed: parseFloat(speed),
      density: parseFloat(proton),
      bt: parseFloat(cmi),
      bz: parseFloat(omag),
    }))
    try {
      const response = await fetch("https://heol-ia.taldir.me/api/v1/predict", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          speed: parseFloat(speed),
          density: parseFloat(proton),
          bt: parseFloat(cmi),
          bz: parseFloat(omag),
        }),
      });
      const data = await response.text()
      console.log(data);
      setLoading(false)
    } catch (e) {
      console.error(e);
      setLoading(false)
    }

  }

  return (
    <>
    <Image
        src="/logoIA.png"
        alt="Logo IA"
        width={300}
        height={300}
    />
    <div className="flex justify-center items-center flex-col mt-20">
      <div className="flex justify-center">
        <div className="flex flex-row justify-center items-center gap-5">
          <div className="flex flex-col gap-2">
            <SmallBlock type={"wind"} 
              onSpeedChange={setSpeed}
            />
            <SmallBlock type={"KP"} onCMIChange={setCMI}/>
          </div>
          <LargeBlock isLoading={loading} />
          <div className="flex flex-col gap-2">
            <SmallBlock type={"proton"} onProtonChange={setProton} />
            <SmallBlock type={"omag"} onOMagChange={setOMag}/>
          </div>
        </div>      
      </div>
      <div className="flex flex-row mt-24 items-center gap-2">
       <button onClick={predcictApi} className="flex items-center hover:bg-red-700 justify-center w-10 h-10 bg-red-500 text-white rounded-lg">
        <FaCheck />
       </button>
      </div>
    </div>

    </>
  );
}
