import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { Image, TouchableOpacity, View } from "react-native";
import Button from "../button";
import Input from "../custom-input";
import { ThemedText } from "../themed-text";

interface RegisterProps{
    onNext: ()=>void
}
export default function Register({onNext}:RegisterProps){
    const {registerForm, updateRegisterField} = useAuth();
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={{flex:1}}>
            <View style={{paddingBottom:Spacing.three, paddingHorizontal:Spacing.three}}>
                <Input label="Email" placeholder="you@example.com" onChangeText={(text)=>updateRegisterField("email", text)}/>
                <Input label="Password" placeholder="At least 8 characters" password onChangeText={(text)=>updateRegisterField("password", text)}/>
                <Input label="Confirm Password" placeholder="Repeat Password" password onChangeText={(text)=>updateRegisterField("confirm", text)}/>
            </View>
            <View>
                <Button onPress={onNext} title="Continue" style={{marginHorizontal:Spacing.three}}/>
                <View style={styles.row}>
                    <View style={styles.line}/>
                    <ThemedText style={{padding:Spacing.two, color:theme.textSecondary}}>or</ThemedText>
                    <View style={styles.line}/>
                </View>
                <View style={[styles.socialRow, {flexDirection:'column'}]}>
                    <TouchableOpacity style={styles.socialBtn}>
                        <Image source={require('../../../assets/images/google.png')} style={{width:27, height:27, marginRight:5}}/>
                        <ThemedText >Sign up with Google</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialBtn}>
                        <Image source={require('../../../assets/images/apple.png')} style={{width:23, height:23, marginRight:5}} resizeMode="contain"/>
                        <ThemedText>Sign up with Apple</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, {justifyContent:'center'}]}>
                    <ThemedText>
                       Already have an account?{" "}
                    </ThemedText>
                    <TouchableOpacity style={{marginVertical:Spacing.two}}>
                        <ThemedText style={{fontWeight:500, color:Colors.primary}}>
                           Sign in
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}