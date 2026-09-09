import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function FilterButton(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="tune" color={"#FFF"} size={23}/>
        </TouchableOpacity>
    )
}