'use client'

import dynamic from 'next/dynamic'
import React, { useState, useEffect, useRef } from 'react'
const PopularaButtons = dynamic(() => import('./PopularaButtons'), {
  ssr: false,
  loading: () => <div style={{height: '650px', background: '#a100ff'}}></div> // placeholder
})

const LazyPopBtns = () => {
     const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // unobserve efter första gången
        }
      },
      {
        rootMargin: '200px' // trigga innan den faktiskt syns
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
     <div ref={ref}>
      {isVisible && <PopularaButtons />}
    </div>
  )
}

export default LazyPopBtns