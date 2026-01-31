import '../logInFolder/loginstyle.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Login from '../logInFolder/LoginFile';
import { useState } from 'react';
export default function SingUp({ close2 }) {
    const [showlogin, setShowlogin] = useState(false);
    function handleCloseClick() {
        close2()
    }
    return (
        <>
            {showlogin ? (
                <Login close={close2} />
            ) : (
                <form className="mainDiv">
                    <Card
                        className='card'
                        sx={{
                            minWidth: 300,
                            maxWidth: 400,
                            '@media (max-width:400px)': {
                                minWidth: 280,
                                width: '95%',
                            }
                        }}
                    >
                        <CardContent>
                            <div className='loginHeader'>
                                <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>Sign Up</Typography>
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
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    sx={{ margin: '10px', marginRight: '5px', width: '90%' }}
                                />
                            </div>
                            <div className='loginDivButton'>
                                <Button type='submit' className='LoginButton' variant="contained">sign up</Button>
                            </div>
                            <div className='singUp'>
                                <Typography>have email? <button onClick={() => setShowlogin(true)}>Sign up here</button></Typography>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            )}

        </>
    )
}