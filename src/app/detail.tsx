import Button from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { Top1 } from "@/components/top";
import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { listingData } from "@/data/listingData";
import { postersData } from "@/data/postersData";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detail(){
    const styles = useStyles();
    const theme = useTheme();
    const { ind } = useLocalSearchParams();
    const {saved, handleSaved} = useAuth();
    const listing = listingData[+ind];
    const poster = postersData[0];
    const {linter,formatPrice} = useHook();
    return(
        <View>
            <SafeAreaView style={styles.detailTop2}>
                <Top1 saved={saved.includes(listing.id)} onSave={()=>handleSaved(listing.id)}/>
            </SafeAreaView>
            <ImageBackground style={styles.detailTop} source={{uri:listing.images[0]}}>
                {
                    listing.tag === "new" ?
                    <TouchableOpacity onPress={()=>console.log("Hii")}>
                    <View style={[styles.tagView, {backgroundColor:'green', paddingHorizontal:Spacing.three, paddingVertical:Spacing.one}]}>
                        <ThemedText style={{color:'#FFF', fontSize:14, fontWeight:500}}>NEW</ThemedText>
                    </View>
                    </TouchableOpacity>
                    :
                    listing.tag === "exclusive" ?
                    <View style={[styles.tagView, {backgroundColor:Colors.primary,}]}>
                        <ThemedText style={{color:'#FFF', fontSize:10, fontWeight:500}}>EXCLUSIVE</ThemedText>
                    </View>
                    :
                    <></>
                }
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView style={styles.detailView} edges={['bottom']}>
                    <View style={[styles.rowStretch, {marginBottom:Spacing.two, padding:Spacing.three, paddingBottom:0}]}>
                        <ThemedText type="big">{linter(listing.name, 17)}</ThemedText>
                        <ThemedText type="bold" style={{color:Colors.primary}}>₦{formatPrice(listing.price)}</ThemedText>
                    </View>

                    <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                        <MaterialIcons name="location-on" size={13} color={theme.text}/>
                        <ThemedText type="small">{listing.location.city}, </ThemedText>
                        <ThemedText type="small">{listing.location.state} State</ThemedText>
                    </View>

                    <View style={styles.infoView}>
                        <View style={{alignItems:'center'}}>
                            <ThemedText type="big" style={{color:Colors.primary}}>{listing.info[0].split(" ")[0]}</ThemedText>
                            <ThemedText type="small" style={{fontSize:12}}>{listing.info[0].split(" ")[1]}</ThemedText>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <ThemedText type="big" style={{color:Colors.primary}}>{listing.info[1].split(" ")[0]}</ThemedText>
                            <ThemedText type="small" style={{fontSize:12}}>{listing.info[1].split(" ")[1]}</ThemedText>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <ThemedText type="big" style={{color:Colors.primary}}>{listing.info[2].split(" ")[0]}</ThemedText>
                            <ThemedText type="small" style={{fontSize:12}}>{listing.info[2].split(" ")[1]}</ThemedText>
                        </View>
                    </View>

                    <View style={{paddingHorizontal:Spacing.three}}>
                        <ThemedText style={{color:Colors.primary, marginBottom:Spacing.two}} type="bold">About</ThemedText>
                        <ThemedText>{listing.detail}</ThemedText>
                    </View>

                    <View style={styles.featuresView}>
                        <ThemedText style={{color:Colors.primary, marginBottom:Spacing.two}} type="bold">Features</ThemedText>
                        <View style={styles.features}>
                            {
                                listing.features.map((item, index)=>(
                                    <View style={[styles.row, {width:'50%', marginVertical:Spacing.one}]} key={index.toString()}>
                                        <View style={styles.circle}/>
                                        <ThemedText>{item}</ThemedText>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                    
                    <View style={styles.detailPoster}>
                        <View style={styles.row}>
                            <Image
                                style={styles.posterImage}
                                source={poster.profileImage}
                            />
                            <View>
                                <ThemedText type="bold">{poster.name}</ThemedText>
                                <ThemedText style={{fontSize:12}}>Listing Agent · {poster.title}</ThemedText>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.messageButton}>
                            <ThemedText type="small">Message</ThemedText>
                        </TouchableOpacity>
                    </View>
                    
                    <ScrollView contentContainerStyle={{marginVertical:Spacing.three}} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            listing.images.map((item, index)=>(
                                <Image
                                 source={{uri:item}} 
                                 key={index.toString()}
                                 style={[
                                    styles.detailImage,
                                    {
                                        marginLeft:index===0?Spacing.three:Spacing.one,
                                        marginRight:index===listing.images.length-1?Spacing.three:Spacing.one
                                    }
                                ]}
                                 />
                            ))
                        }
                    </ScrollView>
                    <Button
                     onPress={()=>console.log("Hello")} 
                     title="Contect Agent" 
                     style={{marginTop:Spacing.four, marginHorizontal:Spacing.three, marginBottom:Spacing.two}}
                     />
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}