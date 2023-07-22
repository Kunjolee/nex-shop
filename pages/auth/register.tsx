import NextLink from 'next/link';
import { AuthLayout } from '@/components/layouts';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

const LoginPage = () => {
    return (
        <AuthLayout title='Register into nex shop!'>
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component='h1'>
                            Create account
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='full name'
                            variant='filled'
                            fullWidth
                        />
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
                        <NextLink href='/auth/login'>
                            <Typography
                                component='span'
                                variant='body2'
                                color='black'
                            >
                                Already have an account?
                                <Link
                                    component='span'
                                    underline='always'
                                    color='secondary'
                                    ml={1}
                                >
                                    Log in
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
