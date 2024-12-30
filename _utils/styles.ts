import { Dimensions, StyleSheet } from "react-native";
import { getSchemeBasedColor } from "./utils";

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
    headingText: {
        color: color,
        fontWeight: 'bold',
        fontSize: 32,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 4,
        margin: 4
    },
    button: {
        backgroundColor: color,
        padding: 8,
        borderRadius: 5,
        margin: 4,
    },
    buttonText: {
        color: getSchemeBasedColor(true),
        fontSize: 16,
        fontFamily: 'Arial',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        width: screenWidth * 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    inputBar: {
        borderWidth: 1,
        borderColor: color,
        borderRadius: 5,
        // width: screenWidth * 0.2,//300,
        // height: screenHeight * 0.05,//50,
        // padding: 4,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 2,
        padding: 2,
        flexDirection: 'column',
    },
    inputHolder: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    actionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 4,
        margin: 4,
    },
});