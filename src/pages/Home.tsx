import { Container, Grid, Grid2, Stack, Typography } from "@mui/material";
import Header from "../components/Header";




const Home = () => {

    return <Container maxWidth="lg" style={{paddingTop:"100px"}}>
       <Header/>
        <div> <Typography variant="h3">Welcome to Our Car Dealer Application</Typography></div>
    </Container>

}


export default Home;