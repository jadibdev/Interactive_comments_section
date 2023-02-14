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

export default function AddReplys(props) {
  return (
    <Card sx={{ minWidth: 275, borderRadius: '10px', '@media (min-width: 400px)': {
      mx: '8rem'
    }}}>
      <CardContent sx={{'@media (min-width: 400px)': {
        display: 'flex', 
        flexDirection: 'row-reverse',
        gap: '20px'
	    }}}>
        <Container sx={{display: 'flex', padding: '0px', gap: '20px'}}>
            <TextField fullWidth label="Add a reply" id="fullWidth" rows={3} multiline sx={{
        ".MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "main.veryLightGray",
        },
      }}/>
            <Button size="large" variant="contained" sx={{height: '50%', '@media (max-width: 400px)': {
			display: 'none', 
	}}}>Reply</Button>
        </Container>
        <Container sx={{display: 'flex', justifyContent: 'space-between', mt: '20px', paddingLeft: '0px', paddingRight: '0px', '@media (min-width: 400px)': {
			width: '3%', 
	}}}>
            <Avatar alt={props.currentUser} src={props.image} />
            <Button size="large" variant="contained" sx={{'@media (min-width: 400px)': {
			display: 'none', 
	}}}>Reply</Button>
        </Container>
      </CardContent>
    </Card>
  );
}