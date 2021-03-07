import React, { useState } from 'react'
import Input from './Input';

const CreateComponent = ({ addData, skillList, statusList }) => {
    const [trainingName, setTrainingName] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [learnerCount, setLearnerCount] = useState(0);
    const [location, setLocation] = useState('');
    const [spoc, setSpoc] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [estimatedCostPerLearner, setEstimatedCostPerLearner] = useState('');
    const [status, setStatus] = useState('');
    const [skills, setSkills] = useState('');

    const handleOnChange = (id, value) => {
        switch (id) {
            case 'trainingName':
                setTrainingName(value)
                break;
            case 'institutionName':
                setInstitutionName(value)
                break;
            case 'startDate':
                setStartDate(value)
                break;
            case 'endDate':
                setEndDate(value)
                break;
            case 'learnerCount':
                setLearnerCount(value)
                break;
            case 'location':
                setLocation(value)
                break;
            case 'spoc':
                setSpoc(value)
                break;
            case 'contactNumber':
                setContactNumber(value)
                break;
            case 'estimatedCostPerLearner':
                setEstimatedCostPerLearner(value)
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addData({
            "trainingName": trainingName,
            "institutionName": institutionName,
            "learnerCount": learnerCount,
            "startDate": startDate,
            "endDate": endDate,
            "contactNumber": contactNumber,
            "location": location,
            "spoc": spoc,
            "skills": [],
            "status": status,
            "estimatedCostPerLearner": estimatedCostPerLearner,
            "trainers": []
        })
    }

    const handleClear = () => {
        setTrainingName('');
        setInstitutionName('');
        setStartDate('');
        setEndDate('');
        setLearnerCount(0);
        setLocation('');
        setSpoc('');
        setContactNumber('');
        setEstimatedCostPerLearner('');
        setStatus('');
        setSkills('');
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <Input
                    id={'trainingName'}
                    label={'Training Name'}
                    name={'trainingName'}
                    value={trainingName}
                    handleChange={handleOnChange}
                    placeholder={'e.g Java Training'}
                // errorMessage={'Training Name required'}
                />
                <Input
                    id={'institutionName'}
                    label={'Institution Name'}
                    name={'institutionName'}
                    value={institutionName}
                    handleChange={handleOnChange}
                    placeholder={'e.g Ebox Colleges'}
                // errorMessage={'required'}
                />
                <Input
                    id={'startDate'}
                    label={'Start Date'}
                    name={'startDate'}
                    value={startDate}
                    handleChange={handleOnChange}
                    placeholder={'dd/mm/yyyy'}
                // errorMessage={'required'}
                />
                <Input
                    id={'endDate'}
                    label={'End Date'}
                    name={'endDate'}
                    value={endDate}
                    handleChange={handleOnChange}
                    placeholder={'dd/mm/yyyy'}
                // errorMessage={'required'}
                />
                <Input
                    id={'learnerCount'}
                    label={'Learner Count'}
                    name={'learnerCount'}
                    value={learnerCount}
                    handleChange={handleOnChange}
                    placeholder={'0'}
                // errorMessage={'required'}
                />
                <Input
                    id={'location'}
                    label={'Location'}
                    name={'location'}
                    value={location}
                    handleChange={handleOnChange}
                    placeholder={'e.g dhone'}
                // errorMessage={'required'}
                />
                <Input
                    id={'spoc'}
                    label={'Spoc'}
                    name={'spoc'}
                    value={spoc}
                    handleChange={handleOnChange}
                    placeholder={'e.g Kartick'}
                // errorMessage={'required'}
                />
                <Input
                    id={'contactNumber'}
                    label={'Contact Number'}
                    name={'contactNumber'}
                    value={contactNumber}
                    handleChange={handleOnChange}
                    placeholder={'e.g Kartick'}
                // errorMessage={'required'}
                />
                <Input
                    id={'estimatedCostPerLearner'}
                    label={'Estimated Cost PerLearner'}
                    name={'estimatedCostPerLearner'}
                    value={estimatedCostPerLearner}
                    handleChange={handleOnChange}
                    placeholder={'0'}
                // errorMessage={'required'}
                />
                <input type='submit' value='submit'/>
            </form>
            <button onClick={handleClear}>clear</button>
        </div>
    )
}

export default CreateComponent
