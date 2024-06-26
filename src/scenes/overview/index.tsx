import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select, SelectChangeEvent } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview: React.FC = () => {
  const [view, setView] = useState<"units" | "sales">("units");

  const handleChange = (event: SelectChangeEvent<"units" | "sales">) => {
    setView(event.target.value as "units" | "sales");
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={handleChange}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
