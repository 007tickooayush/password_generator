import { Appearance, useColorScheme } from "react-native";

export const generatePasswordStr = (passwordLength: number, addUpperCase: boolean, addLowerCase: boolean, addNumbers: boolean, addSymbols: boolean) => {
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+';

    let characters = '';

    if (addUpperCase) {
        characters += upperCase;
    }

    if (addLowerCase) {
        characters += lowerCase;
    }

    if (addNumbers) {
        characters += numbers;
    }

    if (addSymbols) {
        characters += symbols;
    }

    return createPassword(characters, passwordLength);
};

export const createPassword = (characters: string, passwordLength: number): string => {
    let temp = new Array(passwordLength);
    temp.forEach((_, idx) => {
        temp[idx] = characters.charAt(Math.round(Math.random() * passwordLength));
    });
    return temp.join('');
};

export const resetPassword = () => {

};

/**
 * check whether the device color theme is light or dark
 */
export const isDarkMode = () => Appearance.getColorScheme() === 'dark';

/**
 * get the text color based on the device color theme
 */
export const getSchemeBasedColor = (inverted: boolean = false) => (!inverted && isDarkMode()) ? '#F4F4F8' : '#1E2019';