import NextLink from 'next/link';
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Link,
    Typography,
} from '@mui/material';

import { CartList, OrderSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts';

const SummaryPage = () => {
    return (
        <ShopLayout title='Order summary' pageDescription='Order summary'>
            <Typography variant='h1' component='h1'>
                Order summary
            </Typography>
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
                                <Button
                                    color='secondary'
                                    className='circular-btn'
                                    fullWidth
                                >
                                    Confirm order
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};
export default SummaryPage;
