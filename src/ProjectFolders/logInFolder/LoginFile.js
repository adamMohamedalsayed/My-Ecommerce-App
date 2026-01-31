import './loginstyle.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SingUp from '../singupfiles/SignUp';
import { useState } from 'react';
export default function Login({ close }) {
    const [showSignUp, setShowSignUp] = useState(false);
    function handleCloseClick() {
        close()
    }
    return (
        <>
            {showSignUp ? (
                <SingUp close2={close} />
            ) : (
                <form className="mainDiv">
                    <Card
                        className='card'
                        sx={{
                            minWidth: 350,
                            maxWidth: 400,
                            '@media (max-width:400px)': {
                                minWidth: 280,
                                width: '95%',
                            }
                        }}
                    >
                        <CardContent>
                            <div className='loginHeader'>
                                <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>Login In</Typography>
                                <IconButton onClick={handleCloseClick} aria-label="delete" size="small">
                                    <CloseIcon sx={{ fontSize: '25px' }} />
                                </IconButton>
                            </div>
                            <div className='LoginInputs'>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    sx={{ margin: '10px', width: '90%' }}
                                />
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    sx={{ margin: '10px', width: '90%' }}
                                />
                            </div>
                            <div className='loginDivButton'>
                                <Button type='submit' className='LoginButton' variant="contained">Login</Button>
                            </div>
                            <div className='singUp'>
                                <Typography>No email? <button onClick={() => { setShowSignUp(true) }}>Sign up here</button></Typography>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            )}

        </>
    )
}