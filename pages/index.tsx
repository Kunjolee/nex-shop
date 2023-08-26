import { NextPage } from 'next';
import { ShopLayout } from '@/components/layouts';
import { ProductsByCategory } from '@/components/products';

const HomePage: NextPage = () => {
    return (
        <ShopLayout
            title={'Nex-shop - Home'}
            pageDescription={'Find best products here'}
        >
            <ProductsByCategory title='Shop' subtitle='All the products' />
        </ShopLayout>
    );
};

export default HomePage;
