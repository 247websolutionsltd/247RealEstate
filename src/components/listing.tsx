import { Colors, Radius, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";

interface ListingProps extends TouchableOpacityProps{
    image: string;
    title: string;
    price: string;
    info: string[];
    location: string;
    tag?: string;
    onLike: ()=>void;
    id: string
}
export function Listing1({image, title, price, info, location, tag, onPress, onLike, id}:ListingProps){
    const styles = useStyles();
    const theme = useTheme();
    const {linter, formatPrice, infoFormat} = useHook();
    const {saved} = useAuth();
    return(
        <TouchableOpacity style={styles.listingView} onPress={onPress}>
            <ImageBackground source={{uri:image}} style={styles.listingImage} imageStyle={{borderTopRightRadius:Radius.md, borderTopLeftRadius:Radius.md}}>
                <View>
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
                    <TouchableOpacity onPress={onLike} style={styles.listingFavoriteView}>
                        <MaterialIcons name={saved.includes(id)?"favorite":"favorite-border"} size={20} color={saved.includes(id)?Colors.primary:'#000'}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.listingBottomView}>
                <ThemedText type="bold">{linter(title, 12)}</ThemedText>
                <View style={[styles.rowStretch, {marginTop:Spacing.one}]}>
                    <View style={styles.row}>
                        <MaterialIcons name="location-on" size={13} color={theme.text}/>
                        <ThemedText type="small">{location}</ThemedText>
                    </View>
                    <ThemedText type="small" style={{color:Colors.primary}}>₦{formatPrice(price)}</ThemedText>
                </View>
                <View style={[styles.line, {marginVertical:Spacing.one}]}/>
                <View style={[styles.row, {paddingHorizontal:Spacing.one}]}>
                    {
                        info.map((item,index)=>(
                            <ThemedText key={index.toString()} style={{fontSize:10}}>{infoFormat(item)}{"   "}</ThemedText>
                        ))
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export function Listing2({image, title, price, location, info, tag, onPress, onLike, id}:ListingProps){
    const styles = useStyles();
    const theme = useTheme();
    const {linter, formatPrice, infoFormat} = useHook();
    const {saved} = useAuth();
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
            <View style={styles.listingRight}>
                <View>
                    <ThemedText type="bold" style={{fontSize:16}}>{linter(title, 17)}</ThemedText>
                    <View style={styles.row}>
                        <MaterialIcons name="location-on" size={13} color={theme.text}/>
                        <ThemedText type="small">{location}</ThemedText>
                    </View>
                </View>
                <View style={styles.rowStretch}>
                    <ThemedText type="mid" style={{color:Colors.primary, fontWeight:600}}>₦{formatPrice(price)}</ThemedText>
                    <View style={styles.row}>
                        {
                            info.map((item,index)=>(
                                <ThemedText key={index.toString()} style={{fontSize:10}}>{infoFormat(item)}{"  "}</ThemedText>
                            ))
                        }
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={onLike} style={styles.listingFavoriteView2}>
                <MaterialIcons name={saved.includes(id)?"favorite":"favorite-border"} size={20} color={saved.includes(id)?Colors.primary:'#000'}/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}