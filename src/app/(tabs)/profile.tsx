import Button from "@/components/button";
import Container from "@/components/custom-container";
import Profiles from "@/components/profile";
import ProfileView from "@/components/profileView";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";

export default function Profile(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container>
            <ThemedText type="large" style={{padding:Spacing.three}}>Profile</ThemedText>
            <ProfileView style={{marginHorizontal:Spacing.three}}/>
            <Profiles/>
            <Button
             title="Sign Out" 
             onPress={()=>console.log("Hello")} type="secondary"
             style={{margin:Spacing.three}}
             textColor="red"
            />
        </Container>
    )
}