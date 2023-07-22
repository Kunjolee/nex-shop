import NextLink from 'next/link';
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    Link,
    Typography,
} from '@mui/material';

import { CartList, OrderSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts';
import { CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
    return (
        <ShopLayout
            title='Order summary 3123123'
            pageDescription='Order summary'
        >
            <Typography variant='h1' component='h1'>
                Order: ABC123
            </Typography>

            {/* <Chip
                sx={{ my: 2 }}
                label='Payment pending'
                variant='outlined'
                color='error'
                icon={<CreditCardOffOutlined />}
            /> */}
            <Chip
                sx={{ my: 2 }}
                label='Order successfully paid'
                variant='outlined'
                color='success'
                icon={<CreditScoreOutlined />}
            />

            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>
                                Summary (3 products)
                            </Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>
                                    Delivery Address
                                </Typography>
                                <NextLink href='/checkout/address'>
                                    <Link component='span' underline='always'>
                                        Edit
                                    </Link>
                                </NextLink>
                            </Box>
                            <Typography>Kunjo Lee</Typography>
                            <Typography>3213 algun lugar</Typography>
                            <Typography>Stitttsville, HYA 23s</Typography>
                            <Typography>Canada</Typography>
                            <Typography>+1 323231231</Typography>

                            <Divider />
                            <Box
                                display='flex'
                                justifyContent='end'
                                sx={{ mb: 1 }}
                            >
                                <NextLink href='/cart'>
                                    <Link component='span' underline='always'>
                                        Edit
                                    </Link>
                                </NextLink>
                            </Box>
                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                {/* todo: pay */}
                                <h2>Make a purchase</h2>
                                <Chip
                                    sx={{ my: 2 }}
                                    label='Order successfully paid'
                                    variant='outlined'
                                    color='success'
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};
export default OrderPage;
