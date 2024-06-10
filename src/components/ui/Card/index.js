'use client'

// base
import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

// mui
import { Typography, Button } from '@mui/material'

// icons
import LinkedInIcon from 'public/linkedIn.svg'
import SmileIcon from 'public/smile.svg'

// styles
import styles from './Card.module.css'

const Card = ({ isMobile, data, handleConnect }) => {
  const { icon: Icon, name, workPosition, href } = data

  const [buttonState, setButtonState] = useState('default')

  const onClick = (event) => {
    event.preventDefault()

    if (buttonState === 'default') {
      setButtonState('loading')
      setTimeout(() => {
        setButtonState('thanks')
        setTimeout(() => {
          window.open(href, '_blank', 'noopener,noreferrer')
          handleConnect()
        }, 1000)
      }, 4000)
    }
  }

  const getButtonStyles = () => {
    if (buttonState === 'loading' || buttonState === 'thanks') {
      return `${styles.button} ${styles.redButton}`
    }
    return styles.button
  }

  const renderButtonContent = () => {
    if (buttonState === 'loading') {
      return (
        <div className={styles.loadingText}>
          <div className={`${styles.dot} ${styles.dot1}`} />
          <div className={`${styles.dot} ${styles.dot2}`} />
          <div className={`${styles.dot} ${styles.dot3}`} />
        </div>
      )
    }
    if (buttonState === 'thanks') {
      return (
        <>
          <Image
            priority
            width={50}
            height={50}
            src={SmileIcon}
            alt="Smile"
            className={styles.iconButton}
          />
          Thanks!
        </>
      )
    }
    return (
      <>
        <Image
          priority
          width={50}
          height={50}
          src={LinkedInIcon}
          alt="LinkedIn"
          className={styles.iconButton}
        />
        Connect
      </>
    )
  }

  return (
    <div className={styles.root}>
      {!isMobile && (
        <>
          <Image
            priority
            width={150}
            height={150}
            src={Icon}
            alt="Avatar"
            className={styles.avatar}
          />
          <Typography className={styles.name}>{name}</Typography>
          <div
            dangerouslySetInnerHTML={{ __html: workPosition }}
            className={styles.workPosition}
          />
        </>
      )}
      {isMobile && (
        <div className={styles.flexContainer}>
          <Image
            priority
            width={150}
            height={150}
            src={Icon}
            alt="Avatar"
            className={styles.avatar}
          />
          <div>
            <Typography className={styles.name}>{name}</Typography>
            <div
              dangerouslySetInnerHTML={{ __html: workPosition }}
              className={styles.workPosition}
            />
          </div>
        </div>
      )}
      <Button
        aria-label="Connect"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        disabled={buttonState !== 'default'}
        className={getButtonStyles()}
        onClick={onClick}
      >
        {renderButtonContent()}
      </Button>
    </div>
  )
}

Card.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Object),
  handleConnect: PropTypes.func.isRequired
}

export default Card
