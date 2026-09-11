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
        borderColor:theme.line,
        alignItems:'center',
        justifyContent:'center',
        height:60,
        borderRadius:16
    },
    row:{
      flexDirection:'row',
      alignItems:'center',
    },
    rowStretch:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
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
      paddingVertical: Spacing.three + 40,
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
      paddingRight:Spacing.two, 
      backgroundColor:theme.background
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
    profileImage:{
      width:45,
      height:45,
      borderRadius:200
    },
    searchView:{
      flexDirection:'row',
      alignItems:'center',
      borderWidth:1,
      borderColor:theme.line,
      borderRadius:Radius.sm,
      padding:Spacing.two,
      flexShrink:1,
      marginBottom:Spacing.three
    },
    filterButton:{
      backgroundColor:Colors.primary,
      padding:Spacing.two,
      borderRadius:Radius.sm
    },
    neighbourhood:{
      height:150,
      backgroundColor:"#00000045",
      borderRadius:Radius.md,
      justifyContent:'flex-end',
      padding:Spacing.two,
      borderWidth:1,
      borderColor:theme.line
    },
    listingView:{
      backgroundColor:theme.card,
      alignSelf:'flex-start',
      borderRadius:Radius.md,
      width:"100%",
      borderWidth:1,
      borderColor:theme.line
    },
    listingImage:{
      width:"100%",
      height:150,
      padding:Spacing.two
    },
    listingBottomView:{
      padding:Spacing.two
    },
    listingView2:{
      flexDirection:'row',
      backgroundColor:theme.card,
      minHeight:100,
      borderRadius:Radius.md,
      marginVertical:Spacing.two,
      borderWidth:1,
      borderColor:theme.line
    },
    listingImage2:{
      height:"100%",
      width:120,
      padding:Spacing.two
    },
    listingRight:{
      padding:10,
      justifyContent:'space-between',
      flexShrink:1
    },
    listingFavoriteView2:{
      justifyContent:'center',
      padding:Spacing.two,
      paddingLeft:0
    },
    tagView:{
      paddingHorizontal:Spacing.one,
      alignSelf:'flex-start',
      borderRadius:5
    },
    listingFavoriteView:{
      justifyContent:'center',
      alignItems:'center',
      padding:Spacing.two,
      alignSelf:'flex-end',
      backgroundColor:"#FFF",
      borderRadius:100,
      position:'absolute'
    },
    backView:{
      width:45,
      height:45,
      borderRadius:100,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#FFF"
    },
    detailTop:{
      height:height/2.3,
      width:'100%',
      position:'absolute',
      justifyContent:'flex-end',
      paddingHorizontal:Spacing.three,
      paddingBottom:Spacing.five
    },
    detailTop2:{
      position:'absolute', 
      zIndex:1,
      width:'100%',
      paddingHorizontal:Spacing.three,
    },
    detailView:{
      marginTop:height/2.3-Spacing.three,
      backgroundColor:theme.paper,
      borderTopLeftRadius:Radius.sm,
      borderTopRightRadius:Radius.sm
    },
    infoView:{
      borderTopWidth:1,
      borderBottomWidth:1,
      borderColor:theme.line,
      margin:Spacing.three,
      paddingVertical:Spacing.three,
      paddingHorizontal:Spacing.four,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    featuresView:{
      borderTopWidth:1,
      borderBottomWidth:1,
      borderColor:theme.line,
      margin:Spacing.three,
      paddingVertical:Spacing.three,
    },
    circle:{
      width:8,
      height:8,
      borderRadius:25,
      backgroundColor:Colors.primary,
      marginRight:Spacing.one
    },
    features:{
      flexDirection:'row',
      flexWrap:'wrap'
    },
    posterImage:{
      width:55,
      height:55,
      borderRadius:Radius.pill,
      marginRight:Spacing.two
    },
    detailPoster:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:Spacing.three
    },
    messageButton:{
      padding:Spacing.two,
      borderWidth:1,
      borderColor:theme.line,
      borderRadius:Radius.sm,
    },
    editButton:{
      padding:Spacing.two,
      borderWidth:1,
      borderColor:Colors.primary,
      borderRadius:Radius.sm,
    },
    detailImage:{
      width:120,
      height:150,
      borderRadius:Radius.md
    },
    center:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    neighbourhoodView:{
      flexDirection:'row',
      flexWrap:'wrap'
    },
    profileView:{
      padding:Spacing.three,
      borderRadius:Radius.md,
      backgroundColor:theme.text,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    profile:{
      borderWidth:1,
      borderColor:theme.line,
      borderRadius:Radius.md,
      backgroundColor:theme.background,
      margin:Spacing.three
    },
    profileInd:{
      flexDirection:'row',
      alignItems:'center',
      padding:Spacing.three,
      borderBottomWidth:1,
      borderColor:theme.line,
    },
    radio:{
      width:40,
      height:20,
      borderRadius:20,
      justifyContent:'center',
      padding:3
    },
    radioCircle:{
      width:16,
      height:16,
      borderRadius:100,
      backgroundColor:theme.paper
    }
});