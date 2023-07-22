import {
    Box,
    Button,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { ShopLayout } from '@/components/layouts';

const AddressPage = () => {
    return (
        <ShopLayout
            title='Address'
            pageDescription='Confirm destination adress'
        >
            <Typography variant='h1' component='h1'>
                Address
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <TextField label='Name' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Last name' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label='Address' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label='Address2 (optional)'
                        variant='filled'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField label='Postal code' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='City' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select variant='filled' label='Country' value={1}>
                            <MenuItem value={1}>Costa rica</MenuItem>
                            <MenuItem value={2}>Honduras</MenuItem>
                            <MenuItem value={3}>El Salvador</MenuItem>
                            <MenuItem value={4}>Guatemala</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label='Phone number'
                        variant='filled'
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
                <Button color='secondary' className='circular-btn' size='large'>
                    Check order
                </Button>
            </Box>
        </ShopLayout>
    );
};
export default AddressPage;
