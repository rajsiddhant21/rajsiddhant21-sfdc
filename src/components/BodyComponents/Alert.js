import { ArrowDownward } from '@mui/icons-material'
import styles from './Alert.module.css'
function Alert({ dispatch }) {
    function handleDismiss() {
        dispatch({
            type: 'alert',
            payload: { alert: false }
        })
    }
    return (
        <div className={styles.alert}>
            Download Pdf Version of Cv <ArrowDownward /><span onClick={handleDismiss}>&times;</span>
        </div>
    )
}

export default Alert
