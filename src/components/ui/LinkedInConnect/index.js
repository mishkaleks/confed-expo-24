'use client'

// base
import PropTypes from 'prop-types'

// mui
import { Typography, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// components
import Card from '@/components/ui/Card'

// constants
import { CARDS_CONTENT } from './constants'

// styles
import styles from './LinkedInConnect.module.css'

const LinkedInConnect = ({ isMobile, handleConnect, handleSkip }) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <Typography className={styles.title}>Photos & Podcasts</Typography>
        <Typography className={styles.description}>
          As we prepare your photos, why not connect with us LinkedIn?
        </Typography>
      </div>
      <div className={styles.cardContainer}>
        {CARDS_CONTENT.map((item, index) => (
          <Card
            key={`card-${index}`}
            isMobile={isMobile}
            data={item}
            handleConnect={() => handleConnect(index)}
          />
        ))}
      </div>
      <div>
        <Button
          aria-label="Skip"
          className={styles.button}
          onClick={handleSkip}
        >
          Skip this step and proceed to photos
          <ArrowForwardIcon className={styles.arrowIcon} />
        </Button>
      </div>
    </div>
  )
}

LinkedInConnect.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleConnect: PropTypes.func.isRequired,
  handleSkip: PropTypes.func.isRequired
}

export default LinkedInConnect
