import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type CategoryButtonProps = {
    title: string;
    selected: boolean;
    onPress: () => void
};

export default function CategoryButton({
    title,
    selected,
    onPress
}: CategoryButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.button,
                selected ? styles.buttonSelected : styles.buttonUnselected
            ]}
        >
            {selected && (
                <Entypo name="dot-single" size={16} color="#ffff"></Entypo>
            )}
            <Text style={[
                styles.textButton,
                selected ? styles.textButtonSelected : styles.textButtonUnselected
            ]}
            >
                {title}
            </Text>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection:"row",
        alignItems:"center",
        gap: 6,
        paddingHorizontal: 16,
        paddingVertical: 9,
        borderRadius: 24,
        marginTop: 10,
    },

    buttonSelected: {
        backgroundColor:"#ff3366",
        borderColor:"#ff4c7b",
        borderWidth: 1,

    },

    buttonUnselected: {
        backgroundColor:"#161a28",
        borderColor:"#262d42",
        borderWidth: 1,
    },

    textButton: {
        fontWeight: "700",
        fontSize: 13
    },

    textButtonSelected: {
        color: "#ffffff"
    },

    textButtonUnselected: {
        color: "#9aa3b8"
    }
});