import Container from "@/components/custom-container";
import { Listing2 } from "@/components/listing";
import Search from "@/components/search";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { listingData } from "@/data/listingData";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";
import { FlatList, View } from "react-native";

export default function SearchPage(){
    const styles = useStyles();
    const theme = useTheme();
    const {handleSaved} = useAuth();
    return(
        <Container>
            <View style={{paddingHorizontal:Spacing.three}}>
                <Search/>
            </View>
            <View style={{paddingHorizontal:Spacing.three}}>
                <ThemedText>6 properties</ThemedText>
                <FlatList
                    scrollEnabled={false}
                    data={listingData}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={()=>{
                        <View style={styles.center}>
                            <ThemedText type="title" style={{color:theme.textSecondary}}>♡</ThemedText>
                            <ThemedText style={{color:theme.textSecondary}}>No items available</ThemedText>
                        </View>
                    }}
                    renderItem={({ item, index }) => (
                        <Listing2
                            image={item.images[0]}
                            title={item.name}
                            location={item.location.city}
                            price={item.price}
                            info={item.info}
                            tag={item.tag}
                            onLike={()=>handleSaved(item.id)}
                            id={item.id}
                            onPress={() => {
                                router.navigate({
                                pathname: "/detail",
                                params: { ind: index },
                                });
                            }}
                        />
                    )}
                />
            </View>
        </Container>
    )
}