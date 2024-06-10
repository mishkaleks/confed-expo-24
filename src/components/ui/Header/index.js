'use client'

// base
import PropTypes from 'prop-types'
import Image from 'next/image'

// mui
import { Typography } from '@mui/material'

// icons
import CapptooIcon from 'public/capptoo.svg'
import ScreverIcon from 'public/screver.svg'

// styles
import styles from './Header.module.css'

const Header = ({ isMobile }) => {
  const headerElement = <Typography className={styles.confedExpo}>ConfedExpo 2024</Typography>

  return (
    <div className={styles.header}>
      {!isMobile && headerElement}
      <div className={styles.logoContainer}>
        <Image
          priority
          width={230}
          height={38}
          src={CapptooIcon}
          alt="Capptoo"
          className={styles.capptooIcon}
        />
        <Image
          priority
          width={160}
          height={50}
          src={ScreverIcon}
          alt="Screver"
          className={styles.screverIcon}
        />
      </div>
      {isMobile && headerElement}
    </div>
  )
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

export default Header
