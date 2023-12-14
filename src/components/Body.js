import styles from './Body.module.css'
import Home from './BodyComponents/Home'
import AboutMe from './BodyComponents/AboutMe';
import SkillsUsed from './BodyComponents/SkillsUsed.js';
import Education from './BodyComponents/Education.js';
import Contact from './BodyComponents/Contact.js';
function Body({ state }) {
    return (
        <div className={styles.body}>
            {state.activeTab === 'home' && <Home />}
            {state.activeTab === 'aboutme' && <AboutMe />}
            {state.activeTab === 'skillsused' && <SkillsUsed />}
            {state.activeTab === 'education' && <Education />}
            {state.activeTab === 'contact' && <Contact />}
        </div>
    )
}

export default Body
