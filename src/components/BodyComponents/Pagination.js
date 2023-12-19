import styles from './Pagination.module.css'
function Pagination({ maxPage, active, setActive }) {
    let pages = [];
    for (let i = 1; i <= maxPage; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.pagination}>
            {pages.map((x) => {
                return <Page current={x} active={active} setActive={setActive} />
            })}
        </div>
    )
}

function Page({ current, active, setActive }) {
    const localClass = current === active ? styles.activePage : '';

    function handleSetPage() {
        setActive(current)
    }

    return (
        <span className={styles.page + ' ' + localClass} onClick={handleSetPage}>
            {current}
        </span>
    )
}

export default Pagination
