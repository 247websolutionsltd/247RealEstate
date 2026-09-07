import CircularProgress from "@/components/circularProgress";
import OnboardingItem from "@/components/onboard";
import Paginator from "@/components/paginator";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onboardingData } from "../data/onboardingData";
import { useStyles } from "../styles/styles";

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);
  const { width, height } = Dimensions.get("window");
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const { isLoading, setIsLoading } = useHook();
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      finishOnboarding();
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setProgressIndex(event.nativeEvent.contentOffset.x/(360*(onboardingData.length-1)))
    setCurrentIndex(index);
  };

  const scrollBack = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    } else {
      console.log("first")
    }
  };
  const finishOnboarding = async () => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      await AsyncStorage.setItem('onboarded', 'true');
      router.replace("/");
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };
  const styles = useStyles();
  const theme = useTheme();

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
           item={item} 
           scrollToNext={scrollToNext} 
           scrollBack={scrollBack} 
           currentIndex={currentIndex} 
           onboardingData={onboardingData}
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
    top:38
  },
  progressContainer: {
    width: 150,
    height: 150,

    justifyContent: "center",
    alignItems: "center",

    position: "relative",
  },
});
