import React from "react";
import { Grid } from '@material-ui/core';
import { AppInput } from '../../component'

const options = [
    { id: 'radio1', label: 'radio 1' },
    { id: 'radio2', label: 'radio 2' },
    { id: 'radio3', label: 'radio 3' },
    { id: 'radio4', label: 'radio 4' },
    { id: 'radio5', label: 'radio 5' },
]

export default function AppForm({ fields = [], control }) {

    return (
        <Grid container spacing={1}>
            {fields.map((field, idx) => {
                let _xs = field?.xs ? field.xs : 6
                if (field.component?.radio) {
                    return (
                        <Grid item xs={_xs} key={idx + '-form-grip'}>
                            <AppInput field={field} control={control} component={field.component} options={options} />
                        </Grid>
                    )
                } else
                    return (
                        <Grid item xs={_xs} key={idx + '-form-grip'}>
                            <AppInput field={field} control={control} component={field.component} />
                        </Grid>
                    )
            })}
        </Grid>
    );

};