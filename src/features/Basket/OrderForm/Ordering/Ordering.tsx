import React from 'react';
import {Form, FormikProps} from "formik";
import {OrderFormType} from "../../../../common/types/OrderFormType";
import {Button, FormGroup} from "@mui/material";

import {ProjectTextField} from "../../../../common/components/ProjectTextField/ProjectTextField";
import style from './Ordering.module.css'


type PropsType = {
    formik: FormikProps<OrderFormType>;
};

export const Ordering: React.FC<PropsType> = ({formik}) => {

    const {isValid, dirty, isSubmitting} = {...formik};

    return (
        <Form className={style.main}>
            <FormGroup>
                <ProjectTextField name="firstName" label="First Name" disabled={isSubmitting}/>
                <ProjectTextField name="lastName" label="Last Name" disabled={isSubmitting}/>
                <ProjectTextField name="address" label="Address" disabled={isSubmitting}/>
                <ProjectTextField name="phone" label="Phone" disabled={isSubmitting}/>

                <div>
                    <Button
                        style={{fontSize: '30px'}}
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={!isValid || !dirty}
                    >
                        Order
                    </Button>
                </div>
            </FormGroup>
        </Form>
    );
};

