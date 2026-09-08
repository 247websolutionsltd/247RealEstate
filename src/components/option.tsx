import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

interface OptionProps{
    title: string;
    desc: string;
    option: number;
    current: number;
    handleOption: (option:number)=>void;
}
export default function Option({title, desc, option, handleOption, current}: OptionProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={[
            styles.option, {
                borderColor:current===option?Colors.primary:theme.line,
                backgroundColor:current===option?"#a8801317":theme.background,
            }]} onPress={()=>handleOption(option)}>
            <View style={[
            styles.optionCircle, {
                borderColor:current===option?"transparent":theme.line,
                backgroundColor:current===option?Colors.primary:"transparent",
            }]}>
                <MaterialIcons name="check" size={16} color={"#FFF"}/>
            </View>
            <View style={{paddingHorizontal:Spacing.two}}>
                <ThemedText type="bold" >{title}</ThemedText>
                <ThemedText type="mid">{desc}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}