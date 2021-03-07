import React from 'react'

const TrainingDetailCard = ({id, status, trainingName, institutionName, learnerCount, startDate, endDate }) => {
    return (
        <div id={id} className={'detailedCard'}>
            <div className={'heading'}><b>{trainingName}</b></div>
            <div className={'subheading'}>{institutionName}</div>
            <div className='approval'>{status}</div>
            <div>{learnerCount}</div>
            <div>{startDate}</div>
            <div>{endDate}</div>
        </div>
    )
}

export default TrainingDetailCard
