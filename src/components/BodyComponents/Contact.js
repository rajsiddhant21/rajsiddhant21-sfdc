import styles from './Contact.module.css'
import { Email } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { OpenInNew } from '@mui/icons-material'
function Contact() {
    return (
        <div className="body-content">
            <div className={styles.contact}>
                <div>Siddhant Raj</div>
                <div className={styles.phone}>+91 6370820996 <Phone /></div>
                <div className={styles.phone}>+91 9434564159 <Phone /></div>
                <div className={styles.linkdein}><a href="https://www.linkedin.com/in/siddhant-raj-897990181/" target='_blank'>Siddhant Raj <OpenInNew /></a></div>
                <div className={styles.email}><a href="mailto:sid1707raj@gmail.com">sid1707raj@gmail.com <Email /></a></div>
            </div>

        </div>
    )
}

export default Contact
