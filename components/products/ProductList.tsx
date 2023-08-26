import { FC } from 'react';

import { Grid } from '@mui/material';

import { IProduct } from '@/interfaces';
import { ProductCard } from './ProductCard';

interface Props {
    products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
    console.log('quiero ver que trae el products', products);
    return (
        <Grid container spacing={4}>
            {products?.map((product) => (
                <ProductCard key={product.slug} product={product} />
            ))}
        </Grid>
    );
};
