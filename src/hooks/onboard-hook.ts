import { onboardingData } from "@/data/onboardingData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import useHook from "./general-hook";

export default function useOnboard(){
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
        router.replace("/auth/logIn");
        } catch (e) {
        setIsLoading(false);
        console.error(e);
        }
    };

    return{
        currentIndex,
        finishOnboarding,
        viewableItemsChanged,
        viewConfig,
        flatListRef,
        onScroll,
        progressIndex,
        scrollToNext
    }
}