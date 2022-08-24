import * as Yup from 'yup';



export const validateOrdering = Yup.object().shape({
    firstName: Yup.string().required('Required').min(5, 'First name must be longer than 4 letters'),
    lastName: Yup.string().required('Required').min(5, 'Last name must be longer than 4 letters'),
    address: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
});
