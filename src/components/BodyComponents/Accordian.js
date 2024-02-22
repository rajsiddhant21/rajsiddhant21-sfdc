import { useState } from 'react';
import styles from './Accordian.module.css';
import { Remove,Add } from '@mui/icons-material';
function Accordian({children,heading,position}){
    console.log(heading,position)
    const [open,setOpen] = useState(position === 0);

    function handleAccordianChange(){
        setOpen(!open);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p>{heading}</p>
                    <p className={styles.downArrow} onClick={handleAccordianChange}>
                        {open?<Remove/>:<Add></Add>}
                        </p>
                </div>
                {open && <div>
                     {children}
                </div>}
            </div>
        </>
    )
}

export default Accordian;