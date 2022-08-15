import React from 'react'
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
    const [progress, setProgress] = React.useState(0);
    return (
        <div>
            <Button className='upload-btn' variant="outlined" component="label" startIcon={<MovieIcon/>} style={{ marginTop: '0.5rem' }}>
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <LinearProgress variant="determinate" value={10} style={{marginTop:"0.2rem"}} />
        </div>
    )
}

export default Upload