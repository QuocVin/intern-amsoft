import React from 'react';
import {
    Box, TextField, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Checkbox
} from '@material-ui/core';
import { useStyles } from './AppInput.styles';
import { useForm, Controller } from "react-hook-form";

export default function AppInput({ field = {}, control, className = '', component = {}, options = [] }) {
    const classes = useStyles();
    const { radio, checkbox, textField } = component;

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

    const RenderInput = (component = { radio: false, checkbox: false, textField: false }) => {
        // tham khảo cách này
        // const elm = {
        //     radio: <></>,
        //     checkbox: <></>
        // }
        // return elm[control]

        return radio && (
            <Controller
                control={control}
                name={field.id}
                defaultValue=""
                render={({ field: { onChange, value } }) => {
                    return (
                        <FormControl component="fieldset" className={[classes.marginLeft, classes.boxInput].join(' ')}>
                            <RadioGroup className={classes.row} aria-label="gender" name="gender1" value={value} onChange={onChange}>
                                {options.map((op, idx) => (
                                    <FormControlLabel key={idx + 'item-radio-' + op.id} value={op.id} control={<Radio color="primary" />} label={op.label} />
                                ))}
                            </RadioGroup>
                        </FormControl>)
                }}
            />)
            || checkbox && (
                <Controller
                    control={control}
                    name={field.id}
                    defaultValue={false}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <FormControl component="fieldset" className={[classes.marginLeft, classes.boxInput].join(' ')}>
                                <FormControlLabel
                                    value={value}
                                    label={field.label?.title}
                                    control={<Checkbox color="primary" onChange={onChange} name={field.id} />}
                                />
                            </FormControl>
                        )
                    }}
                />)
            || textField && (
                <Controller
                    control={control}
                    name={field.id}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => {
                        return (
                            <FormControl component="fieldset" className={classes.boxInput}>
                                <TextField
                                    control={control}
                                    value={value}
                                    onChange={onChange}
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                />
                            </FormControl>
                        )
                    }}
                />
            )
    }

    return (
        <Box className={classes.row}>
            <RenderLabel label={field.label?.title} />
            <RenderInput component={component} />
        </Box>
    )
}
