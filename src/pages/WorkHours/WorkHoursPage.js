import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";

import BaseTable from "../../components/tables/BaseTable";
import TotalTable from "../../components/tables/TotalTable";

import {
  WorkHoursTableColums,
  TechEngineers,
} from "../../config/data/WorkHoursTableColums";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function apllyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const WorkHoursPage = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState(new Date());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (isLoaded) {
    return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <DesktopDatePicker
              label="From Date"
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="To Date"
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Billable Hours" {...apllyProps(0)} />
            <Tab label="Non-Billable Hours" {...apllyProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <div>
            <BaseTable
              name="Billable Hours"
              columns={WorkHoursTableColums}
              data={[]}
            />
            <br />
            <TotalTable columns={TechEngineers} data={[]} />
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <BaseTable
            name="Non-Billable Hours"
            columns={WorkHoursTableColums}
            data={[]}
          />
          <br />
          <TotalTable columns={TechEngineers} data={[]} />
        </TabPanel>
      </div>
    );
  } else {
    // return (
    // )
  }
};

export default WorkHoursPage;
