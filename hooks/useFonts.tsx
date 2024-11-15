import * as Font from "expo-font";
 
export const useFonts = async () =>
  await Font.loadAsync({
    "SpaceMono-Regular": require('@/assets/fonts/SpaceMono-Regular.ttf'),
    vinque: require('@/assets/fonts/vinque rg.otf'),
    MoriaCitadel: require('@/assets/fonts/MoriaCitadel.ttf'),
    Norse: require('@/assets/fonts/Norse.otf'),
    'Norsebold': require('@/assets/fonts/Norsebold.otf'),
  });