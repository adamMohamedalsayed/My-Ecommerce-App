import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './FoodListStyle.css'
import { useState } from 'react';
import FoodCard from './FoodCard';
const list = [
    {
        id: 1,
        name: "Pizza Margherita",
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Classic Italian pizza with fresh tomatoes, mozzarella cheese, and basil."
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
        description: "Crispy crust pizza topped with spicy pepperoni and melted cheese."
    },

    {
        id: 3,
        name: "Cheese Burger",
        category: "Burger",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        description: "Juicy beef burger with melted cheese, fresh lettuce, and tomato."
    },
    {
        id: 4,
        name: "Beef Burger",
        category: "Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        description: "Grilled beef patty served in a soft bun with classic toppings."
    },

    {
        id: 5,
        name: "Fried Chicken",
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        description: "Crispy fried chicken seasoned with special spices."
    },
    {
        id: 6,
        name: "Grilled Chicken",
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c",
        description: "Healthy grilled chicken breast with smoky flavor."
    },

    {
        id: 7,
        name: "Pasta Alfredo",
        category: "Pasta",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
        description: "Creamy Alfredo pasta with parmesan cheese and rich sauce."
    },
    {
        id: 8,
        name: "Pasta Bolognese",
        category: "Pasta",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
        description: "Traditional pasta with slow-cooked beef and tomato sauce."
    },

    {
        id: 9,
        name: "Ice Cream",
        category: "Dessert",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a",
        description: "Cold and creamy ice cream with rich flavors."
    },
    {
        id: 10,
        name: "Chocolate Cake",
        category: "Dessert",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
        description: "Soft chocolate cake with deep cocoa taste."
    },

    {
        id: 11,
        name: "Cola",
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
        description: "Refreshing cold cola drink."
    },
    {
        id: 12,
        name: "Orange Juice",
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Freshly squeezed orange juice full of vitamins."
    }
];


export default function FoodList({ onAddToCart }) {
    const [listState] = useState(list)
    const [cate, setcate] = useState('all')

    const all = listState; // كل العناصر
    const Pizza = listState.filter(e => e.category === 'Pizza')
    const Burger = listState.filter(e => e.category === 'Burger')
    const Chicken = listState.filter(e => e.category === 'Chicken')
    const Pasta = listState.filter(e => e.category === 'Pasta')
    const Dessert = listState.filter(e => e.category === 'Dessert')
    const Drinks = listState.filter(e => e.category === 'Drinks')
    const Healthy = listState.filter(e => e.category === 'Healthy')

    let a = listState;
    if (cate === 'All') a = all
    if (cate === 'Pizza') a = Pizza
    if (cate === 'Burger') a = Burger
    if (cate === 'Chicken') a = Chicken
    if (cate === 'Pasta') a = Pasta
    if (cate === 'Dessert') a = Dessert
    if (cate === 'Drinks') a = Drinks
    if (cate === 'Healthy') a = Healthy

    const newList = a.map((food) => (<FoodCard food={food} key={food.id} onAddToCart={onAddToCart} />))
    return (
        <>
            <section className='FoodSection' id='sectionFood'>
                <Stack spacing={2} direction="row" className='stack'>
                    <Button
                        value='All'
                        className='FilterButtons'
                        variant="outlined"
                        onClick={() => setcate('All')}
                    >
                        All
                    </Button>

                    <Button
                        value='Pizza'
                        className='FilterButtons'
                        variant="outlined"
                        onClick={() => setcate('Pizza')}
                    >
                        Pizza
                    </Button>

                    <Button
                        value='Burger'
                        className='FilterButtons'
                        variant="outlined"
                        onClick={() => setcate('Burger')}
                    >
                        Burger
                    </Button>

                    <Button
                        value='Chicken'
                        className='FilterButtons'
                        variant="outlined"
                        onClick={() => setcate('Chicken')}
                    >
                        Chicken
                    </Button>

                    <Button
                        value='Pasta'
                        className='FilterButtons'
                        variant="outlined"
                        onClick={() => setcate('Pasta')}
                    >
                        Pasta
                    </Button>

                    <Button
                        value='Dessert'
                        className='FilterButtons'
                        variant="outlined"
                        onClick={() => setcate('Dessert')}
                    >
                        Dessert
                    </Button>

                    <Button
                        value='Drinks'
                        className='FilterButtons'
                        variant="outlined"
                        onClick={() => setcate('Drinks')}
                    >
                        Drinks
                    </Button>
                </Stack>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {newList}
                </div>

            </section>
        </>
    )
}