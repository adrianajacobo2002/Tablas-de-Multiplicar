
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const MultiplicationCard = ({ image, tableName, selected, onSelect }) => {
  return (
    <Box sx={{ minWidth: 275, m: 2, cursor: "pointer" }} onClick={onSelect}>
      <Card
        variant="outlined"
        sx={{
          border: selected ? "3px solid blue" : "1px solid gray",
          boxShadow: selected ? "0px 0px 10px blue" : "none",
        }}
      >
        <CardMedia component="img" height="140" image={image} alt={tableName} />
        <CardContent>
          <Typography variant="h5" component="div">
            {tableName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{selected ? "Seleccionado" : "Seleccionar"}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

MultiplicationCard.propTypes = {
  image: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default MultiplicationCard;
