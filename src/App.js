import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, Paper } from '@mui/material';
import Comment from './components/Comment';
import data from './data.json';
import Reply from './components/Reply'
import { useState } from 'react';
import CurrentUser from './components/CurrentUserComment';
import CurrentUserReply from './components/CurrentUserReply';




const theme = createTheme({
  palette: {
    main: {
      moderateBlue: 'hsl(238, 40%, 52%)',
      softRed: 'hsl(358, 79%, 66%)',
      lightGrayishBlue: 'hsl(239, 57%, 85%)',
      paleRed: 'hsl(357, 100%, 86%)',
    },
    neutral: {
      darkBlue: 'hsl(212, 24%, 26%)',
      grayishBlue: 'hsl(211, 10%, 45%)',
      lightGray: 'hsl(223, 19%, 93%)',
      veryLightGray: 'hsl(228, 33%, 97%)',
      white: 'hsl(0, 0%, 100%)'
    }
  },
});


function App() {
  let currentUser = data.currentUser.username
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper sx={{backgroundColor: 'neutral.veryLightGray', py: '20px', px: '20px'}}>
          {data.comments.map((comment, index) => {
            if (comment.user.username === currentUser) {
              return (
                <>
                  <CurrentUser 
                  key={comment.id}
                  score={comment.score}
                  image={require(`${comment.user.image.png}`)}
                  username={comment.user.username}
                  createdAt={comment.createdAt}
                  content={comment.content}/>
                  {comment.replies.map((reply, index) => {
                    if(reply) {
                      return (
                        <Reply 
                          key={index}
                          score={reply.score}
                          image={require(`${reply.user.image.png}`)}
                          username={reply.user.username}
                          createdAt={reply.createdAt}
                          content={reply.content} 
                        />
                      )
                    }
                  })}
                </>
              )
            }
            return (
              <>
                 <Comment 
                  key={comment.id}
                  score={comment.score}
                  image={require(`${comment.user.image.png}`)}
                  username={comment.user.username}
                  createdAt={comment.createdAt}
                  content={comment.content}/>
                {comment.replies.map((reply, index) => {
                    if(reply) {
                      if (reply.user.username === currentUser) {
                        return (
                          <CurrentUserReply
                            key={index}
                            score={reply.score}
                            image={require(`${reply.user.image.png}`)}
                            username={reply.user.username}
                            createdAt={reply.createdAt}
                            content={reply.content}
                            replyingTo={reply.replyingTo}
                          />
                        )
                      }
                      return (
                        <Reply
                            key={index}
                            score={reply.score}
                            image={require(`${reply.user.image.png}`)}
                            username={reply.user.username}
                            createdAt={reply.createdAt}
                            content={reply.content}
                            replyingTo={reply.replyingTo}
                          />
                      )
                    }
                  })}
              </>
              
            )
          })}
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
