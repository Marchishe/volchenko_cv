import Select from "react-select";

const ContactSelect = ({value, setValue}) => {
    const options = [{
        value: 'saw the profile in LinkedIn',
        label: 'Saw the profile in LinkedIn'
    },
        {
            value: 'recommended by friends',
            label: 'Recommended by friends'
        },
        {
            value: 'saw my profile on a job search platform',
            label: 'Saw my profile on a job search platform'
        },
        {
            value: 'i wrote to you myself',
            label: 'I wrote to you myself'
        }
    ]
    return (
        <>
            <Select
                onChange={setValue}
                getValue={() => value()}
                options={options}
                classNamePrefix='react-select'
                placeholder='Chose answer'
            />
        </>)

}

export default ContactSelect
