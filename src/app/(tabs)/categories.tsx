import Container from "@/components/custom-container";
import { Category, Neighbourhood2 } from "@/components/neighbourhood-card";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import categories from "@/data/categories";
import neighbourhood from "@/data/neighbourhoods";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";
import { FlatList, TouchableOpacity, View } from "react-native";

export default function Location(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container style={{paddingBottom:80}}>
            <ThemedText type="large" style={{padding:Spacing.three}}>Categories</ThemedText>

            <View>
                <View style={[styles.rowStretch, {marginTop:Spacing.three, paddingHorizontal:Spacing.three}]}>
                    <ThemedText>All Categories</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{color:Colors.primary}}>See all</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={[styles.neighbourhoodView, {paddingHorizontal:Spacing.two}]}>
                    {
                        categories.map((item)=>(
                            <View key={item.id} style={{width:'50%', padding:Spacing.one}}>
                                <Category
                                    title={item.title} 
                                    image={item.image}
                                />
                            </View>
                        ))
                    }
                </View>
            </View>

            <View style={{paddingHorizontal:Spacing.three}}>
                <View style={[styles.rowStretch, {marginTop:Spacing.three}]}>
                    <ThemedText>All Neighborhoods</ThemedText>
                    <ThemedText>6 areas</ThemedText>
                </View>
                <FlatList
                    scrollEnabled={false}
                    data={neighbourhood}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={()=>{
                        <View style={styles.center}>
                            <ThemedText type="title" style={{color:theme.textSecondary}}>♡</ThemedText>
                            <ThemedText style={{color:theme.textSecondary}}>No items available</ThemedText>
                        </View>
                    }}
                    renderItem={({ item, index }) => (
                        <Neighbourhood2
                            image={item.image}
                            title={item.title}
                            location={item.location}
                            price={item.avPrice}
                            homeNumber={neighbourhood.length}
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