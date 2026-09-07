import { Colors, Spacing } from "@/constants/theme";
import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// export type ThemeType = typeof Colors.light;
export function useStyles() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colorScheme === "light" ? Colors.light : Colors.dark;
  const {width, height} = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  // Pass the active theme colors into the factory function below
  return createStyles(theme, width, height, insets);
}


const createStyles = (theme:any, width:any, height:any, insets:any)=>StyleSheet.create({
    button: {
        height:60,
        borderRadius: 16,
        alignItems: "center",
        justifyContent:'center',
        backgroundColor:Colors.primary 
    },
    button2:{
        borderWidth:1,
        borderColor:theme.text,
        alignItems:'center',
        justifyContent:'center',
        height:60,
        borderRadius:16
    },
    row:{
      flexDirection:'row',
      alignItems:'center',
    },
    skip: {
      position: "absolute",
      top: 50,
      right: 20,
      zIndex: 10,
      padding:Spacing.two,
      backgroundColor:"#5c534232",
      borderRadius:20
    },
    backButton:{
      borderWidth:1,
      borderColor:theme.text,
      alignItems:'center',
      justifyContent:'center',
      width:'25%',
      marginRight:10,
      height:50,
      borderRadius:16
    },
});