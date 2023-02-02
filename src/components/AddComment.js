import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Avatar from '@mui/material/Avatar';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function AddComment(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Container sx={{display: 'flex', justifyContent: 'space-around', padding: '0px' }}>
            <TextField fullWidth label="Add a comment" id="fullWidth" rows={3} multiline/>
        </Container>
        <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Avatar alt={props.currentUser} src={props.image} />
            <Button size="large" variant="contained">Send</Button>
        </Container>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}