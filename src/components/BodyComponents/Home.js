import { ArrowRight } from '@mui/icons-material'
import styles from './Home.module.css'
function Home({ state }) {
    return (
        <div className={styles.bodyContent}>
            <div className={styles.homeHeader}>
                <div>
                    <h3>A little about myself!</h3>
                    <span className={styles.intro}>
                        {state.intro}
                    </span>
                </div>
                <div>
                    <h3>My TrailHead profile</h3>
                </div>
            </div>
            <div className={styles.homeWorkEx}>
                <div>
                    <p>Accenture:</p>
                    <p>{state.accenture}</p>
                </div>
                <div>
                    <p><span>High level work experience</span> <ArrowRight /></p>
                    <p><span>A little more detail</span> <ArrowRight /></p>
                </div>
            </div>
        </div>
    )
}

export default Home
