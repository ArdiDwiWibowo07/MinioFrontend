import React, { useEffect, useState } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";
import { Divider, Typography } from "@mui/material";

//defining columns outside of the component is fine, is stable
const columns = [
  {
    accessorKey: "Make",
    header: "Make",
  },
  {
    accessorKey: "Model",
    header: "Model",
  },

  {
    accessorKey: "VIN (1-10)",
    header: "VIN (1-10)",
  },
  {
    accessorKey: "County",
    header: "County",
  },
  {
    accessorKey: "City",
    header: "City",
  },
  {
    accessorKey: "State",
    header: "State",
  },
];

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    const response = await axios.get("http://localhost:5000/vehicles");
    setData(response.data);
  };

  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ m: 2 }}>
        Table Electric Vehicle Population
      </Typography>
      <Divider sx={{ m: 2 }} />
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
        positionToolbarAlertBanner="bottom"
        initialState={{ showColumnFilters: true }}
        sx={{ width: "100%", display: "table", tableLayout: "fixed" }}
      />
    </div>
  );
};

export default Table;
