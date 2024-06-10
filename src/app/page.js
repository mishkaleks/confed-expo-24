'use client'

// base
import { useState } from 'react'
import Image from 'next/image'

// mui
import useMediaQuery from '@mui/material/useMediaQuery'

// components
import Header from '@/components/ui/Header'
import LinkedInConnect from '@/components/ui/LinkedInConnect'
import CloudAccess from '@/components/ui/CloudAccess'

// images
import Figure from 'public/figure.png'

// styles
import styles from './page.module.css'

export default function Root() {
  const isMobile = useMediaQuery('(max-width:767px)')

  const [showCloudAccess, setShowCloudAccess] = useState(false)
  const [clickedCards, setClickedCards] = useState([])

  const handleConnect = (index) => {
    setClickedCards((prevClickedCards) => {
      const newClickedCards = [...prevClickedCards]

      if (!newClickedCards.includes(index)) {
        newClickedCards.push(index)
      }

      if (newClickedCards.length >= 2) {
        setShowCloudAccess(true)
      }

      return newClickedCards
    })
  }

  const handleSkip = () => setShowCloudAccess(true)

  return (
    <main className={styles.main}>
      <Image
        priority
        className={styles.figure}
        src={Figure}
        alt="Figure"
      />
      <Header isMobile={isMobile} />
      {showCloudAccess
        ? <CloudAccess />
        : (
          <LinkedInConnect
            isMobile={isMobile}
            handleConnect={handleConnect}
            handleSkip={handleSkip}
          />
        )
      }
    </main>
  )
}
