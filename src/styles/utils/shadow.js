import { Platform } from 'react-native';
import * as Variables  from '../variables';

// 获取阴影
const getShadow = (level = 1) => {
    return Platform.select({
        ios: {
            shadowColor: 'rgba(0,0,0, .24)',
            shadowOffset: {
                height: 4,
                width: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 3,
        },
        android: {
            elevation: 2,
        }
    });
};

export default getShadow;
