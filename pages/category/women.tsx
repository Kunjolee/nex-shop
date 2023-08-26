import { NextPage } from 'next';
import { ShopLayout } from '@/components/layouts';
import { ProductsByCategory } from '@/components/products';

const WomenPage: NextPage = () => {
    return (
        <ShopLayout title='Women products' pageDescription='Products for women'>
            <ProductsByCategory
                title='Women'
                subtitle='Your women products here!'
                gender='women'
            />
        </ShopLayout>
    );
};
export default WomenPage;
