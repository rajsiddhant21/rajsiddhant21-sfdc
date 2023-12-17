import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import styles from './Main.module.css'
function Main({ state, dispatch }) {
    return (
        <div className={styles.maincontainer}>
            <Header state={state} dispatch={dispatch} />
            <Body state={state} dispatch={dispatch} />
            <Footer />
        </div>
    )
}

export default Main
