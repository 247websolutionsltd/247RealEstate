import { Colors, Radius, Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";

interface NeighbourhoodProps{
    title: string;
    image: string;
    listingNumber: number;
    start: boolean;
    end: boolean;
}
export function Neighbourhood({title, image, listingNumber, start, end}:NeighbourhoodProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <ImageBackground
         source={{uri:image}} 
         imageStyle={{borderRadius:Radius.md}} 
         style={{width:130, marginLeft:start?Spacing.three:Spacing.one, marginRight:end?Spacing.three:Spacing.one}}>
            <TouchableOpacity style={styles.neighbourhood} >
                <ThemedText style={{color:"#FFF"}} type="bold">{title}</ThemedText>
                <ThemedText style={{color:"#FFF"}} type="small">{listingNumber} homes</ThemedText>
            </TouchableOpacity>
        </ImageBackground>
    )
}


interface NeighbourhoodProps2 extends TouchableOpacityProps{
    image: string;
    title: string;
    price: string;
    location: {
        city:string;
        state:string;
    };
    tag?: string;
    homeNumber: number;
    id: string
}

export function Neighbourhood2({image, title, price, location, homeNumber, tag, onPress, id}:NeighbourhoodProps2){
    const styles = useStyles();
    const theme = useTheme();
    const {linter, formatPrice, infoFormat} = useHook();
    return(
        <TouchableOpacity style={styles.listingView2} onPress={onPress}>
            <ImageBackground source={{uri:image}} style={styles.listingImage2} imageStyle={{borderTopLeftRadius:Radius.md, borderBottomLeftRadius:Radius.md,}}>
                {
                    tag === "new" ?
                    <View style={[styles.tagView, {backgroundColor:'green',}]}>
                        <ThemedText style={{color:'#FFF', fontSize:10, fontWeight:500}}>NEW</ThemedText>
                    </View>
                    :
                    tag === "exclusive" ?
                    <View style={[styles.tagView, {backgroundColor:Colors.primary,}]}>
                        <ThemedText style={{color:'#FFF', fontSize:10, fontWeight:500}}>EXCLUSIVE</ThemedText>
                    </View>
                    :
                    <></>
                }
            </ImageBackground>
            <View style={[styles.listingRight, {flex:1}]}>
                <View>
                    <ThemedText type="bold" style={{fontSize:16}}>{linter(title, 17)}</ThemedText>
                    <View style={styles.row}>
                        <MaterialIcons name="location-on" size={13} color={theme.text}/>
                        <ThemedText style={{fontSize:12}}>{location.state}</ThemedText>
                    </View>
                </View>
                <View style={styles.rowStretch}>
                    <ThemedText type="small">{homeNumber} homes</ThemedText>
                    <ThemedText type="small" style={{color:Colors.primary, fontWeight:600}}>avg ₦{formatPrice(price)}</ThemedText> 
                </View>
            </View>
            
            <TouchableOpacity style={styles.listingFavoriteView2}>
                <MaterialIcons name="chevron-right" size={20} color={theme.text}/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}



interface CategoryProps{
    title: string;
    image: string;
}

export function Category({title, image,}:CategoryProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <ImageBackground
         source={{uri:image}} 
         imageStyle={{borderRadius:Radius.md}} 
         style={{width:"100%", marginVertical:Spacing.one}}>
            <TouchableOpacity style={[styles.neighbourhood, {padding:Spacing.three}]} >
                <ThemedText style={{color:"#FFF"}} type="bold">{title}</ThemedText>
                {/* <ThemedText style={{color:"#FFF"}} type="small">{listingNumber} homes</ThemedText> */}
            </TouchableOpacity>
        </ImageBackground>
    )
}