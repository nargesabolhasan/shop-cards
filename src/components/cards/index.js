import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const CardComponent = ({ image }) => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Card sx={{ maxWidth: 345 }}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: { xs: 250, md: 350 },
            objectFit: "contain",
          }}
          src={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">shop</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardComponent;
