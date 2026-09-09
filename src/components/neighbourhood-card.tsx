import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { ImageBackground } from "expo-image";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "./themed-text";

interface NeighbourhoodProps{
    title: string;
    image: string;
    listingNumber: number;
    start: boolean;
    end: boolean;
}
export default function Neighbourhood({title, image, listingNumber, start, end}:NeighbourhoodProps){
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