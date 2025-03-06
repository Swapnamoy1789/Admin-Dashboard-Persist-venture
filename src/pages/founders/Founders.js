import { useSelector, useDispatch } from "react-redux";
import { addFounder } from "../../redux/foundersSlice";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import ReusableTable from "../../components/ReusableTable";
import AddDialog from "../../components/AddDialog";

const Founders = () => {
  const founders = useSelector((state) => state.founders);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const columns = [
    { label: "S.No", field: "sno" },
    { label: "Profile", field: "profile" },
    { label: "Position", field: "position" },
    { label: "Location", field: "location" },
    { label: "Bio", field: "bio" },
    { label: "Languages", field: "languages" },
    { label: "Regional Expertise", field: "regional_expertise" },
    { label: "Tech Expertise", field: "tech_expertise" },
    { label: "Business Expertise", field: "business_expertise" },
    { label: "Social Links", field: "social_links" },
  ];

  const fields = [
    { label: "Profile", name: "profile", type: "text" },
    { label: "Position", name: "position", type: "text" },
    { label: "Location", name: "location", type: "text" },
    { label: "Bio", name: "bio", type: "text" },
    { label: "Languages", name: "languages", type: "text" },
    { label: "Regional Expertise", name: "regional_expertise", type: "text" },
    { label: "Tech Expertise", name: "tech_expertise", type: "text" },
    { label: "Business Expertise", name: "business_expertise", type: "text" },
    { label: "Social Links", name: "social_links", type: "text" },
  ];

  const formattedData = founders.map((founder, index) => ({
    sno: index + 1,
    ...founder,
  }));

  const handleAddFounder = (data) => {
    dispatch(addFounder(data));
  };

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
        alignItems={"center"}
      >
        <h2>Founders Management</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          + Add Founder
        </Button>
      </Box>

      <ReusableTable columns={columns} data={formattedData} />
      <AddDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAddFounder}
        title="Add Founder"
        fields={fields}
      />
    </Box>
  );
};

export default Founders;
