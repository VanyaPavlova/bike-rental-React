import { Box, Tab } from "@mui/material";
import { useState } from "react";
import UserList from "../components/grids/UserList";
import ManagerList from "../components/grids/ManagerList";
import BookingList from "../components/grids/BookingList";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import BikeList from "../components/grids/BikeList";

export const Manager = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState("1");

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return (
    <>
      <TabContext value={currentTabIndex}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="Bike Rental Tabs">
            <Tab label="Users" value="1" />
            <Tab label="Managers" value="2" />
            <Tab label="Bikes" value="3" />
            <Tab label="Bookings" value="4" />
          </TabList>
        </Box>
      </TabContext>
      {currentTabIndex.toString() === "1" && (
        <Box sx={{ p: 3 }}>
          <UserList />
        </Box>
      )}
      {currentTabIndex.toString() === "2" && (
        <Box sx={{ p: 3 }}>
          <ManagerList />
        </Box>
      )}
      {currentTabIndex.toString() === "3" && (
        <Box sx={{ p: 3 }}>
          <BikeList />
        </Box>
      )}
      {currentTabIndex.toString() === "4" && (
        <Box sx={{ p: 3 }}>
          <BookingList />
        </Box>
      )}
    </>
  );
};
