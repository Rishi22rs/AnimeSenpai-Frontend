import light from './light'
import dark from './dark'

import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemePalette = {light,dark}

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@theme_Key', value)
    } catch (e) {
        console.log(e)
    }
}

export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@theme_Key')
      return jsonValue != null ? jsonValue : "light";
    } catch(e) {
      console.log(e)
    }
  }

export const selectedTheme="light"
