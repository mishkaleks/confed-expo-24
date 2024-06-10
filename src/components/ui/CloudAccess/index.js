'use client'

// mui
import { Typography, Link } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// styles
import styles from './CloudAccess.module.css'

const CloudAccess = () => {
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <Typography className={styles.title}>Thanks for being with us!</Typography>
        <Typography component="div" className={styles.description}>
          Access your photos and podcasts in our cloud!
        </Typography>
        <Typography component="div" className={styles.description}>
          Use #voiceofpharma hashtag to connect to our other’s guests!
        </Typography>
      </div>
      <div className={styles.buttonContainer}>
        <Link
          href="#"
          aria-label="Go to photos"
          className={styles.linkButton}
        >
          Go to photos
          <ArrowForwardIcon className={styles.arrowIcon} />
        </Link>
        <Link
          href="#"
          aria-label="Go to podcasts"
          className={styles.linkButton}
        >
          Go to podcasts
          <ArrowForwardIcon className={styles.arrowIcon} />
        </Link>
      </div>
    </div>
  )
}

export default CloudAccess
