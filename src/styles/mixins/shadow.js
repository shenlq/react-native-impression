import { Platform } from 'react-native';

// 获取阴影
const getShadow = () => {
    return Platform.select({
        ios: {
            shadowColor: 'rgba(0,0,0, .24)',
            shadowOffset: {
                height: 2,
                width: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 3,
        },
        android: {
            elevation: 2,
        },
    });
};

export default getShadow;
