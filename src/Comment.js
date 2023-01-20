import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import amy from './assets/avatars/image-amyrobson.png'
import { Container } from '@mui/system';
import plusIcon from './assets/icon-plus.svg'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    // at desktop viewport change flex direction of card:  display: 'flex', flexDirection: 'row-reverse'
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box>
            <Container sx={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
                <Avatar alt="Amy Robson" src={amy} />
                <Typography variant="subtitle2" gutterBottom>
                    amyrobson
                </Typography>
                <Typography variant="body1" gutterBottom sx={{color: 'gray'}}>
                    1 month ago
                </Typography>
            </Container>
            <Container>
                <Typography  sx={{color: 'gray', mt: '10px'}}>
                    Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. 
                    You've nailed the design and the responsiveness at various breakpoints works really well.
                </Typography>
            </Container>
        </Box>
      
      </CardContent>
      {/*  at desktop view add the following to box: display: 'flex', flexDirection: 'column'*/}
      <CardActions>
        <Box sx={{ borderRadius: '8px', p: '7px', backgroundColor: 'neutral.veryLightGray', display: 'flex', gap: '10px', alignItems: 'center'}}>
            <Typography variant="body1" gutterBottom>
                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
            </Typography>
            <Typography variant="subtitle2" gutterBottom sx={{ color: 'main.moderateBlue'}}>
                12
            </Typography>
            <Typography variant="body1" gutterBottom>
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>
            </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}