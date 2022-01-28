import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField";

import {Formik} from 'formik';

import shape from "../assets/images/shape.png";
import login from "../assets/images/login.png";

export default function Login() {
    return(
        <div>
            <Box
                component="img"
                alt="shape"
                src={shape}
            />
            <p>Selamat Datang Kembali</p>
            <Box
                component="img"
                alt="login"
                src={login}
            />
            <Formik>
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    isSubmitting,
                    errors,
                    touched
                }) =>{
                    return(
                        <form>
                            <TextField
                                label="Enter your email"
                            ></TextField>
                            <TextField
                                label="Enter your password"
                            ></TextField>
                            <p>Lupa Password</p>
                            <Button>Sign In</Button>
                            <p>Belum punya akun? Register</p>
                        </form>
                    )
                }}
            </Formik>
            {/* <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    }

                    return errors;
                }}
            > {({handleChange, handleSubmit, values, isSubmitting, errors, touched}) =>{
                return(
                    <form>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            // onChange={handleChange}
                            values={values.email}
                            size="small"
                        />
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            // onChange={handleChange}
                            values={values.password}
                            size="small"
						/>
                    </form>
                )
            }}
            
            </Formik> */}

        </div>
    )
}