import { useAuth } from "@/context/PageContext";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { useStyles } from "../styles/styles";

export default function AddView(style:ViewProps){
    const styles = useStyles();
    const {handleAdd} = useAuth();
    return(
        <View style={styles.addView}>
            <TouchableOpacity style={styles.add} onPress={handleAdd}>
                <Ionicons name="add" size={30} color={"#FFF"} />
            </TouchableOpacity>
        </View>
    )
}