import './section1style.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FoodList from '../FoodList/FoodList';

export default function MainSection() {
    return (
        <>
            <div className='MainDiv'>
                <div className='photoDiv'>
                    <div className='imageinfo'>
                        <Typography sx={{ fontSize: '40px', color: 'white', fontWeight: '600' }}>order your</Typography>
                        <Typography sx={{ fontSize: '40px', color: 'white', fontWeight: '600', textAlign: 'center' }}>favourite Food here</Typography>
                        <Typography sx={{ color: 'white', fontSize: '22px', fontWeight: '400', margin: '10px 0' }}>Experience the taste of authentic homemade meals delivered hot to your doorstep within 30 minutes</Typography>
                        <Button sx={{ background: '#E41E26', color: 'white' }}>View Menu</Button>
                    </div>
                </div>
            </div>
        </>
    )
}