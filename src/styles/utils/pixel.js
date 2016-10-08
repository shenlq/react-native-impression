import { PixelRatio } from 'react-native';

/**
 * 获取最小线宽.
 * @return {[Number]} [物理像素]
 */
export const getPixel = () => {
    return 1 / PixelRatio.get();
};
