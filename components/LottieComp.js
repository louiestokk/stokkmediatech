'use client'

import React from 'react'
import Lottie from 'react-lottie'

const LottieComp = ({lottie,width,height}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div style={{width:'100%',overflow:'hidden'}}>
        <Lottie lottie={lottie} options={defaultOptions} height={height} width={width}></Lottie>
    </div>
  )
}

export default LottieComp