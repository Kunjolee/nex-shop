import { FC } from 'react';
import { Typography } from '@mui/material';

import { useProducts } from '@/hooks';
import { FullScreenLoading } from '../ui';
import { ProductList } from './ProductList';

interface Props {
    title: string;
    subtitle: string;
    gender?: string;
}

export const ProductsByCategory: FC<Props> = ({
    title = '',
    gender = 'all',
    subtitle = '',
}) => {
    const { products, isLoading } = useProducts(`/products?gender=${gender}`);
    return (
        <>
            <Typography variant='h1' component='h1'>
                {title}
            </Typography>
            <Typography variant='h2' sx={{ mt: 1 }}>
                {subtitle}
            </Typography>
            {isLoading ? (
                <FullScreenLoading />
            ) : (
                <ProductList products={products} />
            )}
        </>
    );
};
