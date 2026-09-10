import Container from "@/components/custom-container";
import { Listing2 } from "@/components/listing";
import Neighbourhood from "@/components/neighbourhood-card";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { listingData } from "@/data/listingData";
import neighbourhood from "@/data/neighbourhoods";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";
import { FlatList, View } from "react-native";

export default function Location(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container style={{padding:Spacing.three}}>
            <ThemedText type="large">Categories</ThemedText>

            <View>
                <View style={[styles.rowStretch, {marginTop:Spacing.three}]}>
                    <ThemedText>All Neighborhoods</ThemedText>
                    <ThemedText>6 areas</ThemedText>
                </View>
                <View style={styles.neighbourhoodView}>
                    {
                        neighbourhood.map((item, index)=>(
                            <Neighbourhood
                                title={item.title} 
                                key={index.toString()} 
                                image={item.image} 
                                listingNumber={item.listings.length}
                                start={index===0}
                                end={index===neighbourhood.length-1}
                                />
                        ))
                    }
                </View>
            </View>

            <View>
                <View style={[styles.rowStretch, {marginTop:Spacing.three}]}>
                    <ThemedText>All Neighborhoods</ThemedText>
                    <ThemedText>6 areas</ThemedText>
                </View>
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