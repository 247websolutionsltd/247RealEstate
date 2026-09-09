import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";
import { View } from "react-native";
import Button from "../button";
import Option from "../option";

interface AboutProps{
    onNext: ()=>void
}
export default function Goals(){
    const styles = useStyles();
    const theme = useTheme();
    const {registerForm, updateRegisterField} = useAuth();
    const handleOption = (option:string)=>{
        updateRegisterField("interest", option);
    }
    return(
        <View style={{flex:1, justifyContent:'space-between'}}>
            <View style={{paddingBottom:Spacing.three, paddingHorizontal:Spacing.three}}>
                <Option title="Rent" desc="Looking to purchace" handleOption={handleOption} option={registerForm.interest}/>
                <Option title="Land" desc="Looking to purchace" handleOption={handleOption} option={registerForm.interest}/>
                <Option title="Shortlet" desc="Looking to purchace" handleOption={handleOption} option={registerForm.interest}/>
                <Option title="Shop" desc="Looking to purchace" handleOption={handleOption} option={registerForm.interest}/>
                <Option title="Warehouse" desc="Looking to purchace" handleOption={handleOption} option={registerForm.interest}/>
            </View>
            <View>
                <Button onPress={()=>router.navigate("/(tabs)/home")} title="Create Account" style={{marginHorizontal:Spacing.three}} disabled={registerForm.interest===""}/>
            </View>
        </View>
    )
}