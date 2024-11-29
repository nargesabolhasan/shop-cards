import CardComponent from "./components/cards";
import appleWatchImage from "./assets/images/appleWatch.jpg";
import iphoneImage from "./assets/images/iphone.png";
import airpodsImage from "./assets/images/airpods.jpg";
import { Box, Container } from "@mui/material";
import HeaderComponent from "./components/header";
import Grid from "@mui/material/Grid2";

const cardList = [
  {
    id: 1,
    title: "iphone",
    caption:
      " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

    image: iphoneImage,
  },
  {
    id: 2,
    title: "apple watch",
    caption:
      " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

    image: appleWatchImage,
  },
  {
    id: 3,
    title: "airpods",
    caption:
      " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

    image: airpodsImage,
  },
];

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <HeaderComponent />
      <Grid container spacing={2}>
        {cardList.map((item) => (
          <CardComponent image={item.image} key={item.id} />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
