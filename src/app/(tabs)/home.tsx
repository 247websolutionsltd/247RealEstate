import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { View } from "react-native";

export default function Home(){
    return(
        <Container>
            <View>
                <ThemedText>Hello</ThemedText>
                <ThemedText>David</ThemedText>
            </View>
        </Container>
    )
}