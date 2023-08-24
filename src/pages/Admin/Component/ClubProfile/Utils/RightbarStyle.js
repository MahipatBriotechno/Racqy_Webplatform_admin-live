import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root_main: {
        flexGrow: 1,
        "& h1, h2, h3, h4, h5, h6, p": {
            margin: "0 0 15px",
            fontFamily: "dm sans",
        },
    },
    root: {
        flexGrow: 1,
        padding: "0 0 100px",
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    shadowBox: {
        boxShadow: "0px 0px 15px 0px #8080803b",
        padding: "18px",
        marginTop:'10px',
        marginRight:'10px',
        marginBottom: "10px",
        borderRadius: "20px",
        "& .title": {
            color: "#0a3133",
            fontSize: "15px",
            marginBottom: "50px",
            fontFamily:'Plus Jakarta Sans',
            fontWeight:500
        },
        background: 'white'
    },
    wrapper: {
        flexWrap: "wrap",
        display: "flex",
        gap: "13px",
        "& .item": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            padding: "8px 15px",
            borderRadius: "20px",
            border: "1px solid #e1e1e7",
            backgroundColor: "#f8f8f8",
            color: "#0a3133",
            fontWeight: "600",
        },
    },

    day: {
        borderBottom: "1px solid #eaeaed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      
        "& :last-child": {
            borderBottom: "0px solid #eaeaed",
        },
        "& .daytext": {
            fontSize: "12px",
            color: "#0a3133",
            fontFamily:'Plus Jakarta Sans',
            fontWeight:500
        },
        "& .date": {
            fontSize: "12px",
            color: "#0a3133",
            fontFamily:'Plus Jakarta Sans',
            fontWeight:500
        },
    },
    mapBox: {
        maxWidth: "100%",
        height: "293px",
        overflow: "hidden",
    },
    mapBottomLogo: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        top: "-57px",
        "& .logoBox": {
            backgroundColor: "#0a3133",
            width: "101px",
            height: "101px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            marginBottom: "20px",
            border: "6px solid #fff",
        },
        "& .title": {
            color: "#0a3133",
            fontSize: "22px",
            marginBottom: "5px",
        },
        "& .location": {
            display: "flex",
            gap: "5px",
            fontSize: "15px",
            color: "#979d9d",
            fontWeight: "600",
            marginBottom: "15px",
        },
    },

    // Download App
    // ========================================================================
    // ========================================================================

    tabs_style: {
        "& .MuiTabs-flexContainer": {
            borderBottom: "3px solid #f0f0f0",
        },
        "& .PrivateTabIndicator-colorSecondary-28, .MuiTabs-indicator": {
            backgroundColor: "#209ca3",
            top: "36px",
        },
        "& .MuiTab-wrapper": {
            alignItems: "flex-start",
        },
        "& .MuiTab-textColorInherit.Mui-selected": {
            color: "#209ca3",
        },
        "& .MuiTab-textColorInherit": {
            color: "#cbcccc",
            paddingLeft: "0",
        },
        "& .MuiTab-root": {
            minHeight: "35px",
        },
        "& .tabPanel": {
            padding: "20px 0",
        },
    },

    cards: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
    },
    cardRounded: {
        width: "400px",
        maxWidth: "100%",
        borderRadius: "20px",
        "& .header": {
            // backgroundColor: "#db5d5d",
            color: "#fff",
            padding: "20px",
            borderRadius: "30px 30px 0 0",
            // backgroundImage: `url(${"static/src/img/main.jpg"})`
        },
        "& .bottom": {
            display: "flex",
            gap: "7px",
            "& h5": {
                marginBottom: 0,
            },
        },
        "& .top": {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
            "& span": {
                fontSize: "13px",
                fontWeight: "600",
            },
        },
        "& .body": {
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "center",
            border: "2px solid #80808061",
            borderRadius: "0 0 30px 30px",
            borderTop: "none",
        },
        "& .item": {
            display: "flex",
            gap: "15px",
            alignItems: "center",
            "& h5": {
                marginBottom: "0px",
            },
            marginBottom: "10px",
        },
        "& .right": {
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            width: "100px",
        },
        "& .numbers": {
            display: "flex",
            gap: "7px",
            marginTop: "20px",
            "& span": {
                color: "#6cb430",
                backgroundColor: "#e5f5d9",
                width: "23px",
                height: "23px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
            },
        },
    },
    btn_circle: {
        borderRadius: "50px",
        height: "45px",
        width: "45px",
        minWidth: "45px",
        border: "2.5px dashed #1b8186 !important",
        backgroundColor: "#e0eff0",
    },

    // =======================================================
    // ==============================================================

    sport_mans_item: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        borderBottom: "2px solid #eaeaed",
        paddingBottom: "20px",
        cursor: 'pointer',

        "& .right": {
            "& span": {
                fontSize: "13px",
                fontWeight: "500",
                color: "#afb2b4",
            },
        },
        "& .name": {
            marginBottom: "0px",
            fontSize: "17px",
            fontWeight: "600",
            color: "#0a3133",
        },
        "& .images": {
            display: "flex",
            gap: "10px",
            marginTop: "10px",
        },
    },
    sport_mans: {
        display: "grid",
        gridTemplateColumns: "auto auto",
    },

    pagination_style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    // ---------------------------------end
}));

export { useStyles };
