import { useState } from "react";
import { useEffect } from "react";

const ManageActivities = (props) => {
    const actvitiesArr = props.actvitiesArr;
    const setActivityArr = props.setActivityArr;
    const [editActivity, setEditActivity] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const handleDelete = (delId) => {
        const tempArr = actvitiesArr.filter((act) => {
            if (act.id == delId) {
                return false
            } else {
                return true
            }
        })
        setActivityArr(tempArr);
    }

    const handleEdit = (editId) => {
        setModalOpen(true)
        const getEditData = actvitiesArr.find((act) => act.id == editId);
        setEditActivity(getEditData);
    }
    useEffect(() => {
        //console.log(editActivity);
    }, [editActivity]);


    const updateActivity = () => {
        const updatedArr = actvitiesArr.map((act) => {

            if (act.id == editActivity.id) {
                return {
                    ...act,
                    activity: editActivity.activity,
                    status: editActivity.status
                };
            }
            return act;

        });
        setActivityArr(updatedArr);
        setModalOpen(false);
        setEditActivity(null);
    }
    useEffect(() => {
        //console.log(editActivity);
    }, [actvitiesArr]);




    return (
        <div className="bg-sky-100 p-5 md:p-10 mt-5 rounded">
            <h1 className="text-lg font-semibold py-3">Manage Activites</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-center">
                        <th className="p-3 border border-gray-300">
                            <input type="checkbox" value="" disabled></input>
                        </th>
                        <th className="p-3 border border-gray-300">S.no</th>
                        <th className="p-3 border border-gray-300">Activity</th>
                        <th className="p-3 border border-gray-300">Status</th>
                        <th className="p-3 border border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        actvitiesArr.length == 0 ? (
                            <tr className={`text-center`}>
                                <td colSpan="5" className="p-3 border border-gray-300 text-red-500">
                                    No Activities Added Yet
                                </td>
                            </tr>
                        ) : (
                            actvitiesArr.map((act, index) => {
                                return (<tr className={`text-center`} key={act.id}>
                                    <td className="p-3 border border-gray-300">
                                        <input type="checkbox" name="activityStatus" className="w-[20px] h-[20px]" ></input>
                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        <h2>{index + 1}</h2>
                                    </td>
                                    <td className="p-3 border border-gray-300"><h2>{act.activity}</h2></td>
                                    <td className="p-3 border border-gray-300 capitalize"><h2>{act.status}</h2></td>

                                    <td className="flex gap-2 text-center justify-center p-3 border border-gray-300">
                                        <button className={`bg-blue-900 text-white px-5 py-2 rounded cursor-pointer`} onClick={() => handleEdit(act.id)}>Edit</button>
                                        <button className={`bg-red-900 text-white px-5 py-2 rounded cursor-pointer`}
                                            onClick={() => {
                                                const confirmDelete = confirm("Are you sure you want to delete this activity?")
                                                if (confirmDelete) {
                                                    handleDelete(act.id)
                                                }

                                            }
                                            }>Delete</button>
                                    </td>
                                </tr>


                                );
                            })
                        )
                    }
                </tbody>
            </table>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50">

                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white w-md p-3 rounded-lg">
                        <h1 className="bg-yellow-100 p-3 text-xl">Edit - </h1>
                        <div className="flex flex-col gap-3 justify-between p-3">
                            <label>Activty: </label>
                            <input type="text" value={editActivity.activity} className="border border-gray-300 rounded px-3 py-2" onChange={(e) => {
                                setEditActivity({
                                    ...editActivity,
                                    activity: e.target.value
                                })
                            }}></input>
                            <label>Status: </label>
                            <select
                                value={editActivity.status}
                                onChange={(e) => {
                                    setEditActivity({
                                        ...editActivity,
                                        status: e.target.value
                                    })
                                }}
                                className="border border-gray-300 rounded px-3 py-2">
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                            </select>
                            <button className="bg-blue-900 text-white px-4 py-2 cursor-pointer" onClick={updateActivity}>Update</button>
                            <button className="bg-red-900 text-white px-4 py-2 cursor-pointer" onClick={() => setModalOpen(false)}>Cancel</button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}


export default ManageActivities;