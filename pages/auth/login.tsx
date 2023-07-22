import NextLink from 'next/link';
import { AuthLayout } from '@/components/layouts';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component='h1'>
                            Log in
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='email' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='password'
                            variant='filled'
                            type='password'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            color='secondary'
                            size='large'
                            className='circular-btn'
                            fullWidth
                        >
                            Log in
                        </Button>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <NextLink href='/auth/register'>
                            <Typography
                                component='span'
                                variant='body2'
                                color='black'
                            >
                                Don't have an account?
                                <Link
                                    component='span'
                                    underline='always'
                                    color='secondary'
                                    ml={1}
                                >
                                    Sign in
                                </Link>
                            </Typography>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
};
export default LoginPage;
