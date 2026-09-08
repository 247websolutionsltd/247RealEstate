import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { useState } from "react";
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
    const [ option, setOption ] = useState(0);
    const handleOption = (option:number)=>{
        setOption(option);
    }
    return(
        <View style={{flex:1, justifyContent:'space-between'}}>
            <View style={{paddingBottom:Spacing.three, paddingHorizontal:Spacing.three}}>
                <Option title="Rent" desc="Looking to purchace" option={1} handleOption={handleOption} current={option}/>
                <Option title="Land" desc="Looking to purchace" option={2} handleOption={handleOption} current={option}/>
                <Option title="Shortlet" desc="Looking to purchace" option={3} handleOption={handleOption} current={option}/>
                <Option title="Shop" desc="Looking to purchace" option={4} handleOption={handleOption} current={option}/>
                <Option title="Warehouse" desc="Looking to purchace" option={5} handleOption={handleOption} current={option}/>
            </View>
            <View>
                <Button onPress={()=>console.log(registerForm)} title="Create Account" style={{marginHorizontal:Spacing.three}} disabled={option===0}/>
            </View>
        </View>
    )
}