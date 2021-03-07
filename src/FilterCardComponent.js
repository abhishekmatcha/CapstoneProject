import React from 'react'
import Input from './Input';

const FilterCardComponent = () => {
    const [trainingName, setTrainingName] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div>
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
        </div>
    )
}

export default FilterCardComponent
