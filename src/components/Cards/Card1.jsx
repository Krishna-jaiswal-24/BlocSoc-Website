import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import dummy from '../../resources/Checks.png'
export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 400 }} className='blogs'>
      <CardActionArea> 
        <CardMedia
          component="img"
          height="140"
          image={dummy}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h4" component="div" color='' fontFamily='Poppins' >
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          By Ashitosh Sable
        </Button>
      </CardActions>
    </Card>
  );
}
