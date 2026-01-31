import './headerstyle.css'
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import Login from '../logInFolder/LoginFile';
import ShoppingCart from '../ShoppingCart/shoppingcartfile';
export default function Header({ cartItems }) {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleClosediolog() {
        setOpen(false);

    }
    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    return (
        <div className='HeaderContainer'>
            {/*  */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        minWidth: 350,     // الحجم الافتراضي
                        width: '90%',      // عرض نسبي
                        maxWidth: 400,     // الحد الأقصى للعرض
                        '@media (max-width:400px)': {  // لو الشاشة <=400px
                            minWidth: 280,  // تصغير الحجم
                            width: '95%',
                        }
                    }

                }}
            >
                <Login close={handleClosediolog} />
            </Dialog>

            <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        minWidth: 350,     // الحجم الافتراضي
                        width: '90%',      // عرض نسبي
                        maxWidth: 400,     // الحد الأقصى للعرض
                        '@media (max-width:400px)': {  // لو الشاشة <=400px
                            minWidth: 280,  // تصغير الحجم
                            width: '95%',
                        }
                    }
                }}
            >
                <ShoppingCart close={handleClose2} cartItems={cartItems} />
            </Dialog>
            {/*  */}
            <div className='Logo'>
                <Typography variant="h6"
                    sx={{
                        fontSize: {
                            xs: '18px', // mobile
                            sm: '20px',
                            md: '24px'
                        },
                        fontWeight: 700,
                        color: '#FFFFFF'
                    }}>Adam</Typography>
            </div>
            <div className='mainButtons'>
                <ButtonGroup
                    variant="text"
                    sx={{
                        backgroundColor: 'transparent',
                        '& .MuiButton-root': {
                            color: '#EAEAEA',
                            fontSize: '15px',
                            fontWeight: 500,
                            textTransform: 'capitalize',
                            px: 3,
                            border: 'none',
                            borderRadius: '8px',
                            transition: '0.3s',
                        },
                        '& .MuiButton-root:hover': {
                            background: 'rgba(255,107,0,0.2)',
                            color: '#FF6B00',
                        },
                        '& .MuiButton-root.active': {
                            background: '#FF6B00',
                            color: '#fff',
                            fontWeight: 'bold',
                        }
                    }}
                >
                    <Button id='mainButtons' className="active">Home</Button>
                    <a style={{ textDecoration: 'none' }} href='#sectionFood'><Button id='mainButtons'>Shop</Button></a>
                    <a style={{ textDecoration: 'none' }} href='#Footer'><Button id='mainButtons'>Contact</Button></a>
                </ButtonGroup>
            </div>
            <div className='secondButtons'>
                <Stack >
                    <IconButton onClick={handleClickOpen2}>
                        <LocalGroceryStoreIcon sx={{ color: 'white', fontSize: '30px' }} fontSize="inherit" />
                    </IconButton>
                </Stack>
                <Button onClick={handleClickOpen} className='singInButton'>sign in</Button>
            </div>
        </div>
    )
}