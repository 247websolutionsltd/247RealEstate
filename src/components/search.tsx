import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import FilterButton from "./filterButton";

interface SearchProps{
    filter?: boolean;
}
export default function Search({filter}:SearchProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={styles.searchView}>
            <MaterialIcons name="search" size={22} color={theme.textSecondary}/>
            <TextInput placeholder="What are you looking for?" style={{flex:1, fontSize:16}}/>
            {
                filter &&
                <FilterButton/>
            }
        </View>
    )
}