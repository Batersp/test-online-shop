import React from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import {useField} from 'formik';
import style from './ProjectTextField.module.css'


type PropsType = {
    name: string;
    label: string;
    disabled?: boolean;
};

export const ProjectTextField: React.FC<PropsType> = ({
                                                          label,
                                                          name,
                                                          disabled,
                                                      }) => {
    const [field, meta] = useField(name);

    return (
        <FormControl fullWidth variant="standard" className={style.field}>
            <InputLabel style={{fontSize: '25px'}}>{label}</InputLabel>
            <Input style={{fontSize: '25px'}} margin="dense" {...field} name={name} disabled={disabled}/>
            {meta.touched && meta.error &&
                <FormHelperText style={{fontSize: '15px'}} error>{meta.error}</FormHelperText>}
        </FormControl>
    );
};
