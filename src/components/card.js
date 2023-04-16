import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card , CardHeader , CardMedia , CardContent } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";



export default function FilmCard({ item, deleteProduct }) {
  
  return (
    <div style={{width:'300px', margin:"10px"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar>
            { item.title.length > 1 ? item.title[0].toUpperCase() : null}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.Date}
      />
      <CardMedia
        component='img'
        height='194'
        image={item.img}
        alt='film'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'
          onClick={() => deleteProduct(item.id)}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
          <p style={{paddingLeft:"30px",fontFamily:"fantasy"}}>{item.rating}/10</p>
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );}
