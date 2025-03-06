import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Challenges from "./pages/challlenges/Challenges";
import Completers from "./pages/completers/Completers";
import Founders from "./pages/founders/Founders";

const TabPanel = ({ children, value, index }) => (
  <Box role="tabpanel" hidden={value !== index} p={3}>
    {value === index && <Typography>{children}</Typography>}
  </Box>
);

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <Provider store={store}>
      <Box display="flex">
        <Sidebar
          value={value}
          handleChange={(event, newValue) => setValue(newValue)}
        />
        <Box flex={1} p={2}>
          <TabPanel value={value} index={0}>
            <Challenges />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Completers />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Founders />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography>Subscribers Section</Typography>
          </TabPanel>
        </Box>
      </Box>
    </Provider>
  );
};

export default App;
