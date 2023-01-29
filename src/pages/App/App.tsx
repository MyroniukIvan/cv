import styles from './App.module.scss'
import HomePageOne from "../HomePageOne/HomePageOne";
import Card from '@mui/material/Card'
import Stars from "../../components/stars/stars";
const App = () => {
    return (
        <>
        <Stars/>
            <Card sx={{width: "305px"}}>
                <HomePageOne/>
            </Card>
        </>
    );
};

export default App;