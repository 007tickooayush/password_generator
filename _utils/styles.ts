import { StyleSheet } from "react-native";
import { getSchemeBasedColor } from "./utils";

let color = getSchemeBasedColor();

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
        padding: 4,
        margin: 4
    },
    button: {
        backgroundColor: color,
        padding: 10,
        borderRadius: 5,
        margin: 4,
    },
    buttonText: {
        color: getSchemeBasedColor(true),
        fontSize: 16,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputBar: {
        borderWidth: 1,
        borderColor: color,
        borderRadius: 5,
        width: 400,
        padding: 4,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 2
    },
    inputHolder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
    },
    actionsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 4,
        margin: 4,
    },
});