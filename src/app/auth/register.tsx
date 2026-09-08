import Container from "@/components/custom-container";
import Label from "@/components/label";
import About from "@/components/registeter/about";
import Goals from "@/components/registeter/goals";
import Register from "@/components/registeter/register";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";

export default function LogIn(){
    const styles = useStyles();
    const theme = useTheme();
    const [ page, setPage ] = useState(1);
    const {registerForm} = useAuth();
    const onNext = ()=>{
        if (page === 1){
            if(!registerForm.email){
                Alert.alert("Enter your email");
            }else if(!registerForm.password){
                Alert.alert("Enter your password");
            }else if(!registerForm.confirm){
                Alert.alert("Confirm your password");
            }else{
                setPage(2);
            }
        }else if (page === 2){
            if(!registerForm.name){
                Alert.alert("Enter your Full Name");
            }else if(!registerForm.phone){
                Alert.alert("Enter your Phone Number");
            }else{
                setPage(3);
            }
        }
    }
    const onBack = ()=>{
        if(page === 1){
            router.back();
        }else{
            setPage(page - 1);
        }
    }
    return(
        <Container >
            {
                page > 1 &&
                <TouchableOpacity style={{padding:Spacing.three, paddingBottom:0}} onPress={onBack}>
                    <MaterialIcons name="arrow-back-ios" size={25}/>
                </TouchableOpacity>
            }
            <Label page={page}/> 
            <View style={{padding:Spacing.three}}>
                <ThemedText>Step {page} of 3</ThemedText>
                <ThemedText type="large">{page===1?"Create Account":page===2?"About you":"Your Interest"}</ThemedText>
            </View>
            {
                page === 1 ?
                <Register onNext={onNext}/>
                :
                page === 2 ?
                <About onNext={onNext}/>
                :
                <Goals/>
            }
        </Container>
    )
}