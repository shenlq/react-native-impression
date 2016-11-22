import { Platform } from 'react-native';

export const noShadow = Platform.select({
    ios: {
        shadowOpacity: 0,
    },
    android: {
        elevation: 0,
    },
});
