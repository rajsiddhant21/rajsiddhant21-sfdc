import { useEffect } from 'react'
import styles from './DetailedWorkEx.module.css'
function DetailedWorkEx() {
    let ht = 0.7 * (window.innerHeight)
    return (
        <div className={styles.workexdetail}>
            <div className={styles.workexdesc}>
                <div className={styles.salescloud + ' ' + styles.staticHeight} style={{ height: ht + 'px' }}>
                    <div></div>
                </div>
                <div className={styles.expcloud1 + ' ' + styles.staticHeight} style={{ height: ht + 'px' }}>
                    <div></div>
                </div>
                <div className={styles.expcloud2 + ' ' + styles.staticHeight} style={{ height: ht + 'px' }}>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

function WorkExTitle() {
    return <>
        <ul>

        </ul>
    </>
}

export default DetailedWorkEx

