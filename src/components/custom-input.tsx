import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

interface InputProps extends TextInputProps{
    label: string;
    placeholder?: string;
    password?: boolean | null;
    number?: boolean;
}
export default function Input({label, placeholder="", password, onChangeText, number=false}:InputProps){
    const styles = useStyles();
    const theme = useTheme();
    const [ showPassword, setPassword ] = useState(false);
    return(
        <View style={{paddingVertical:Spacing.two}}>
            <ThemedText style={{marginBottom:Spacing.one}}>{label}</ThemedText>
            <View style={styles.textInputView}>
                <TextInput
                 placeholder={placeholder} 
                 style={{flex:1, color:theme.textSecondary}} 
                 secureTextEntry={ (password===true && !showPassword)}
                 onChangeText={onChangeText}
                 keyboardType={number?"numeric":"default"}
                />
                {
                    password &&
                    <TouchableOpacity onPress={()=>setPassword(!showPassword)}>
                        <MaterialIcons name={showPassword?"visibility-off":"visibility"} size={18} color={theme.textSecondary}/>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
} 