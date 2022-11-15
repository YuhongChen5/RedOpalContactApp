//To handle platform differences for the alerts
import { Platform } from 'react-native';

export function simpleAlert(message) {
    if (Platform.OS !== 'web') {
        Alert.alert(null, message);
    }
    alert(message);
}





