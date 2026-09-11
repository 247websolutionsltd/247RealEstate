import Location from "@/components/create/location";
import Container from "@/components/custom-container";
import Label from "@/components/label";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";

export default function AddListing(){
    const styles = useStyles();
    const theme = useTheme();
    const [ page, setPage ] = useState(1);
    const {listingForm, updateListingField} = useAuth();
    const onNext = ()=>{
        if (page === 1){
            if(!listingForm.address){
                Alert.alert("Enter your address");
            }else if(!listingForm.neighbourhood){
                Alert.alert("Enter your neighbourhood");
            }else if(!listingForm.city){
                Alert.alert("Confirm your city");
            }else if(!listingForm.state){
                Alert.alert("Confirm your state");
            }else{
                setPage(2);
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
            <View style={[styles.row, {padding:Spacing.three, paddingBottom:0}]}>
                <TouchableOpacity onPress={onBack}>
                    <MaterialIcons name="arrow-back-ios" size={25}/>
                </TouchableOpacity>
                <View style={{marginLeft:Spacing.two}}>
                    <ThemedText style={{color:Colors.primary}}>New Listing</ThemedText>
                    <ThemedText type="large">Location</ThemedText>
                </View>
            </View>
            <Label page={page}/> 
            
            {
                page === 1 ?
                <Location onNext={onNext}/>
                :
                <></>
            }
        </Container>
    )
}