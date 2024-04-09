import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOpen';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };
    const initialValues = {
        username: '',
        password: '',
        remember: false
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('Please enter a valid email').required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const onSubmit = (values, props) => {
        console.log(values);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username" placeholder='Enter username' fullWidth required />
                            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

                            <Field as={TextField} label='Password' name="password" placeholder='Enter password' type='password' fullWidth required />
                            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

                            <Field as={FormControlLabel} name='remember' control={<Checkbox color="primary" />} label="Remember me" />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting} style={btnstyle} fullWidth>
                                {props.isSubmitting ? "Loading" : "Sign in"}
                            </Button>
                        </Form>
                    )}
                </Formik>

            </Paper>
        </Grid>
    );
};

export default Login;