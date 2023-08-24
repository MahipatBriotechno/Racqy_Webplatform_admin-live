import React from 'react'
import LoginModal from './LoginModal'
import bg from '../../../images/background.jpg'
import { makeStyles } from '@material-ui/core/styles'
import HomeContent from './HomeContent'
import { Box, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    bgImage: {
        // position: 'absolute',
        // maxWidth: '100%',
        // maxHeight: '100%',
        // height: 'auto',
        // width: '100%'
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: '30px',
        marginTop: '40px'
    },
    dialog_like: {
        backgroundColor: "#fff",
        width: '600px',
        fontFamily: 'DM Sans',
        borderRadius: "6px",
        boxShadow: "2px 2px 10px 0px black",

    },
}))
function Home() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.bgImage} maxWidth='lg' >
                <div className={classes.dialog_like}>
                    <LoginModal />
                </div>
            </Box>
            <div>
                <HomeContent />
            </div>
        </>
    )
}

export default Home