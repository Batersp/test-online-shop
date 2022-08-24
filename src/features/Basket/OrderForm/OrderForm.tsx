import React from 'react';
import {Paper} from "@mui/material";
import {Formik, FormikHelpers} from 'formik';
import {Ordering} from "./Ordering/Ordering";
import {OrderFormType} from "../../../common/types/OrderFormType";
import {validateOrdering} from "./Ordering/validateordering";
import style from './OrderForm.module.css'

export const OrderForm = () => {

    const submitRegisterForm = (values: OrderFormType, {resetForm}: FormikHelpers<OrderFormType>) => {
        console.log(values)
        resetForm()
    }

    return (
        <Paper className={style.main} elevation={3}>
            <Formik
                initialValues={{firstName: '', lastName: '', address: '', phone: ''}}
                validationSchema={validateOrdering}
                onSubmit={submitRegisterForm}
                validateOnMount={false}
            >
                {formik => <Ordering formik={formik}/>}
            </Formik>
        </Paper>
    );
};

