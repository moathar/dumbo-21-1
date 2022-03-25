import * as React from "react";
import { UserStore } from "../../store/userStore";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardHeader,
  Box,
  Tab
} from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Settings from "./profile-settings";

export default function Profile() {
  // todo get the user name from the store.
  const userName = UserStore.useState((s) => s.name);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card>
          {/* <CardHeader title={userName}></CardHeader> */}
          <CardContent>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    flexGrow: 1,
                    bgcolor: "background.paper",
                    display: "flex"
                    // height: 224
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    // orientation="vertical"
                    aria-label="Profile page"
                    selectionFollowsFocus
                  >
                    <Tab label="General" value="1" />
                    <Tab label="Contact" value="2" />
                    <Tab label="Business" value="3" />
                    <Tab label="Settings" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  You are logged in as{" "}
                  <span style={{ color: "green" }}>{userName}</span>
                </TabPanel>
                <TabPanel value="2">
                  Your contact details will appear here
                </TabPanel>
                <TabPanel value="3">
                  Your business details will appear here
                </TabPanel>
                <TabPanel value="4">
                  <Settings />{" "}
                </TabPanel>
              </TabContext>
            </Box>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
    // <div style={{ padding: "1rem 0", paddingLeft: "10px" }}>
    //   <h1>Customer Details:</h1>

    //   <div style={{ padding: "1rem 0", paddingLeft: "50px" }}>
    //     Name: {customer.name} | Number: {customer.number} | Type:{" "}
    //     {customer.type}
    //   </div>
    // </div>
  );
}
