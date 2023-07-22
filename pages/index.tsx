import { ShopLayout } from '@/components/layouts';
import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { initialData } from '../database/products';
import { ProductList } from '@/components/products';

const HomePage: NextPage = () => {
    return (
        <ShopLayout
            title={'Nex-shop - Home'}
            pageDescription={'Find best products here'}
        >
            <Typography variant='h1' component='h1'>
                Tienda
            </Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>
                Todos los productos
            </Typography>

            <ProductList products={initialData.products as any} />
        </ShopLayout>
    );
};

export default HomePage;
