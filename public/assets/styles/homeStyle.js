const Styles = {
    containerImp: {
        paddingRight: 10,
        paddingLeft: 10,
        boxSizing: 'border-box',
        color: "Black",
        marginBottom: "50px",
        marginTop: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    formControl: {
        margin: '5px',
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: '10pxp',
    },
    paper: {
        boxShadow: "none",
    },
    select: {
        width: "80%",
        boxShadow: "none",
        height: 50,
        fontSize: 18,
        "&:hover": {
            background: "#000000",
        },

        "& .MuiOutlinedInput-notchedOutline": {
            border: 0
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: 0
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: 0
        },
    },
    selectButton: {
        background: "#11B200",
        borderRadius: 2,
        color: "white",
        width: "19%",
        marginLeft: "-19.4%",
        height: 44,
        marginBottom: 5,
        padding: 20,
        textTransformation: "none",
    },
    selectButton1: {
        background: "grey",
        borderRadius: 2,
        color: "white",
        width: "19%",
        marginLeft: "-19.4%",
        height: 44,
        marginBottom: 5,
        padding: 20,
        textTransformation: "none",
    },
    arrowButton: {
        paddingLeft: "10px",
    },
    selectDiv: {
        marginTop: "50px",
        width: "100%",
    },
    headingText: {
        margin: "20px 0 0 0",
        lineHeight: "65px",
        fontSize: "56px",
        fontWeight: "700",
    },
    subheadingText: {
        margin: '0',
        color: "grey",
        fontSize: 18,
        fontWeight: 500,
        marginTop: 10,
        lineHeight: "26px",
    }

};
export default Styles;