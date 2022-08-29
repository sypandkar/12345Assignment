const MobileStyles = {
    containerImp: {
        marginRight: 'auto',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        color: "Black",
        marginBottom: "50px",
    },
    card: {
        background: "#F7F7F7",
        boxShadow: "none",
        padding: 10
    },
    button: {
        marginLeft: "25px",
        fontSize: "17px",
        padding: "8px",
        background: "#F7F7F7",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#CC0001",
        color: "#CC0001",
        textTransform: "none",
        width: "80%",
        height: 48,
        borderRadius: 24,
        marginTop: "25px",

        "&:hover": {
            background: "white"
        }
    },
    buttonSelected: {
        marginLeft: "25px",
        fontSize: "17px",
        padding: "8px",
        background: "#CC0001",
        color: "white",
        textTransform: "none",
        width: "80%",
        borderRadius: "20px",
        marginTop: "25px",

        "&:hover": {
            background: "#CC0001"
        }
    },
    buttonArrow: {
        paddingLeft: "35px",
        color: "#CC0001",
    },
    heading: {
        marginBottom: '10px',
        fontSize: 15,
        fontWeight: "500",
    },
    cardImage: {
        width: 30
    },
    subheading: {
        fontSize: 12,
        fontWeight: "700",
    },
    cardContent: {
        fontSize: 13,
        fontWeight: "600",
    },
}
export default MobileStyles;