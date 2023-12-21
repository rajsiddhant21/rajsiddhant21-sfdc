import { useEffect, useRef, useState } from 'react'
import styles from './SkillsUsed.module.css';
import { LinearProgress } from '@mui/material';
function SkillsUsed({ state }) {

    return (
        <div className="body-content">
            <SkillsList state={state} />
        </div>
    )
}

function SkillsList({ state }) {
    const skillsLen = state.skills.length;
    let breakPoint = -1;
    const skills1 = useRef(null);
    const otherSkillDisplay = useRef(null);

    // useEffect(function () {
    //     const canvas = document.querySelector(`canvas`);
    //     console.log(canvas)
    //     const ctx = canvas.getContext('2d');
    //     ctx.beginPath();
    //     ctx.arc(50, 50, 80, Math.PI / 2, Math.PI);
    //     ctx.stroke();
    //     ctx.beginPath();
    //     ctx.moveTo(50, 0);
    //     ctx.lineTo(200, 0);
    //     ctx.stroke();
    // }, [skills1])

    if (skillsLen & 1) {
        breakPoint = Math.ceil(skillsLen / 2) - 1;
    } else {
        breakPoint = skillsLen / 2;
    }

    function handleOtherSkillSection() {
        if (!otherSkillDisplay.current) return;
        const ele = otherSkillDisplay.current;
        console.log(ele.classList)
        if (ele.className === (styles.otherSkillsDisplay)) {
            ele.className = styles.otherSkillsDisplayActive;
        } else if (ele.className === (styles.otherSkillsDisplayActive)) {
            ele.className = styles.otherSkillsDisplay;
        }
        console.log(ele.className)
    }

    return (
        <div className={styles.skillsContainer}>
            <div className={styles.skillSet1} ref={skills1}>
                {
                    state?.skills?.map(x => {
                        return <Skill key={x.name} skill={x} />
                    })
                }
            </div>
            <div className={styles.skillPoster}>
                <div className={styles.otherSkills}>
                    <p className={styles.otherSKillsBtn} onClick={handleOtherSkillSection}>Other Used Skills</p>
                    <div className={styles.otherSkillsDisplay} ref={otherSkillDisplay}>
                        {
                            state?.otherskills?.map(x => {
                                return <OtherSkills key={x.name} skill={x} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.skillSet2}>
                {
                    state.skills.map((x, i) => {
                        if (i > breakPoint) {
                            return <Skill skill={x} key={x.name} />
                        }

                    })
                }
            </div>
        </div>
    )
}


function Skill({ skill }) {
    return (
        <div className={styles.indSkill}>
            <p>
                <span>{skill.name}</span>
                <span className={styles.progressBar}>
                    <LinearProgress variant="determinate" value={skill.value} color="inherit" />
                </span>
            </p>
        </div>
    )
}

function OtherSkills({ skill }) {
    return (
        <div className={styles.a}>
            <p>
                <span>{skill.name}</span>
                <span className={styles.progressBar}>
                    <LinearProgress variant="determinate" value={skill.value} color="inherit" />
                </span>
            </p>
        </div>
    )
}

// function PieChart({ state, breakPoint }) {

//     const canvas = useRef(null);

//     const total1 = state.skills.reduce((acc, x, i) => {
//         if (i <= breakPoint) {
//             return acc + x.value
//         } else {
//             return acc;
//         }
//     }, 0);

//     useEffect(function () {
//         if (!canvas.current) return;
//         const canva = canvas.current;
//         let ctx = canva.getContext('2d');
//         console.log(ctx)
//         let currAngle = 0
//         for (const st of state.skills) {
//             console.log(st.value, ' ', st.color)
//             let portion = (st.value / total1) * 2 * Math.PI;
//             ctx.beginPath();
//             ctx.arc(100, 100, 100, currAngle, currAngle + portion);
//             console.log('start', currAngle)
//             currAngle = currAngle + portion;
//             console.log('end', currAngle)
//             ctx.lineTo(100, 100);
//             ctx.fillStyle = st.color;
//             ctx.fill();
//             //  ctx.stroke();
//         }
//         // ctx.beginPath();
//         // ctx.moveTo(100, 100);
//         // ctx.lineTo(100, 200);
//         // ctx.stroke();
//     }, [canvas])

//     return (
//         <>
//             pi
//             <canvas height="200" width="200" ref={canvas} />
//         </>
//     )
// }

export default SkillsUsed


