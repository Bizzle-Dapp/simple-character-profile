import React, { useState } from 'react';
import './App.css';
import { Grid, Paper, Input, Typography } from '@mui/material';

function App() {

  const [characterProfile, setCharacterProfile] = useState(
    {
      name: '',
      background: '',
      biography: ''
    }
  );

  const handleProfileChange = (event) => {
    const attribute = event.target.id ? event.target.id : event.target.name;
    const val = event.target.value;
    setCharacterProfile((currentState) => (
      {
        ...currentState,
        [attribute]: val
      }
    ))
  }

  return (
    <div className="App App-header">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper sx={{ margin: '1rem', padding: '1rem', minHeight: '80vh' }}>
            <Typography>
              Name:
            </Typography>
            <Input
              id='name'
              value={characterProfile.name}
              onChange={handleProfileChange} />
            <br /><br />
            <Typography>
              Background:
            </Typography>
            <select
              name='background'
              value={characterProfile.background}
              onChange={handleProfileChange}>
              <option></option>
              <option>Blacksmith</option>
              <option>Farmer</option>
            </select>
            <br /><br />
            <Typography>
              Biography:
            </Typography>
            <textarea id='biography'
              value={characterProfile.biography}
              onChange={handleProfileChange}
              style={{width:"90%"}}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ margin: '1rem', padding: '1rem', minHeight: '80vh' }}>
            <Typography>Character Name:</Typography>
            <Typography> {characterProfile.name} </Typography>
            <br /><br/>
            <Typography>Character Background:</Typography>
            <Typography> {characterProfile.background} </Typography>
            <br/><br/>
            <Typography>Character Biography:</Typography>
            <Typography> {characterProfile.biography} </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
