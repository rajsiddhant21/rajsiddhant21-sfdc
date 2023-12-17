import styles from './Body.module.css'
import Home from './BodyComponents/Home'
import AboutMe from './BodyComponents/AboutMe';
import SkillsUsed from './BodyComponents/SkillsUsed.js';
import Education from './BodyComponents/Education.js';
import Contact from './BodyComponents/Contact.js';
import WorkEx from './BodyComponents/WorkEx.js';
function Body({ state, dispatch }) {
    return (
        <div className={styles.body}>
            {state.activeTab === 'home' && <Home state={state} dispatch={dispatch} />}
            {state.activeTab === 'aboutme' && <AboutMe />}
            {state.activeTab === 'skillsused' && <SkillsUsed />}
            {state.activeTab === 'education' && <Education />}
            {state.activeTab === 'contact' && <Contact />}
            {state.activeTab === 'workex' && <WorkEx />}
        </div>
    )
}

export default Body
