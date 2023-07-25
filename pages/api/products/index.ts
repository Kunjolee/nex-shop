import { db, SHOP_CONSTANTS } from '@/database';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | { products: IProduct[] };

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            return getProducts(req, res);
        default:
            return res.status(400).json({ message: 'Bad request' });
    }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { gender = 'all' } = req.query;

    let condition = {};

    if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
        condition = { gender };
    }

    try {
        db.connect();
        const products = await Product.find(condition)
            .select('title images price inStock slug -_id')
            .lean();
        db.disconnect();

        res.status(200).json({ products });
    } catch (error) {
        console.log('Something wrong happened');
        res.status(500).json({
            message: 'Something went wrong. Contact your admin',
        });
    }
};
