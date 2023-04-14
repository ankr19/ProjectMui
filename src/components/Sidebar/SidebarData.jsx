import Dashboard from "../../pages/Dashboard/Dashboard";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import TerminalIcon from '@mui/icons-material/Terminal';
import UploadFileIcon from '@mui/icons-material/UploadFile';
export const SideData = [
    {
        id: 1,
        label: "Dashboard",
        icon: <DashboardIcon />,
        // comp: Dashboard,
        path: "/dashboard",
    },
    {
        id: 2,
        label: "Batches",
        icon: <BatchPredictionIcon />,
        path: "/batches"
    },
    {
        id: 3,
        label: "Pics",
        icon: <PhotoAlbumIcon/>,
        path: "/pics"
    },
    {
        id: 4,
        label: "Esps",
        icon: <TerminalIcon/>,
        path: "/esps"
    },
    {
        id: 5,
        label: "Upload",
        icon: <UploadFileIcon/>,
        path: "/upload"
    }
]