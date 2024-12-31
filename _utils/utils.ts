import { Appearance, useColorScheme } from "react-native";

export const defaultState = {
    default_password: '',
    default_isPasswordGenerated: false,
    default_lowercase: true,
    default_uppercase: true,
    default_numbers: true,
    default_symbols: true,
};

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
    
    // WILL NOT WORK WITH forEach
    // temp.forEach((_, idx) => {
    //     let randomIndex = Math.floor(Math.random() * characters.length);
    //     console.log('temp[idx] :>> ', characters.charAt(randomIndex));
    //     temp[idx] = characters.charAt(randomIndex);
    // });
    
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        temp[i] = characters[randomIndex];
    }
    return temp.join('');
};

export const resetPassword = () => {
    return defaultState;
};

/**
 * check whether the device color theme is light or dark
 */
export const isDarkMode = () => Appearance.getColorScheme() === 'dark';

/**
 * get the text color based on the device color theme
 */
export const getSchemeBasedColor = (inverted: boolean = false) => (!inverted && isDarkMode()) ? '#F4F4F8' : '#1E2019';

/**
 * Get the text style object based on the device color theme 
 */
export const getSchemeBasedColorStyle = (inverted: boolean = false) => {
    return {
        color: getSchemeBasedColor(inverted)
    };
}