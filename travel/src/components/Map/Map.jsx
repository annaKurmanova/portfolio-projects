import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


const Map = () => {
    const classes = useStyles();
    // going to be set to false if larger than 600px
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { lat: 0, lang: 0 };
    return (
        <div className={classes.mapContainer}>
            <googleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBwPvYpXbDZp2E_2xDTXtuZIqws0Vy9Ugw' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
            </googleMapReact>
        </div>
    )
}

export default Map;