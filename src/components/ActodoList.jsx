import { useState } from "react";
import AddForm from "./AddForm"
import ManageActivities from "./ManageActivities"


const ActodoList = (props) => {
    
    return (
        <div className="actodoList grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
           <AddForm actvitiesArr={props.actvitiesArr} setActivityArr={props.setActivityArr} />
           <ManageActivities actvitiesArr={props.actvitiesArr} setActivityArr={props.setActivityArr}/>
        </div>
    );
}



export default ActodoList;