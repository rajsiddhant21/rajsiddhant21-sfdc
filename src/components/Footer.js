import { useState } from 'react'
import styles from './Footer.module.css'

function CertModal({onclickcert}){
    return <>
     <div className={styles.certModal} onClick={()=>{onclickcert()}}>
       <div>I haven't got a Salesforce certification, but it hasn't stopped me from doing my job well. I handle user stories which requires coding and sfdc OOB tasks effectively. When I'm not busy, I help out other teams with tasks like writing batch classes or updating old code or converting vf pages to lwc (few examples). I also like to work on React or NodeJS and practice oop concept. I'll think about getting certified later when I feel ready specially with the mcq questions, but for now, not having it doesn't affect how well I get things done.</div> 
     </div>
    </>
}

function Footer() {

    const[cert,openCert] = useState(false)

    function handleNoCert(){
        openCert(!cert)
    }
    return (
        <>
        <div className={styles.footer}>
            <p onClick={handleNoCert}>Why I have no certifications ?</p>
        </div>
        {cert && <CertModal onclickcert={handleNoCert}/>}
        </>
    )
}



export default Footer
