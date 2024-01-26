"use client";
import { useEffect, useState, useRef } from "react";
import Nav from "../nav";


export default function Timer() {
  const [value1, setvalue1] = useState(0);
  const [value2, setvalue2] = useState(0);
  const [value3, setvalue3] = useState(0);
  const [value4, setvalue4] = useState(0);
  const [value5, setvalue5] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  let hh = value1
  let mm = value2 * 10 + value3
  let ss = value4 * 10 + value5

  let timer: NodeJS.Timeout;

  useEffect(() => {

    if (isPlaying) {
      timer = setInterval(() => {
        if (ss > 0) {
          ss--;
        } else if (mm > 0) {
          ss = 59;
          mm--;
        } else if (hh > 0) {
          mm = 59;
          ss = 59;
          hh--;
        } else {
          const audio = audioRef.current;
          if (audio) {
            audio.currentTime = 3;
            audio.play();
          }
          setIsPlaying(false);
        }
        setvalue5(ss % 10);
        setvalue4(Math.floor(ss / 10));
        setvalue3(mm % 10);
        setvalue2(Math.floor(mm / 10));
        setvalue1(hh);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlaying, hh, mm, ss]);


  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  const handleScroll1 = (e: { deltaY: number; }) => {
    if (isPlaying) return;
    if (e.deltaY < 0) {
      setvalue1(prevvalue1 => prevvalue1 < 9 ? prevvalue1 + 1 : 9);
    } else {
      setvalue1(prevvalue1 => prevvalue1 > 0 ? prevvalue1 - 1 : 0);
    }
  };

  const handleScroll2 = (e: { deltaY: number; }) => {
    if (isPlaying) return;
    if (e.deltaY < 0) {
      setvalue2(prevvalue2 => prevvalue2 < 5 ? prevvalue2 + 1 : 5);
    } else {
      setvalue2(prevvalue2 => prevvalue2 > 0 ? prevvalue2 - 1 : 0);
    }
  };

  const handleScroll3 = (e: { deltaY: number; }) => {
    if (isPlaying) return;
    if (e.deltaY < 0) {
      setvalue3(prevvalue3 => prevvalue3 < 9 ? prevvalue3 + 1 : 9);
    } else {
      setvalue3(prevvalue3 => prevvalue3 > 0 ? prevvalue3 - 1 : 0);
    }
  };

  const handleScroll4 = (e: { deltaY: number; }) => {
    if (isPlaying) return;
    if (e.deltaY < 0) {
      setvalue4(prevvalue4 => prevvalue4 < 5 ? prevvalue4 + 1 : 5);
    } else {
      setvalue4(prevvalue4 => prevvalue4 > 0 ? prevvalue4 - 1 : 0);
    }
  };

  const handleScroll5 = (e: { deltaY: number; }) => {
    if (isPlaying) return;
    if (e.deltaY < 0) {
      setvalue5(prevvalue5 => prevvalue5 < 9 ? prevvalue5 + 1 : 9);
    } else {
      setvalue5(prevvalue5 => prevvalue5 > 0 ? prevvalue5 - 1 : 0);
    }
  };

  return (
    <main className="relative">
      <Nav />
      <div className="p-16 h-screen flex justify-center items-center">
        <div className="bg-gray-200 w-4/5 h-4/5 p-8 rounded-xl flex justify-center items-center shadow-card-shadow">
          <div className="relative w-52 h-3/5 bg-gray-300 rounded-xl mr-16 shadow-card-shadow">
            {/* colon */}
            <div className="absolute flex flex-col justify-center items-center h-16 left-52 top-1/3">
              <span className="block w-5 h-5 bg-gray-300 rounded-full"></span>
              <span className="block w-5 h-5 bg-gray-300 rounded-full mt-5"></span>
            </div>
            {/* Number */}
            <div className="flex justify-center items-center h-full" onWheel={handleScroll1} >
              <span className="text-white text-9xl text_shadow">{value1}</span>
            </div>
          </div>
          <div className="w-52 h-3/5 bg-gray-300 rounded-xl mr-2 shadow-card-shadow">
            {/* Number */}
            <div className="flex justify-center items-center h-full" onWheel={handleScroll2} >
              <span className="text-white text-9xl text_shadow">{value2}</span>
            </div>
          </div>
          <div className="relative w-52 h-3/5 bg-gray-300 rounded-xl mr-16 shadow-card-shadow">
            {/* colon */}
            <div className="absolute flex flex-col justify-center items-center h-16 left-52 top-1/3">
              <span className="block w-5 h-5 bg-gray-300 rounded-full"></span>
              <span className="block w-5 h-5 bg-gray-300 rounded-full mt-5"></span>
            </div>
            {/* Number */}
            <div className="flex justify-center items-center h-full" onWheel={handleScroll3}>
              <span className="text-white text-9xl text_shadow">{value3}</span>
            </div>
          </div>
          <div className="w-52 h-3/5 bg-gray-300 rounded-xl mr-2 shadow-card-shadow">
            {/* Number */}
            <div className="flex justify-center items-center h-full" onWheel={handleScroll4}>
              <span className="text-white text-9xl text_shadow">{value4}</span>
            </div>
          </div>
          <div className="w-52 h-3/5 bg-gray-300 rounded-xl shadow-card-shadow">
            {/* Number */}
            <div className="flex justify-center items-center h-full" onWheel={handleScroll5}>
              <span className="text-white text-9xl text_shadow">{value5}</span>
            </div>
          </div>

          {/* Button */}
          <div className="absolute bottom-12">
            <button onClick={handleClick} className="bg-gray-300 hover:bg-gray-200 text-red-700 font-bold py-2 px-4 rounded-xl flex justify-center items-center">
              {isPlaying ? (
                // Pause icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                // Play icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>
          <audio ref={audioRef} id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
      </div>
    </main>
  );
}
