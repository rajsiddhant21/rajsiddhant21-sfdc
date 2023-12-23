import styles from './Navigation.module.css';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import { useState } from 'react';
function Navigation({ state, dispatch }) {
    // const classW
    const [mobileMenu, setMobileMenu] = useState(false);
    function handleTabChange(e) {
        const tabname = e?.target?.dataset?.tabname;

        if (tabname) {
            dispatch({
                type: 'settab',
                payload: {
                    activeTab: tabname
                }
            })
        }

    }
    function handleDownloadCv(e) {
        console.log(state.cvpdfurl)
        window.open(state?.cvpdfurl, '_blank')
    }

    function handleMobileMenu() {
        setMobileMenu((e) => {
            return !e;
        })
    }

    return (
        <>
            <div className={styles.navContainer}>
                <ul className={styles.nav} onClick={handleTabChange}>
                    <li data-tabname="home" className={state.activeTab === 'home' ? styles.active : ''}>Home</li>
                    {/* <li data-tabname="aboutme" className={state.activeTab === 'aboutme' ? styles.active : ''}>About Me</li> */}
                    <li data-tabname="workex" className={state.activeTab === 'workex' ? styles.active : ''}>Work Ex</li>
                    <li data-tabname="skillsused" className={state.activeTab === 'skillsused' ? styles.active : ''}>Skills Used</li>
                    {/* <li data-tabname="education" className={state.activeTab === 'education' ? styles.active : ''}>Education</li> */}
                    <li data-tabname="contact" className={state.activeTab === 'contact' ? styles.active : ''}>Contact</li>
                </ul>
                <span className={styles.downloadSpan} onClick={handleDownloadCv}><Download /><span>Download</span></span>
            </div>
            <div className={styles.navContainerMobile}>
                <div className={styles.menuClose + ' ' + (mobileMenu ? styles.cross : styles.lines)} onClick={handleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.menuOpen}>
                    {mobileMenu && 'hello'}
                </div>
            </div>
        </>
    )
}

export default Navigation
