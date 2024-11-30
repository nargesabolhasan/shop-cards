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
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/shopAction";

const CardComponent = ({ info }) => {
  const dispatch = useDispatch();

  const handleShop = (e, cardInfo) => {
    dispatch(addItem(cardInfo));
  };

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
          src={info.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {info.caption}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => handleShop(e, info)}>
            shop
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardComponent;
