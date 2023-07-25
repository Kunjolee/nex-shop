import { NextApiRequest, NextApiResponse } from 'next';
import { db, seedData } from '@/database';
import { Product } from '@/models';
interface Data {
    message: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (process.env.NODE_ENV === 'production') {
        return res
            .status(401)
            .json({ message: 'Can not access to this service in production' });
    }
    try {
        await db.connect();

        await Product.deleteMany();
        await Product.insertMany(seedData.initialData.products);

        await db.disconnect();

        return res.status(200).json({ message: 'Process done successfully' });
    } catch (error) {
        console.log('error in seed end point', error);
        return res.status(500).json({
            message:
                'Something went wrong when calling seed endpoint. Contact your admin',
        });
    }
}
