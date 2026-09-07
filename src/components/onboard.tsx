import { Colors, Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

const { width, height } = Dimensions.get("window");

interface OnboardingType{
  scrollToNext: () => void;
  scrollBack: () => void;
  item: any;
  currentIndex: number;
  onboardingData: any;
}

const OnboardingItem = ({ item, scrollToNext, scrollBack, currentIndex, onboardingData }:OnboardingType) => {
  const theme = useTheme();
  const { isLoading, setIsLoading } = useHook();
  return (
    <View style={[styles.container, { width }]}>
      <LinearGradient
        colors={['transparent', Colors.primary, Colors.primary]}
        style={styles.textContainer}
      >
        <ThemedText type="subtitle" style={{color:"#FFF", marginBottom:Spacing.four}}>
          Perfect choice for your future
        </ThemedText>
        <ThemedText style={{color:"#FFF", width:'70%'}}>
          Our properties the masterpiece for every client with lasting value.
        </ThemedText>
      </LinearGradient>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-end'
  },
  textContainer: {
    justifyContent:'flex-end',
    height:'50%',
    padding: Spacing.three,
    paddingBottom:Spacing.five,
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  btn:{
    backgroundColor:"#FFF",
    padding:Spacing.two,
    borderRadius:9999
  },
  btns:{
    marginTop:Spacing.three, 
    flexDirection:'row', 
    justifyContent:'space-between',
    // paddingHorizontal:Spacing.four
  },
});