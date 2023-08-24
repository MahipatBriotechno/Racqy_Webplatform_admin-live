import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    shadowBox: {
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 5%) 0px 0px 0px 1px',
        width: '100%',
        marginBottom: "30px",
        borderRadius: "10px",
        barder: '1px solid #EAEAED',
        paddingLeft: '10px',
        paddingRight: '30px',
        "& .titleGray": {
            color: "#B4B4BC",
            fontSize: "15px",
            fontFamily: 'DM Sans',
            fontWeight: 300
        },
        background: 'white',
        "& .imgGray": {
            width: '60px',
            marginRight: '10px'
        }
    },
    contentRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowImg: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%',
        marginLeft: '10px',
        padding: '10px'
    },
    numRoot: {
        color: '#000000',
        fontSize: '30px',
        fontFamily: 'DM Sans',
        marginRight: '20px',

    },
    tagGreen: {
        background: '#EAFADD',
        borderRadius: '10px',
        color: '#67B724',
        paddingRight: '15px',
        paddingLeft: '10px',
        fontSize: '12px'
    },
    tagRed: {
        background: '#FFDBE1',
        borderRadius: '10px',
        color: '#FD6E84',
        paddingRight: '15px',
        paddingLeft: '10px',
        fontSize: '12px'
    }
}))

function CardView({ logo, grayTitle, digit, isTagGreen, tagLine }) {
    const classes = useStyles();
    return (
        <div>
            <Grid md={8}>
                <div className={classes.shadowBox}>
                    <div className={classes.contentRoot}>
                        <div className={classes.rowImg}>
                            <img src={logo} className='imgGray' alt="clip" />
                            <Typography className='titleGray'>{grayTitle}</Typography>
                        </div>
                        <div className={classes.rowImg}>
                            <Typography className={classes.numRoot}>{digit}</Typography>
                            <Typography className={isTagGreen ? classes.tagGreen : classes.tagRed}>{tagLine}</Typography>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default CardView