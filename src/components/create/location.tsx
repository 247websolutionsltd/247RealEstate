import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { View } from "react-native";
import Button from "../button";
import Input from "../custom-input";

interface LocationProps{
    onNext: ()=>void;
}
export default function Location({onNext}:LocationProps){
    const {listingForm, updateListingField} = useAuth();
    return(
        <View style={{flex:1, justifyContent:'space-between', padding:Spacing.three, paddingBottom:0}}>
            <View>
                <Input label="Street Address" placeholder="e.g. 5, Example road" onChangeText={(text)=>updateListingField("address", text)}/>
                <Input label="Neighbourhood" placeholder="e.g. Command" onChangeText={(text)=>updateListingField("address", text)}/>
                <Input label="City" placeholder="e.g. Ikeja" onChangeText={(text)=>updateListingField("address", text)}/>
                <Input label="State" placeholder="e.g. Lagos" onChangeText={(text)=>updateListingField("address", text)}/>
            </View>
            <Button onPress={()=>console.log("Hii")} title="Continue"/>
        </View>
    )
}