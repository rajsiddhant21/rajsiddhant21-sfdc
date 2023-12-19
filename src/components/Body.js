import styles from './Body.module.css'
import Home from './BodyComponents/Home'
import AboutMe from './BodyComponents/AboutMe';
import SkillsUsed from './BodyComponents/SkillsUsed.js';
import Education from './BodyComponents/Education.js';
import Contact from './BodyComponents/Contact.js';
import WorkEx from './BodyComponents/WorkEx.js';
import DetailedWorkEx from './BodyComponents/DetailedWorkEx.js';
function Body({ state, dispatch }) {
    return (
        <div className={styles.body}>
            {state.activeTab === 'home' && <Home state={state} dispatch={dispatch} />}
            {/* {state.activeTab === 'aboutme' && <AboutMe />} */}
            {state.activeTab === 'skillsused' && <SkillsUsed state={state} />}
            {/* {state.activeTab === 'education' && <Education />} */}
            {state.activeTab === 'contact' && <Contact />}
            {state.activeTab === 'workex' && <WorkEx state={state} dispatch={dispatch} />}
            {state.activeTab === 'detailworkex' && <DetailedWorkEx state={state} />}
        </div>
    )
}

export default Body
