import { StyleSheet } from "react-native";
import { getSchemeBasedColor } from "./utils";

let color = getSchemeBasedColor();

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F8'
    },
    normalText: {
        color: color,
        fontWeight: 'normal',
        fontSize: 16,
    },
});