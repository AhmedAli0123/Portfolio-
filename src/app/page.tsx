"use client"

import React from 'react'
import Main from '@/Pages/Main'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Page = () => {
  useEffect(()=>{
    AOS.init({
      easing:"ease-in-out-back",
      duration:500,
      delay:20,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh()
  },[])

  return (
    <>
      <Main />
    </>
  )
}

export default Page