import { FormControlLabel, InputLabel, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import Select from 'react-select'
function NormalSelect({ placeHolder, data, label }) {
    const [selectedOption, setSelectedOption] = useState('8:00');

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    const style = {
        control: base => ({
            ...base,
            border: 0,
            width: '100%',
            fontSize: '12px',
            fontFamily: 'DM Sans',
            // This line disable the blue border
            boxShadow: "none",
            paddingRight: '20px',
            marginRight: '80px',
            borderRadius: 10
        })

    };
    return (
        <div style={{ margin: '5px' }}>
            <InputLabel shrink style={{ color: '#B7B7BF', marginBottom: '10px' }}>
                {label}
            </InputLabel>
            <Select
                placeholder={placeHolder}
                value={selectedOption}
                options={data}
                displayEmpty
                onChange={handleChange}
                isSearchable={false}
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <span style={{ marginLeft: 5, }}>{e.label}</span>
                    </div>
                )}
                styles={style}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </div>
    )
}

export default NormalSelect