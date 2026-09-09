import Container from "@/components/custom-container";
import { Listing1, Listing2 } from "@/components/listing";
import Neighbourhood from "@/components/neighbourhood-card";
import Search from "@/components/search";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { listingData } from "@/data/listingData";
import neighbourhood from "@/data/neighbourhoods";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { Image } from "expo-image";
import { ScrollView, TouchableOpacity, View } from "react-native";

export default function Home(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container style={{paddingBottom:80}}>
            <View style={[styles.rowStretch, {padding:Spacing.three, paddingBottom:Spacing.one}]}>
                <View>
                    <ThemedText>Hello, Welcome👋</ThemedText>
                    <ThemedText type="large">David Omotara</ThemedText>
                </View>
                <Image style={styles.profileImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBCpyQIJSGIUWdn05vYhV4n6Tcf1LzrZSsHHBA8I0XA&s=10"}}/>
            </View>
            <View style={{paddingHorizontal:Spacing.three}}>
                <Search/>
            </View>
            <View>
                <View style={[styles.rowStretch, {padding:Spacing.three}]}>
                    <ThemedText type="big">Neighbourhood</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{color:Colors.primary}}>See all</ThemedText>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                </ScrollView>
            </View>

            <View style={{marginVertical:Spacing.three}}>
                <View style={[styles.rowStretch, {padding:Spacing.three, paddingBottom:Spacing.one}]}>
                    <ThemedText type="big">Featutred</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{color:Colors.primary}}>See all</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:Spacing.two, flexDirection:'row', flexWrap:'wrap'}}>
                        {
                            listingData.map((item, index)=>(
                                <View style={{width:"50%", padding:Spacing.two}} key={index.toString()}>
                                    <Listing1
                                        image={item.image}
                                        title={item.name}
                                        location={item.location}
                                        price={item.price}
                                        info={item.info}
                                        tag={item.tag}
                                        onPress={()=>console.log("hii")}
                                    />
                                </View>
                            ))
                        }   
                </View>
            </View>

            <View>
                <View style={[styles.rowStretch, {padding:Spacing.three, paddingBottom:Spacing.one}]}>
                    <ThemedText type="big">Recent Listings</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{color:Colors.primary}}>See all</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:Spacing.three}}>
                    {
                        listingData.map((item, index)=>(
                            <Listing2
                                key={index.toString()}
                                image={item.image}
                                title={item.name}
                                location={item.location}
                                price={item.price}
                                info={item.info}
                                tag="NEW"
                            />
                        ))
                    } 
                </View>
            </View>
        </Container>
    )
}