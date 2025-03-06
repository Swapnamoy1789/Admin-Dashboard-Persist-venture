import { useSelector, useDispatch } from "react-redux";
import { addChallenge } from "../../redux/challengesSlice";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import ReusableTable from "../../components/ReusableTable";
import AddDialog from "../../components/AddDialog";

const Challenges = () => {
  const challenges = useSelector((state) => state.challenges);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const columns = [
    { label: "S.No", field: "sno" },
    { label: "Title", field: "title" },
    { label: "Funding", field: "funding" },
    { label: "Deadline", field: "deadline" },
    { label: "Description", field: "description" },
  ];

  const fields = [
    { label: "Title", name: "title", type: "text" },
    { label: "Funding", name: "funding", type: "number" },
    { label: "Deadline", name: "deadline", type: "date" },
    { label: "Description", name: "description", type: "text" },
  ];

  const formattedData = challenges.map((challenge, index) => ({
    sno: index + 1,
    ...challenge,
  }));

  const handleAddChallenge = (data) => {
    const formattedData = {
      ...data,
      funding: `₹${data.funding}.00`,
    };
    dispatch(addChallenge(formattedData));
  };

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
        alignItems={"center"}
      >
        <h2>Challenges Management</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          + Add Challenge
        </Button>
      </Box>

      <ReusableTable columns={columns} data={formattedData} />
      <AddDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAddChallenge}
        title="Add Challenge"
        fields={fields}
      />
    </Box>
  );
};

export default Challenges;
