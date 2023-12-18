import { useEffect, useRef, useState } from 'react'
import styles from './SkillsUsed.module.css'
function SkillsUsed() {
    const scrollHolder = useRef(null);
    const scrollDropper = useRef(null);
    const skillsLine = useRef(null);
    const marginManager = useRef(null);
    const [marginOffset, setmarginOffset] = useState(0);
    const [scrollActive, setscrollActive] = useState(0);
    function handleScrollDrop(e) {
        e.preventDefault();
        console.log('target')
        console.log(e.target)
        console.log(scrollHolder)
        //   scrollDropper?.current?.appendChild(scrollHolder.current)
        console.log(scrollDropper?.current?.classList)
        scrollDropper?.current?.classList.add(styles.paradyCircle);
        scrollHolder?.current?.classList.add(styles.hide)
    }
    function handleDragStart(e) {
        //e.preventDefault();
    }
    function handleDragEnd(e) {

    }
    function handleScrollDrag(e) {
        scrollHolder?.current?.classList?.add(styles.absolute);
        setscrollActive((current) => {
            console.log(e.clientX - marginOffset)
            if (e.clientX - marginOffset <= 0) {
                return 0;
            }
            return e.clientX - marginOffset;
        })
    }
    function handleDragover(e) {
        e.preventDefault();
    }
    useEffect(function () {
        console.log(getComputedStyle(marginManager.current));
        setmarginOffset(parseInt(getComputedStyle(marginManager.current).marginLeft));
    }, [marginManager])

    useEffect(function () {
        const ele = scrollHolder.current;
        ele.style.left = scrollActive + 'px';
        const skillLine = skillsLine.current;
        skillLine.style.left = scrollActive + 'px';
    }, [scrollActive])

    return (
        <div className="body-content">
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
                <div className={styles.skillsline} ref={skillsLine}></div>
            </div>
        </div>
    )
}

export default SkillsUsed
