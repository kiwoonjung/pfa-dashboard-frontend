// import { Helmet } from 'react-helmet-async';

// import { CONFIG } from 'src/config-global';

// import { BlankView } from 'src/sections/blank/view';

// // ----------------------------------------------------------------------

// const metadata = { title: `Kit List | Dashboard - ${CONFIG.appName}` };

// export default function KitList() {
//   return (
//     <>
//       <Helmet>
//         <title> {metadata.title}</title>
//       </Helmet>

//       <BlankView title="Kit List" />
//     </>
//   );
// }

import * as React from 'react';
import {
  DataGrid,
  gridClasses,
  GridToolbarExport,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';
import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

const columns = [
  { field: 'sku', headerName: 'SKU', width: 70 },
  { field: 'code', headerName: 'Code', width: 130 },
  {
    field: 'title',
    headerName: 'Title',
    width: 130,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Card
      sx={{
        flexGrow: { md: 1 },
        display: { md: 'flex' },
        height: { xs: 800, md: 2 },
        flexDirection: { md: 'column' },
      }}
    >
      <DataGrid
        checkboxSelection
        disableRowSelectionOnClick
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        sx={{ [`& .${gridClasses.cell}`]: { alignItems: 'center', display: 'inline-flex' } }}
      />
    </Card>
  );
}
