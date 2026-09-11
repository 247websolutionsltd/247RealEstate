import { useStyles } from "@/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View, ViewProps } from "react-native";

export default function AddView(style:ViewProps){
    const styles = useStyles();
    // const {handleAdd} = useAuth();
    return(
        <View style={styles.addView}>
            <TouchableOpacity style={styles.add} onPress={()=>router.push('/addListing')}>
                <Ionicons name="add" size={30} color={"#FFF"} />
            </TouchableOpacity>
        </View>
    )
}