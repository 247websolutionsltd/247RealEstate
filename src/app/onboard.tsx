import CircularProgress from "@/components/circularProgress";
import OnboardingItem from "@/components/onboard";
import Paginator from "@/components/paginator";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import useOnboard from "@/hooks/onboard-hook";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onboardingData } from "../data/onboardingData";
import { useStyles } from "../styles/styles";

const OnboardingScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const {
    currentIndex,
    finishOnboarding,
    viewableItemsChanged,
    viewConfig,
    flatListRef,
    onScroll,
    progressIndex,
    scrollToNext
  } = useOnboard();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#FFF"}} edges={['bottom']}>
      <ImageBackground style={{flex:1}} source={onboardingData[currentIndex].image}>
        <TouchableOpacity style={styles.skip} onPress={finishOnboarding}>
          <ThemedText style={{color:"#FFF"}}>Skip</ThemedText>
        </TouchableOpacity>

        <FlatList
          data={onboardingData}
          renderItem={({ item }) => (
          <OnboardingItem
           pageColor={item.pageColor}
          />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={flatListRef}
          onScroll={onScroll}
          scrollEventThrottle={16}
        />
        <View style={onboardStyles.btns}>
          <View style={onboardStyles.progressContainer}>
            <CircularProgress progressIndex={progressIndex}/>
            <TouchableOpacity style={onboardStyles.btn} onPress={scrollToNext}>
              <MaterialIcons name="east" size={35} color={"#000"}/>
            </TouchableOpacity>
            <Paginator data={onboardingData} currentIndex={currentIndex} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const onboardStyles = StyleSheet.create({
  bottom:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    marginTop:20
  },
  btns:{
    marginTop:Spacing.three, 
    flexDirection:'row', 
    justifyContent:'flex-end',
    position:'absolute',
    flex:1,
    alignItems:'flex-end',
    height:'100%',
    paddingBottom:Spacing.two,
    width:'100%',
  },
  btn:{
    backgroundColor:"#FFF",
    borderRadius:500,
    width:55,
    height:55,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:38,
    marginRight:Spacing.three + 7
  },
  progressContainer: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight:Spacing.three,
    position: "relative",
  },
});
