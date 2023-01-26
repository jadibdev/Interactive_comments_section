import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/system';
import plusIcon from './images/icon-plus.svg'


export default function CurrentUser(props) {
  return (
    // at desktop viewport change flex direction of card:  display: 'flex', flexDirection: 'row-reverse'
    <Box sx={{borderLeft: '1px solid lightgray'}}>
        <Card sx={{ minWidth: 275, mb: '20px', borderRadius: '10px', ml: '1rem', '@media (min-width: 400px)': {
			display: 'flex', 
			flexDirection: 'row-reverse',
            ml: '10rem',
            mr: '8rem'
	}}}>
            <CardContent sx={{ px: '0.5rem', py: '0.8rem'}}>
                <Box>
                    <Container sx={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
                        <Container sx={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
                            <Avatar alt="Amy Robson" src={props.image} />
                            <Typography variant="subtitle2" gutterBottom>
                                {props.username}
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{color: 'gray'}}>
                                {props.createdAt}
                            </Typography>
                        </Container>
                <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px', '@media (max-width: 400px)': {
			display: 'none', 
	} }}>
                        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                        <Typography variant="body1" gutterBottom sx={{ color: 'main.moderateBlue', fontSize: '16px', fontWeight: 'bold'}}>
                            Delete
                        </Typography>
                        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                    <Typography variant="body1" gutterBottom sx={{ color: 'main.moderateBlue', fontSize: '16px', fontWeight: 'bold'}}>
                        Edit
                    </Typography>
                </Container>
                    </Container>
                    <Container>
                        <Typography  sx={{color: '#71797E', mt: '10px' }}>
                        <span style={{ color: '#4448C5',  fontSize: '16px', fontWeight: 'bold'}}>@{props.replyingTo}</span> {props.content}
                        </Typography>
                    </Container>
                </Box>
            
            </CardContent>
      {/*  at desktop view add the following to box: display: 'flex', flexDirection: 'column'*/}
            <CardActions sx={{ display: 'flex', mb: '10px' }}>
                <Box sx={{ 
                    borderRadius: '8px', 
                    py: '2px', 
                    px: '10px',
                    backgroundColor: 'neutral.veryLightGray', 
                    display: 'flex', gap: '20px', 
                    alignItems: 'center',
                    ml: '0.9rem',
                    '@media (min-width: 400px)': {
                        flexDirection: 'column',
                        gap: '0px'
                }
                    }}>
                    <Typography variant="body1" gutterBottom sx={{ mt: '0.2rem'}}>
                        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ color: 'main.moderateBlue', fontSize: '18px', fontWeight: 'bold', mt: '0.3rem' }}>
                        {props.score}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{pb: '5px'}}>
                    <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>
                    </Typography>
                </Box>
                <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px', '@media (min-width: 400px)': {
                    display: 'none',
                }}}>
                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                    <Typography variant="body1" gutterBottom sx={{ color: 'main.moderateBlue', fontSize: '16px', fontWeight: 'bold'}}>
                        Delete
                    </Typography>
                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                    <Typography variant="body1" gutterBottom sx={{ color: 'main.moderateBlue', fontSize: '16px', fontWeight: 'bold'}}>
                        Edit
                    </Typography>
                </Container>
            </CardActions>
    </Card>
    </Box>
  );
}