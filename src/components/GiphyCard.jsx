import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function GiphCard({ gif }) {
  return (
    <Card key={gif.id}>
      <CardActionArea>
        <CardMedia
          component='img'
          src={gif?.images?.original?.url} 
          />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {gif.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}