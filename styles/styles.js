import { StyleSheet } from "react-native";

/**Views styles */
export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flex: 1
    },
    checkin: {
        height: "100%",
        alignItems: "center",
        marginTop: "30%"
    },
    info: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        marginLeft: "5%",
        marginRight: "5%",
        alignItems: "center"
    },
    info2: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        backgroundColor: "#FFFFFF",
        marginLeft: "5%",
        marginRight: "5%",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        color: "#FFFFFF",
        margin: 10
    },
    text2: {
        fontSize: 16,
        color: "#333333",
        margin: 10,
        fontWeight: "600"
    },
    title: {
        fontSize: 17,
        color: "#FFFFFF",
        marginBottom: 40
    },
    button: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 40,
        backgroundColor: "#BEAD8E",
        width: 150
    },
    buttonform: {
        marginTop: 25,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 40,
        backgroundColor: "#BEAD8E"
    },
    buttontext: {
        color: "#FFFFFF",
        fontWeight: "600"
    },
    data: {
        width: "100%",
        alignItems: 'center',
        marginTop: "20%"
    },
    form: {
        flexDirection: "row",
        marginTop: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    textinput: {
        borderBottomWidth: 1,
        borderBottomColor: "#BEAD8E",
        width: 200,
        paddingTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
});

/**Logo styles */
export const styleslogo = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flexDirection: "row"
    },
    logo: {
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    letter: {
        fontSize: 30,
        fontWeight: "700"
    },
    lettermark: {
        marginTop: 5,
        marginLeft: 10
    }
});

/**Topbar styles */
export const stylestopbar = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: "#000000"
    },
    topbar: {
        height: 80,
        marginTop: 40,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "#FFFFFF",
        paddingLeft: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    buttons: {
        flexDirection: "row",
        marginLeft: 15
    },
    button: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: "600"
    }
});
