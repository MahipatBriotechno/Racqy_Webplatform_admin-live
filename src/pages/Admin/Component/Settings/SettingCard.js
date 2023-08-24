import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import forwardIcon from '../../../../images/forward_icon.svg'


const useStyles = makeStyles((theme) => ({
    shadowBox: {
        margin: '30px',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 5%) 0px 0px 0px 1px',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: "30px",
        borderRadius: "10px",
        barder: '1px solid #EAEAED',
        paddingLeft: '10px',


        "& .titleGray": {
            color: "#000000",
            fontSize: "15px",
            fontFamily: 'DM Sans',
            fontWeight: 300
        },
        background: 'white',
        "& .imgGray": {
            width: '60px',
            marginRight: '10px'
        },
        "& .contentGray": {
            color: "#B4B4BC",
            fontSize: "12px",
            fontFamily: 'DM Sans',
            fontWeight: 300,
            textAlign: 'left',
            lineHeight: '25px'

        }
    },
    contentRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        Height:'100vh',
        width: '100%'
    },
    rowImg: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

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

function SettingCard({ title, icon, desc }) {
    const classes = useStyles();
    return (
        <div>
            <Grid md={12}>
                <div className={classes.shadowBox}>
                    <div className={classes.contentRoot}>
                        <div className={classes.rowImg}>
                            <div style={{ display: 'flex', flexDirect: 'row', alignItems: 'center' }}>
                                <img src={icon} className='imgGray' alt="clip" />
                                <Typography className='titleGray'>{title}</Typography>
                            </div>
                            <img src={forwardIcon} alt="arrow" style={{ paddingRight: '10px' }} />
                        </div>
                        <div className={classes.rowImg}>
                            <Typography className='contentGray'>{desc}</Typography>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default SettingCard