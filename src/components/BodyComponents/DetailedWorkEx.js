import DetailedWorkExSolo from "./DetailWorkExSolo"
function DetailedWorkEx({ state }) {
    // let ht = 0.4 * (window.innerHeight)
    return (
        <>
        {state?.projects?.map((x)=>{
            return <DetailedWorkExSolo state={x}/>
        })}
        </>
    )
}

export default DetailedWorkEx

