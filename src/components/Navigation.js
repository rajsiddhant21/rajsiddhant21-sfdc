import styles from './Navigation.module.css';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import { useEffect, useState } from 'react';
function Navigation({ state, dispatch }) {
    // const classW
    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileMenuClass, setMobileMenuClass] = useState(styles.lines);
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

        if (mobileMenu === true) {
            setMobileMenu(false);
            setMobileMenuClass(styles.lines)
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

        setMobileMenuClass((curr) => {
            if (curr === styles.cross) {
                return styles.lines
            } else if (curr === styles.lines) {
                return styles.cross;
            }
        })
    }

    useEffect(function () {

    }, [setMobileMenuClass, mobileMenuClass])

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
                <div className={styles.menuClose + ' ' + mobileMenuClass} onClick={handleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {mobileMenu && <div className={styles.menuOpen}>
                    {<MobileNavItemns onhandleTabChange={handleTabChange} onhandleDownloadCv={handleDownloadCv} state={state} />}
                </div>}
            </div>
        </>
    )
}

function MobileNavItemns({ onhandleTabChange, state, onhandleDownloadCv }) {
    return (
        <>
            <ul onClick={onhandleTabChange}>
                <li data-tabname="home" className={state.activeTab === 'home' ? styles.active : ''}>Home</li>
                {/* <li data-tabname="aboutme" className={state.activeTab === 'aboutme' ? styles.active : ''}>About Me</li> */}
                <li data-tabname="workex" className={state.activeTab === 'workex' ? styles.active : ''}>Work Ex</li>
                <li data-tabname="skillsused" className={state.activeTab === 'skillsused' ? styles.active : ''}>Skills Used</li>
                {/* <li data-tabname="education" className={state.activeTab === 'education' ? styles.active : ''}>Education</li> */}
                <li data-tabname="contact" className={state.activeTab === 'contact' ? styles.active : ''}>Contact</li>
            </ul>
            <span className={styles.downloadSpan} onClick={onhandleDownloadCv}><Download /><span>Download</span></span>
        </>
    )
}

export default Navigation
