import { Dimensions, StyleSheet } from "react-native";
import { getSchemeBasedColor, getSchemeBasedColorStyle } from "./utils";

let color = getSchemeBasedColor();
let { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    normalText: {
        color: color,
        fontWeight: 'normal',
        fontSize: 16,
    },
    inputLabelText: {
        color: color,
        fontWeight: 'bold',
        fontSize: 24,
        fontVariant: ['small-caps', 'tabular-nums'],
    },
    headingText: {
        color: color,
        fontWeight: 'bold',
        fontSize: 32,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        margin: 4
    },
    button: {
        // backgroundColor: color,
        padding: 8,
        borderRadius: 5,
        margin: 4,
    },
    buttonDisabled: {
        backgroundColor: '#738290',
    },
    buttonEnabled: {
        backgroundColor: "#D3AB9E",
    },
    buttonText: {
        color: getSchemeBasedColor(false),
        fontSize: 16,
        fontFamily: 'Arial',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    generatedPasswordText: {
        // color: color,
        fontSize: 24,
        fontWeight: 'bold',
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        // width: screenWidth * 1,
        justifyContent: 'space-around',
        // alignItems: 'center',
    },
    inputBar: {
        borderWidth: 1,
        borderColor: color,
        borderRadius: 5,
        // width: screenWidth * 0.2,//300,
        // height: screenHeight * 0.05,//50,
        // padding: 4,
    },
    inputNumeric : {
        width: screenWidth * 0.2,//300,
        height: screenHeight * 0.05,//50,
        textAlign: 'center',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 4,
        padding: 4,
        flexDirection: 'column',
    },
    inputHolder: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 4,
        margin: 4,
    },
    actionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 4,
        margin: 4,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 4,
        margin: 12,
        backgroundColor: getSchemeBasedColor(),
        borderRadius: 5,

    },
    cardElevated: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});