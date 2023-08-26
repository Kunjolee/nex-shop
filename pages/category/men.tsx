import { NextPage } from 'next';
import { ShopLayout } from '@/components/layouts';
import { ProductsByCategory } from '@/components/products/';

const MenPage: NextPage = () => {
    return (
        <ShopLayout
            title='Men products'
            pageDescription='Find the best products for men here'
        >
            <ProductsByCategory
                title='Men'
                subtitle='Find the best products for men here'
                gender='men'
            />
        </ShopLayout>
    );
};
export default MenPage;
