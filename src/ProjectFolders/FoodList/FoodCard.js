import './FoodListStyle.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
export default function FoodCard({ food, onAddToCart }) {
    const [color, setColor] = useState("primary")
    const [Text, setTex] = useState('Add To Shopping Cart')
    const [show, setshow] = useState(false)
    function handleClick() {
        if (color === "primary" && Text === 'Add To Shopping Cart') {
            setColor('success')
            setTex('Added To Shopping Cart')
            setshow(true)
            setTimeout(() => setshow(false), 2000);
            onAddToCart(food)
        } else {
            setColor("primary")
            setTex('Add To Shopping Cart')
            setshow(false);
        }

    }

    return (
        <>

            {show && (
                <Alert
                    icon={<CheckIcon fontSize="inherit" />}
                    severity="success"
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '470px',
                        textAlign: 'center',
                        zIndex: 9999,
                        bgcolor: 'blue', // لون أزرق
                        color: 'white',     // نص أبيض
                        whiteSpace: 'nowrap',

                        '@media (max-width:494px)': {
                            width: '400px'
                        },
                        '@media (max-width:390px)': {
                            width: '300px'
                        }
                    }}
                >
                    Here is a gentle confirmation that your action was successful.
                </Alert>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <div className="cardContainer">
                    <div className="cardfood">
                        <div className="cardImage">
                            <img
                                src={food.image}
                                onError={(e) => {
                                    e.target.src =
                                        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
                                }}
                                alt={food.name}
                            />
                        </div>
                        <div className="cardInfo">
                            <Typography sx={{ marginTop: '10px', marginBottom: '10px', fontSize: '25px', color: 'white' }}>{food.name}</Typography>
                            <Typography sx={{ fontSize: '15px', color: 'white' }}>
                                {food.description}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography className="price">50$</Typography>
                                <Button
                                    variant="contained"
                                    color={color}
                                    onClick={handleClick}
                                    sx={{
                                        borderRadius: "10px",
                                        padding: "6px 12px",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        textTransform: "none",
                                        transition: "all 0.3s ease",
                                        lineHeight: '1',
                                        letterSpacing: '0.1px'
                                    }}
                                >
                                    {Text}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}