import { InputLabel, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import Select from 'react-select'
function DrawerWithSelectFlag({ placeHolder, data, label }) {
    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    const style = {
        control: base => ({
            ...base,
            border: 0,
            fontSize: '12px',
            display: 'flex',
            flexGrow: 1,
            position: 'relative',
            width: '100%',
            // This line disable the blue border
            boxShadow: "none",
            paddingRight: '-10px',
            marginRight: '-90px',
            marginLeft: '-10px',
            borderRadius: 10,
            marginTop: '18px',
            backgroundColor: 'hsl(0deg 0% 96%)',
        }),
        select: {
            backgroundColor: 'red'
        }


    };

    const useStyle = makeStyles((theme) => ({
        root: {
            marginLeft: '5px',
            padding: '5px',
            display: 'flex',
            flexDirection: 'row',
            paddingRight: theme.spacing(12),
            marginTop: '5px',


        }
    }))

    const classes = useStyle();
    return (
        <div >
            <InputLabel shrink style={{ color: '#B7B7BF', marginTop: '5px',marginBottom:'-15px' }}>
                {label}
            </InputLabel>
            <Select

                placeholder={placeHolder}
                value={selectedOption}
                options={data}
                className={classes.root}
                isSearchable={false}
                onChange={handleChange}
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        {<img src={e.icon} />}
                        <span style={{ marginLeft: 5 }}>{e.label}</span>
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

export default DrawerWithSelectFlag