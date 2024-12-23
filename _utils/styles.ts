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
    },
    buttonText: {
        color: getSchemeBasedColor(true),
        fontSize: 16,
    },
});