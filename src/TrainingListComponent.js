import React, { useState, useEffect } from 'react'
import TrainingDetailCard from './TrainingDetailCard'
import CreateComponent from './CreateComponent'

const TrainingListComponent = () => {
    const [trainingList, setTrainingList] = useState([]);
    const [statusList, setStatusList] = useState([]);
    const [skillList, setSkillList] = useState([]);

    useEffect(() => {
        getFilterData();
        getTrainingList();
    }, [])

    const getTrainingList = () => {
        fetch('https://app.e-box.co.in/uploads/Json/capstoneProject/trainings.json')
            .then((response) => {
                response.json().then((data) => {
                    setTrainingList(data)
                })
                    .catch((error) => console.log('[error]', error))
            })
            .catch((error) => console.log('[error]', error))
    }

    const getFilterData = () => {
        fetch('https://app.e-box.co.in/uploads/Json/capstoneProject/filter.json')
            .then((response) => {
                response.json().then((data) => {
                    setStatusList(data.statusList)
                    setSkillList(data.skills)
                })
                    .catch((error) => console.log('[error]', error))
            })
            .catch((error) => console.log('[error]', error))
    }

    const addTrainingList = (newData) => {
        setTrainingList([...trainingList, newData])
    }

    return (
        <div>
            <CreateComponent 
                addData={addTrainingList} 
                skillList={skillList}
                statusList={statusList}
            />
            {trainingList.length ? trainingList.map((eachItem) => (
                <TrainingDetailCard
                    id={eachItem.trainingName}
                    status={eachItem.status}
                    trainingName={eachItem.trainingName}
                    institutionName={eachItem.institutionName}
                    learnerCount={eachItem.learnerCount}
                    startDate={eachItem.startDate}
                    endDate={eachItem.endDate} />
            )) : <div>No list found</div>
            }
        </div>
    )
}

export default TrainingListComponent;
