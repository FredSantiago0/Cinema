import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
    onClear: () => void;
};

export default function SearchBar({
    value,
    onChangeText,
    onClear
}: SearchBarProps) {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="#94a3b8"></Ionicons>

            <TextInput placeholder="Buscar filme por Titulo"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#647488"
                value={value}
                onChangeText={onChangeText                                    }
                style={styles.input}>
            </TextInput>

            {value?.length > 0 && onClear && (
                <Pressable onPress={onClear}>
                    <Ionicons name="close-circle" size={18} color="#94a3b8"></Ionicons>
                </Pressable>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 62,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#161a28",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#262d42",
        paddingHorizontal: 16,
        marginHorizontal: 20,
    },

    input: {
        flex: 1,
        color: "#ffffff",
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "500"
    },
});
