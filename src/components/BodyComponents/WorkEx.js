import styles from './WorkEx.module.css';
import parse from 'html-react-parser';
function WorkEx({ state, dispatch }) {

    const domParser = new DOMParser();
    let exp1 = domParser.parseFromString(state.experience1, 'text/html');
    exp1 = exp1.querySelector('ul');
    console.log(exp1);

    function handleDetailedWorkex() {
        dispatch({
            type: 'settab',
            payload: {
                activeTab: 'detailworkex'
            }
        })
    }

    return (
        <div className={styles.workexcontainer}>
            <h2 className={styles.detailedWorkex}>
                These are the high level work experience.
                <span onClick={handleDetailedWorkex}>(Find Detailed One Here)</span>
            </h2>
            <div className={styles.experience1}>
                <h4>{parse(state.experience1h)}</h4>
                <p>
                    {parse(state.experience1)}
                </p>
            </div>
            <div className={styles.experience2}>
                <h4>{parse(state.experience2h)}</h4>
                <p>
                    {parse(state.experience2)}
                </p>
            </div>
            <div className={styles.experience3}>
                <h4>{parse(state.experience3h)}</h4>
                <p>
                    {parse(state.experience3)}
                </p>
            </div>
            <div className={state.workachievements}>
                <h3>Some Work Highlights</h3>
                <p>
                    {parse(state.workachievements)}
                </p>
            </div>
        </div>
    )
}

export default WorkEx
