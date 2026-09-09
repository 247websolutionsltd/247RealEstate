import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

interface OptionProps{
    title: string;
    desc: string;
    option: string;
    handleOption: (option:string)=>void;
}
export default function Option({title, desc, handleOption, option}: OptionProps){
    const styles = useStyles();
    const theme = useTheme();
    const {registerForm, updateRegisterField} = useAuth();
    return(
        <TouchableOpacity style={[
            styles.option, {
                borderColor:option===title.toLowerCase()?Colors.primary:theme.line,
                backgroundColor:option===title.toLowerCase()?"#a8801317":theme.background,
            }]} onPress={()=>handleOption(title.toLowerCase())}>
            <View style={[
            styles.optionCircle, {
                borderColor:option===title.toLowerCase()?"transparent":theme.line,
                backgroundColor:option===title.toLowerCase()?Colors.primary:"transparent",
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