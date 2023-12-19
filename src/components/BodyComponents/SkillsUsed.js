import { useEffect, useRef, useState } from 'react'
import styles from './SkillsUsed.module.css'
function SkillsUsed({ state }) {
    const scrollHolder = useRef(null);
    const scrollDropper = useRef(null);
    const skillsLine = useRef(null);
    const marginManager = useRef(null);
    const skillView = useRef(null);
    const [clientX, setclientx] = useState(0);
    const [maxscroll, setmaxscroll] = useState(0);
    const [marginOffset, setmarginOffset] = useState(0);
    const [widthOffset, setwidthOffset] = useState(0);
    const [scrollActive, setscrollActive] = useState(0);
    const [IntervalId, setIntervalid] = useState(null);
    function handleScrollDrop(e) {
        e.preventDefault();
        // console.log('target')
        // console.log(e.target)
        // console.log(scrollHolder)
        // //   scrollDropper?.current?.appendChild(scrollHolder.current)
        // console.log(scrollDropper?.current?.classList)
        // scrollDropper?.current?.classList.add(styles.paradyCircle);
        // scrollHolder?.current?.classList.add(styles.hide)
    }
    function handleDragStart(e) {
        //e.preventDefault();
    }
    function handleDragEnd(e) {
        //  console.log('end', scrollActive)
    }
    function handleScrollDrag(e) {
        e?.preventDefault();
        scrollHolder?.current?.classList?.add(styles.absolute);
        setclientx((xlientx) => {
            return e.clientX;
        });

        setscrollActive((current) => {
            if (clientX - marginOffset <= 0) {
                return 0;
            }
            return clientX - marginOffset;
        })
    }
    function handleDragover(e) {
        e.preventDefault();
    }
    function handleViewSkill() {
        if (IntervalId) {
            return;
        }
        const intID = setInterval(() => {
            console.log('going')
            setscrollActive((x) => x + 1);
        }, 1);
        setIntervalid(intID);
    }
    useEffect(function () {
        setmarginOffset(parseInt(getComputedStyle(marginManager.current).marginLeft));
    }, [marginManager]);

    useEffect(function () {
        setwidthOffset(parseInt(getComputedStyle(marginManager.current).width))
    }, [marginManager])

    useEffect(function () {
        const ele = scrollHolder.current;
        if (scrollActive >= maxscroll) {
            clearInterval(IntervalId);
            return
        }
        const Pleft = (scrollActive / widthOffset) * 100;
        ele.style.left = Pleft + '%';
        const skillLine = skillsLine.current;
        skillLine.style.left = Pleft + '%';
        skillLine.style.width = (85 - Pleft) + '%';

    }, [scrollActive, maxscroll, widthOffset, IntervalId])

    useEffect(function () {
        setmaxscroll(scrollDropper.current.getBoundingClientRect().left - marginOffset);
    }, [scrollDropper, marginOffset])

    return (
        <div className="body-content">
            <div className={styles.viewSkillBtn}>
                <span onClick={handleViewSkill}>View Skill</span>
            </div>
            <div className={styles.scrollContainer + ' ' + styles.width} ref={marginManager}>
                <div ref={scrollHolder} className={styles.scrollholder + ' ' + styles.inlineBlock} draggable="true"
                    onDragStart={handleDragStart}
                    onDrag={handleScrollDrag}
                    onDragEnd={handleDragEnd}
                    id='scollLocator'>
                    <span className={styles.line}></span><span className={styles.circle}></span>
                </div>
                <div className={styles.dummy + ' ' + styles.inlineBlock}></div>
                <div className={styles.scrollholderstop + ' ' + styles.inlineBlock} onDrop={handleScrollDrop} onDragOver={handleDragover} ref={scrollDropper}>
                    <span className={styles.dot}></span>
                </div>
            </div>
            <div className={styles.skillssection + ' ' + styles.width}>
                <div className={styles.inlineBlock + ' '} ref={skillView}>
                    <SkillsList state={state} />
                </div>
                <div className={styles.skillsline + ' ' + styles.inlineBlock} ref={skillsLine}></div>
            </div>
        </div>
    )
}

function SkillsList({ state }) {
    console.log(state.skills)
    return (
        <div>
            {state?.skills?.map(x => {
                return <Skill key={x} name={x} />
            })}
        </div>
    )
}


function Skill({ name }) {
    return (
        <p>{name}</p>
    )
}

export default SkillsUsed
