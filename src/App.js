import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';

function App() {
  return (
    <Box>
      {/* Navbar */}
      <Stack spacing={2} direction="row"  justifyContent="space-evenly">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;