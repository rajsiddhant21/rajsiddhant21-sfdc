import { ArrowRight, OpenInNew } from '@mui/icons-material'
import styles from './Home.module.css';
import { useEffect } from 'react';
function Home({ state, dispatch }) {

    useEffect(function () {

    }, [])

    function workEx() {
        dispatch({
            type: 'settab',
            payload: {
                activeTab: 'workex'
            }
        })
    }

    function handleEducationScroll(e) {
        console.log(e)
    }

    return (
        <div className={styles.bodyContent}>
            <div className={styles.homeHeader}>
                <div>
                    <h3>A little about myself!</h3>
                    <span className={styles.intro}>
                        {state.intro}
                    </span>
                </div>
                <div className={styles.trailhead}>
                    <h3>My TrailHead profile</h3>
                    <ul>
                        <li><a href={state.trailheadprofile}>Siddhant Raj <OpenInNew /></a> </li>
                        <li>Badges : {state.badges}</li>
                        <li>Points : {state.points}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.homeWorkEx}>
                <div>
                    <p>Accenture:</p>
                    <p>{state.accenture}</p>
                    <div className={styles.detailHeadingMobile}>
                        <p onClick={workEx}><span>Detailed Work Ex.</span> <ArrowRight /></p>
                    </div>
                </div>
                <div className={styles.detailHeading}>
                    <p onClick={workEx}><span>Detailed Work Ex.</span> <ArrowRight /></p>
                </div>
            </div>
            <div className={styles.relavite + ' ' + styles.educationMain} >
                <div className={styles.college + ' ' + styles.sticky}>
                    <h2>Education - College ({state?.college?.start} - {state?.college?.end})</h2>
                    <p>{state.college?.stream}</p>
                    <p>{state.college?.score}</p>
                    <p>{state.college?.name}</p>
                    <p>{state.college?.location}</p>
                </div>
                <div className={styles.school + ' ' + styles.sticky}>
                    <h2>Education - Intermidiate ({state?.school?.start} - {state?.school?.end})</h2>
                    <p>{state.school?.stream}</p>
                    <p>{state.school?.score}</p>
                    <p>{state.school?.name}</p>
                    <p>{state.school?.location}</p>
                </div>
                <div className={styles.schoolsmall + ' ' + styles.sticky}>
                    <h2>Education - Schooling ({state?.schoolsmall?.start} - {state?.schoolsmall?.end})</h2>
                    <p>{state.schoolsmall?.stream}</p>
                    <p>{state.schoolsmall?.score}</p>
                    <p>{state.schoolsmall?.name}</p>
                    <p>{state.schoolsmall?.location}</p>
                </div>
            </div>
            <div style={{ height: '100px' }}>

                Thankewww

            </div>
        </div >
    )
}

export default Home
