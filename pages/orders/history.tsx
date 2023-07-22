import NextLink from 'next/link';
import { ShopLayout } from '@/components/layouts';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
    },
    {
        field: 'fullname',
        headerName: 'Full Name',
        width: 300,
    },
    {
        field: 'paid',
        headerName: 'Paid',
        description: 'Show information if the order is paid or not',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return params.row.paid ? (
                <Chip color='success' label='paid' variant='outlined' />
            ) : (
                <Chip color='error' label='no paid' variant='outlined' />
            );
        },
    },
    {
        field: 'order',
        headerName: 'See order',
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <NextLink href={`/orders/${params.row.id}`}>
                <Link component='span' underline='always'>
                    View order
                </Link>
            </NextLink>
        ),
    },
];

const rows = [
    { id: 1, paid: true, fullname: 'Kunjo Lee' },
    { id: 2, paid: false, fullname: 'Kunjo Lee' },
    { id: 3, paid: true, fullname: 'Kunjo Lee' },
    { id: 4, paid: false, fullname: 'Kunjo Lee' },
    { id: 5, paid: false, fullname: 'Kunjo Lee' },
    { id: 6, paid: true, fullname: 'Kunjo Lee' },
];

const HistoryPage = () => {
    return (
        <ShopLayout
            title='Order history'
            pageDescription='Client order history'
        >
            <Typography variant='h1' component='h1'>
                Orders history
            </Typography>

            <Grid container>
                <Grid item xs={12} height={650} width='100%'>
                    <DataGrid rows={rows} columns={columns} />
                </Grid>
            </Grid>
        </ShopLayout>
    );
};
export default HistoryPage;
