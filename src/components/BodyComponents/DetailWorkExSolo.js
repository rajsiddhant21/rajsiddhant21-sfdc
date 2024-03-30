import styles from './DetailWorkExSolo.module.css';
import { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { Co2Sharp } from '@mui/icons-material';
function DetailedWorkExSolo({state}){
    const numProjects = state.numProjects;
    return (
        <div className={styles.workexdetail}>
            <div className={styles.workexdesc}>
                {Array.from({length:numProjects},(xx,i)=>i+1).map((x)=>{
                    const pStr = "project"+x;
                    return (
                        <><div className={styles.salescloud + ' ' + styles.staticHeight}>
                        <div className={styles.expBgAlpha}>
                            <WorkExDesc project={pStr} state={state} />
                        </div>
                    </div></>
                    )
                })
                }
               
                {/* <div className={styles.expcloud1 + ' ' + styles.staticHeight}>
                    <div className={styles.expBgAlpha}>
                        <WorkExDesc project="project2" state={state} />
                    </div>
                </div>
                <div className={styles.expcloud2 + ' ' + styles.staticHeight}>
                    <div className={styles.expBgAlpha}>
                        <WorkExDesc project="project3" state={state} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

function WorkExDesc({ state, project }) {
    let MaxPage = 1;
    let teamkey = '';
    console.log(state);
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

export default DetailedWorkExSolo;