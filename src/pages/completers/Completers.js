import { Box } from "@mui/material";
import ReusableTable from "../../components/ReusableTable";

const Completers = () => {
  const columns = [
    { label: "S.No", field: "sno" },
    { label: "Name", field: "name" },
    { label: "Completed Challenges", field: "completed" },
  ];

  const data = [
    { sno: 1, name: "John Doe", completed: 5 },
    { sno: 2, name: "Jane Smith", completed: 3 },
  ];

  return (
    <Box p={3}>
      <h2>Completers</h2>
      <ReusableTable columns={columns} data={data} />
    </Box>
  );
};

export default Completers;
