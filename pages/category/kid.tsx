import { NextPage } from 'next';
import { ShopLayout } from '@/components/layouts';
import { ProductsByCategory } from '@/components/products';

const KidPage: NextPage = () => {
    return (
        <ShopLayout title='Kid products' pageDescription='Products for kids'>
            <ProductsByCategory
                title='Kids'
                subtitle='List of products for kids'
                gender='kid'
            />
        </ShopLayout>
    );
};
export default KidPage;
