import { useEffect, useState } from 'react'
import styles from './DetailedWorkEx.module.css'
import Pagination from './Pagination'
function DetailedWorkEx({ state }) {
    let ht = 0.7 * (window.innerHeight)
    return (
        <div className={styles.workexdetail}>
            <div className={styles.workexdesc}>
                <div className={styles.salescloud + ' ' + styles.staticHeight} style={{ height: ht + 'px' }}>
                    <div className={styles.expBgAlpha}>
                        <WorkExDesc project="project1" state={state} />
                    </div>
                </div>
                <div className={styles.expcloud1 + ' ' + styles.staticHeight} style={{ height: ht + 'px' }}>
                    <div className={styles.expBgAlpha}>
                        <WorkExDesc project="project2" state={state} />
                    </div>
                </div>
                <div className={styles.expcloud2 + ' ' + styles.staticHeight} style={{ height: ht + 'px' }}>
                    <div className={styles.expBgAlpha}>
                        <WorkExDesc project="project3" state={state} />
                    </div>
                </div>
            </div>
        </div>
    )
}



function WorkExDesc({ state, project }) {
    let MaxPage = 1;
    let teamkey = '';
    const [activePage, setactivePage] = useState(1);
    if (state && state[project]) {
        MaxPage = Object.getOwnPropertyNames(state[project]).length
    }
    if (activePage) {
        teamkey = 'team' + activePage;
    }
    return (<>
        <div className={styles.workDesc}>
            {state && <WorkExSingle desckey={teamkey} state={state[project]} />}
        </div>
        <div>
            <Pagination maxPage={MaxPage} active={activePage} setActive={setactivePage} />
        </div>
    </>)
}

function WorkExSingle({ desckey, state }) {
    return <>
        {state[desckey]}
    </>
}

export default DetailedWorkEx

