const MobileStyles = {
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
    mainContainer: {
        display: "flex", 
        flexDirection: "column-reverse"
    },
    mainImage: {
        width: '100%',
        height: '100%',
        marginTop: "-20px",
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
        width: "100%",
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
        width: "100%",
        height: 44,
        marginTop: "10px",
        padding: 20,
        textTransformation: "none",
    },
    selectDiv: {
        marginTop: "39px",
        width: "100%",
    },
    headingText: {
        margin: "20px 0 0 0",
        fontSize: "25px",
        fontWeight: "700",
    },
    subheadingText: {
        margin: '0',
        color: "black",
        fontSize: 14,
        fontWeight: 500,
        marginTop: 10,
        lineHeight: "26px",
    }

};
export default MobileStyles;