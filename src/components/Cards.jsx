import { useEffect } from "react";
const today = new Date();
const formatted = today.toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
const Cards = (props) => {
  useEffect(() => {
          //console.log(editActivity);
      }, [props.actvitiesArr]);
  const completedArr = props.actvitiesArr.filter((act) => act?.status === 'completed')
  const pendingArr = props.actvitiesArr.filter((act) => act?.status === 'pending')
    return (
         <div className='cards grid grid-cols-1 md:grid-cols-3 gap-5 pt-5'>
            <Card bgColor="bg-purple-200 rounded" title="Today" desc={formatted}></Card>
            <Card bgColor="bg-green-200 rounded" title="Completed" desc={completedArr.length}></Card>
            <Card bgColor="bg-pink-200 rounded" title="Pending" desc={pendingArr.length}></Card>
        </div>
    )
}

const Card = (props) => {
    return(
          <div className={`card ${props.bgColor} p-10 text-center`}>
            <h2 className='font-semibold text-2xl'>{props.title}</h2>
            <p className='font-semibold text-xl py-2'>{props.desc}</p>
          </div>
    );
}

export default Cards;