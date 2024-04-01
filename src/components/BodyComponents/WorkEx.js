import { useEffect, useRef, useState } from 'react';
import styles from './WorkEx.module.css';
import parse from 'html-react-parser';
function WorkEx({ state, dispatch }) {

    const domParser = new DOMParser();
    let exp1 = domParser.parseFromString(state.experience1, 'text/html');
    exp1 = exp1.querySelector('ul');
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
            <div className={state.workachievements}>
                <h3>Some Work Highlights</h3>
                <p>
                    <ListAchievements state={state} />
                </p>
            </div>
            <div className={styles.experience1}>
                <HighLevelTile state={state} keyexp="experience1" keyexph="experience1h" />
            </div>
            <div className={styles.experience2}>
                <HighLevelTile state={state} keyexp="experience2" keyexph="experience2h" />
            </div>
            <div className={styles.experience3}>
                <HighLevelTile state={state} keyexp="experience3" keyexph="experience3h" />
            </div>
        </div>
    )
}

function HighLevelTile({ state, keyexp, keyexph }) {

    const headerSplit = state[keyexph].split('\r\n');
    const datesExp = useRef(null);
    useEffect(function () {
        let timerid = null;
        let localScroll = -1;
        const scrollHandler = () => {
            //    console.log(timerid)

            clearTimeout(timerid)
            timerid = setTimeout(() => {
                //      console.log(localScroll, window.scrollY);
                if (localScroll < window.scrollY) {
                    //styleDates.transform = `translateY(${20}px)`;
                    if (datesExp.current)
                        datesExp.current.style.transform = `translateY(${25}px)`;
                } else {
                    if (datesExp.current)
                        datesExp.current.style.transform = `translateY(-${35}px)`;
                }
                localScroll = window.scrollY;
            }, 10)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(function () {
        return () => {

        }
    })

    return (
        <div className={styles.tile}>
            <h4>{headerSplit[0]}</h4>
            <div className={styles.desc}>
                <div>{parse(state[keyexp])}</div>
                <div ref={datesExp} className={styles.dateExp}>{headerSplit[2]}</div>
            </div>
        </div>
    )
}

function ListAchievements({ state }) {
    const listAch = state.workachievements.split(';;')
    return (
        <div>
            {listAch.map(x => {
                return <Achievements ach={x} />
            })}
        </div>
    )
}

function Achievements({ ach }) {
    return (
        <>
            <p className={styles.achInd}>{ach}</p>
        </>
    )
}

export default WorkEx
