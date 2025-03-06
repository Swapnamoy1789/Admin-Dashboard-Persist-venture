import { Tabs, Tab, Box } from "@mui/material";
import { EmojiEvents, People } from "@mui/icons-material";
import ExtensionIcon from "@mui/icons-material/Extension";
import EmailIcon from "@mui/icons-material/Email";

const Sidebar = ({ value, handleChange }) => {
  return (
    <Box
      sx={{
        width: 220,
        height: "100vh",
        bgcolor: "white",
        borderRight: "1px solid #ddd",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        // sx={{ ".MuiTabs-indicator": { display: "none" } }}
      >
        <Tab icon={<ExtensionIcon />} iconPosition="start" label="Challenges" />
        <Tab icon={<EmojiEvents />} iconPosition="start" label="Completers" />
        <Tab icon={<People />} iconPosition="start" label="Founders" />
        <Tab icon={<EmailIcon />} iconPosition="start" label="Subscribers" />
      </Tabs>
    </Box>
  );
};

export default Sidebar;
