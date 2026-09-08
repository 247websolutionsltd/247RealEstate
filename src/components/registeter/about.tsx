import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { View } from "react-native";
import Button from "../button";
import Input from "../custom-input";
import { ThemedText } from "../themed-text";

interface AboutProps{
    onNext: ()=>void
}
export default function About({onNext}:AboutProps){
    const styles = useStyles();
    const theme = useTheme();
    const {registerForm, updateRegisterField} = useAuth();
    return(
        <View style={{flex:1, justifyContent:'space-between'}}>
            <View style={{paddingBottom:Spacing.three, paddingHorizontal:Spacing.three}}>
                <Input label="Full Name" placeholder="John Doe" onChangeText={(text)=>updateRegisterField("name", text)}/>
                <Input label="Phone Number" placeholder="080123456789" onChangeText={(text)=>updateRegisterField("phone", text)} number/>
                <View style={styles.registerInfo}>
                    <ThemedText style={{color:Colors.primary}}>
                        Your details are never shared with third parties. Meridian Estate uses them solely to personalize your experience.
                    </ThemedText>
                </View>
            </View>
            <View>
                <Button onPress={onNext} title="Continue" style={{marginHorizontal:Spacing.three}}/>
            </View>
        </View>
    )
}