import React from 'react';
import {
    Box, TextField, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Checkbox
} from '@material-ui/core';
import { useStyles } from './AppTextField.styles';

export default function AppTextField({ className = '', label = '', control = {}, handlePage = () => { } }) {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    const { radio, checkbox, textField } = control;

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const RenderLabel = ({ label = '' }) => {
        const arrClasses = [];
        arrClasses.push(className)
        if (label === '') {
            arrClasses.push(classes.labelSpace)
        } else {
            arrClasses.push(classes.labelBorder)
        }
        return (
            <Typography className={[...arrClasses].join(' ')}>{label}</Typography>
        )
    }

    const RenderInput = (control = { radio: false, checkbox: false, textField: false }) => {
        // tham khảo cách này
        // const elm = {
        //     radio: <></>,
        //     checkbox: <></>
        // }
        // return elm[control]

        return radio && (
            <FormControl component="fieldset" className={[classes.marginLeft, classes.boxInput].join(' ')}>
                <RadioGroup className={classes.row} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                </RadioGroup>
            </FormControl>)
            || checkbox && (
                <FormControl component="fieldset" className={[classes.marginLeft, classes.boxInput].join(' ')}>
                    <FormControlLabel
                        label="asda"
                        value="start"
                        control={<Checkbox color="primary" />}
                    />
                </FormControl>)
            || textField && (
                <FormControl component="fieldset" className={classes.boxInput}>
                    <TextField
                        // value={name}
                        // onChange={handleChange}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </FormControl>)
    }

    return (
        <Box className={classes.row}>
            <RenderLabel label={label} />
            <RenderInput control={control} />
        </Box>
    )
}
