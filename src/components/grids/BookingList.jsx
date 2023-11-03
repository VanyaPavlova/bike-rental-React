import { useState } from "react";
import { Grid, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../header/Header";
import { useTheme } from "@mui/material";
import { bookingService } from "../../services/BookingService";

const BookingList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.model);
  const [bookings, setBookings] = useState(bookingService.getBookings());

  const columns = [
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "bikeId",
      headerName: "Bike",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "startDate",
      headerName: "startDate",
      flex: 1,
    },
    {
      field: "endDate",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Button sx={{ color: colors.greenAccent[700] }}>
              Cancel Booking
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Grid m="20px" width="100%" sx={{ m: 2, p: 2 }}>
      <Header
        title="Bookings"
        subtitle="List of Bookings for Future Reference"
      />
      <Grid
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={bookings}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Grid>
    </Grid>
  );
};

export default BookingList;
