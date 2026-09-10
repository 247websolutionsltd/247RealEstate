import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

interface Top1Props{
    saved: boolean;
    onSave: ()=>void
}
export function Top1({saved, onSave}:Top1Props){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={styles.rowStretch}>
            <TouchableOpacity style={styles.backView} onPress={()=>router.back()}>
                <MaterialIcons name="keyboard-backspace" size={28} color={theme.text}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backView} onPress={onSave}>
                <MaterialIcons name={saved?"bookmark":"bookmark-outline"} size={28} color={saved?Colors.primary:theme.text}/>
            </TouchableOpacity>
        </View>
    )
}