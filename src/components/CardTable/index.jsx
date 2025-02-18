import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const MultiplicationCard = ({ image, tableName, selected, onSelect }) => {
  return (
    <Box sx={{ minWidth: 275, cursor: "pointer" }} onClick={onSelect}>
      <Card
        variant="outlined"
        sx={{
          border: selected ? "3px solid violet" : "1px solid none",
          boxShadow: selected ? "0px 0px 10px purple" : "none",
        }}
      >
        <CardContent>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <img src={image} alt={tableName} height={140} />
            </div>
            <div>
              <Typography variant="h5" component="div">
                {tableName}
              </Typography>
              <CardActions>
                <Button size="small"  sx={{color:"#951abe"}}>
                  {selected ? <CheckCircleRoundedIcon/> : <CheckCircleOutlineRoundedIcon/>}
                </Button>
              </CardActions>
            </div>
          </div>
        </CardContent>
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
