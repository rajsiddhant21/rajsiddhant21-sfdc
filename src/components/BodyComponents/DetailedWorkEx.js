import DetailedWorkExSolo from "./DetailWorkExSolo";
import  Accordion  from "./Accordian";
function DetailedWorkEx({ state }) {
    // let ht = 0.4 * (window.innerHeight)
    return (
        <>
        {state?.projects?.map((x)=>{
            return <>
             <div style={{margin:'10px'}}>
                 <Accordion heading={x.name} position={x.index}>
                    <DetailedWorkExSolo state={x}/>
                 </Accordion>
             </div>
            </>
        })}
        </>
    )
}

export default DetailedWorkEx

