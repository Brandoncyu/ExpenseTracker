import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function IconButton({icon, size, color, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
            <View style={styles.buttonContainer}>
                <Ionicons 
                    name={icon} 
                    size={size} 
                    color={color} 
                />
            </View>
        </Pressable>
    ) 
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginTop: 2
    },
    pressed: {
        opacity: 0.75
    }
})