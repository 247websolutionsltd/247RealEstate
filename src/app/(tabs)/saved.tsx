import Container from "@/components/custom-container";
import { Listing1 } from "@/components/listing";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { listingData } from "@/data/listingData";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

export default function Saved(){
    const {saved} = useAuth();
    const [ data, setData ] = useState<any>([]);
    const {handleSaved} = useAuth();
    const styles = useStyles();
    const theme = useTheme();
    useEffect(()=>{
        const savedData = listingData.filter((listing)=> saved.includes(listing.id));
        setData(savedData);
    },[saved])
    return(
        <Container>
            <View style={{padding:Spacing.three}}>
                <ThemedText type="large">Saved</ThemedText>
                <ThemedText>{data.length} saved {data.length === 1 ?"property": "properties"}</ThemedText>
            </View>
            <FlatList
                scrollEnabled={false}
                data={data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{paddingHorizontal:Spacing.three, gap:Spacing.three}}
                ListEmptyComponent={()=>{
                    <View style={styles.center}>
                        <ThemedText type="title" style={{color:theme.textSecondary}}>♡</ThemedText>
                        <ThemedText style={{color:theme.textSecondary}}>No items available</ThemedText>
                    </View>
                }}
                renderItem={({ item, index }) => (
                    <Listing1
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
        </Container>
    )
}