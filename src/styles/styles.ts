import { Colors, Radius, Spacing } from "@/constants/theme";
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
    addView:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-end',
      position:'absolute',
      height,
      width,
      paddingVertical: Spacing.three + 105,
      paddingHorizontal: Spacing.three
    },
    add:{
      padding:12,
      borderRadius:200,
      backgroundColor:Colors.primary
    },
    authImage:{
      height:height/3,
      width:'100%'
    },
    authImageView:{
      flex:1,
      backgroundColor:'#35353535',
      alignItems:'center',
      justifyContent:'flex-end',
      padding:Spacing.five
    },
    textInputView:{
      borderWidth:1,
      borderColor:theme.line,
      padding:Spacing.one,
      borderRadius: Radius.sm,
      flexDirection:'row',
      alignItems:'center',
      paddingRight:Spacing.two
    },
    line:{
      backgroundColor:theme.line,
      height:1,
      flex:1
    },
    socialRow: {
      flexDirection: "row",
      gap: Spacing.three,
      marginVertical:Spacing.two,
      marginHorizontal:Spacing.three
    },
    socialBtn: {
      flex: 1,
      height: 46,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.line,
      backgroundColor: theme.card,
      alignItems: "center",
      justifyContent: "center",
      flexDirection:'row'
    },
    createLabelView:{
      flexDirection:'row',
      margin:Spacing.three,
      marginBottom:0
    },
    createLabel:{
      height:4,
      borderRadius:Radius.md,
    },
    registerInfo:{
      padding:Spacing.two,
      backgroundColor:theme.contrast,
      borderRadius:Radius.sm
    },
    option:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:theme.background,
      padding:Spacing.three,
      borderWidth:1,
      borderRadius:Radius.md,
      marginVertical:Spacing.two,
    },
    optionCircle:{
      borderWidth:1,
      borderColor:theme.line,
      borderRadius:Radius.pill,
      width:20,
      height:20,
      alignItems:'center',
      justifyContent:'center'
    },
    tabBarContainer: {
      position: "absolute",

      bottom: 20,
      left: 0,
      right: 0,

      alignItems: "center",
    },

    navBar: {
      width: width - 36,
      height: 50,

      backgroundColor: "#062D3D",

      borderRadius: Radius.md,

      flexDirection: "row",

      alignItems: "center",
      justifyContent: "space-around",

      paddingHorizontal: 20,

      // iOS shadow
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.15,
      shadowRadius: 15,

      // Android
      elevation: 8,
    },

    tab: {
      width: 30,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },

    activeIndicator: {
      position: "absolute",
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: Colors.primary,
      top: 0,
      left: 7,
    },
});