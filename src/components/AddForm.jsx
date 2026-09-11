import { useState } from "react";
const AddFrom = (props) => {
    const actvitiesArr = props.actvitiesArr;
    const setActivityArr = props.setActivityArr;
    const [newActivity, setNewActivity] = useState('');
    const handleChange = (event) => {
        setNewActivity(event.target.value)
    }

    const addNewActivity = () => {
        if (newActivity !== '') {
            setActivityArr([
                ...actvitiesArr,
                {
                    id: actvitiesArr.length + 1,
                    activity: newActivity,
                    status: 'pending'
                }
            ])
        }else{
            alert('Enter activity..')
        }

        setNewActivity('')
    }


    return (
        <div className="bg-amber-100 p-5 md:p-10 mt-5 rounded">
            <h1 className="text-lg font-semibold py-3">Today's Activity</h1>
            <div className="flex flex-wrap gap-5">
                <input type="text" value={newActivity} placeholder="Enter your activity.." onChange={handleChange} className="border border-black px-5 py-2 mr-2 rounded" required></input>
                <button className="bg-black text-white px-5 py-2 rounded cursor-pointer" onClick={addNewActivity}>Add</button>

            </div>

        </div>
    )
}





export default AddFrom;