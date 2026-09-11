import { Colors } from "@/constants/theme";
import { postersData } from "@/data/postersData";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { Image } from "expo-image";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";


export default function ProfileView({style}:ViewProps){
    const styles = useStyles();
    const theme = useTheme();
    const poster = postersData[0];
    return(
        <View style={[styles.profileView, style]}>
            <View style={styles.row}>
                <Image
                    style={styles.posterImage}
                    source={poster.profileImage}
                />
                <View>
                    <ThemedText style={{color:theme.background}} type="bold">{poster.name}</ThemedText>
                    <ThemedText style={{fontSize:12, lineHeight:16, color:theme.background}}>Luxry Property Specialist</ThemedText>
                    <ThemedText style={{fontSize:12, lineHeight:16, color:theme.background}}>DRE #01234567</ThemedText>
                </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
                <ThemedText type="small" style={{color:Colors.primary}}>Edit</ThemedText>
            </TouchableOpacity>
        </View>
    )
}