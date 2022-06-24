import React from "react";


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));





const Recipe = ({title,calories,image,ingredients})=>{

const [expanded, setExpanded] = React.useState(false);
const handleExpandClick = () => { setExpanded(!expanded); };

    return <div>




<Card sx={{ maxWidth: 325 , margin: "10px 0",}}>
      <CardHeader
        title={title}
        subheader={calories}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="missing"
      />
  
      <CardActions disableSpacing>
        <div>Ingredients</div>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardContent>
          {ingredients.map((ingredient)=>(
            <Typography paragraph>{ingredient.text}</Typography>
             ))}
        </CardContent>

      </Collapse>
    </Card>




        </div>;
    
};

export default Recipe