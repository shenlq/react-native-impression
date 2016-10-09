import { darken } from './utils/color';
import { getPixel } from './utils/pixel';



// 主色调
export const brandPrimary = '#369';
export const brandSecondary = '#399';
export const brandWarning = '#FC3';
export const brandDanger = '#C33';

export const grayDark = '#333';
export const gray = '#666';
export const grayLight = '#999';
export const grayLighten = '#ccc';
export const grayFloor = '#fff';

// Font
export const fontSize = 14;
export const fontSizeSm = 12;
export const fontSizeLg = 18;

export const borderRadius = 4;
export const borderRadiusSm = 2;
export const borderRadiusLg = 8;

// Border
export const borderWidth = getPixel();
export const borderColor = grayLight;

// Space
export const paddingVertical = 10;
export const paddingVerticalSm = 8;
export const paddingVerticalLg = 16;
export const paddingHorizontal = 10;
export const paddingHorizontalSm = 8;
export const paddingHorizontalLg = 16;

// text
export const textDefault = grayDark;
export const textMuted = grayLight;
export const textHolder = '#fff3';


// Button
export const button = {
    color: grayFloor,
    borderWidth: borderWidth * 1.2,

    bgPrimary: brandPrimary,
    colorPrimary: brandPrimary,
    bgPrimaryActive: darken(brandPrimary, 6),
    bgPrimaryOutline: grayFloor,
    borderPrimaryOutline: brandPrimary,

    bgSecondary: brandSecondary,
    colorSecondary: brandSecondary,
    bgSecondaryActive: darken(brandSecondary, 6),
    bgSecondaryOutline: grayFloor,
    borderSecondaryOutline: brandSecondary,


    bgDefault: grayFloor,
    borderDefault: grayLight,
    colorDefault: gray,
    bgDefaultActive: darken(grayFloor, 6),
    borderDefaultOutline: grayLighten,

    fontSize: fontSize,
    fontSizeSm: fontSizeSm,
    fontSizeLg: fontSizeLg,

    paddingVertical: paddingVertical,
    paddingVerticalSm: paddingVerticalSm,
    paddingVerticalLg: paddingVerticalLg,
    paddingHorizontal: paddingHorizontal,
    paddingHorizontalSm: paddingHorizontalSm,
    paddingHorizontalLg: paddingHorizontalLg,

    borderRadius: borderRadius,
    borderRadiusSm: borderRadiusSm,
    borderRadiusLg: borderRadiusLg,
};

// List
export const list = {
    borderWidth: borderWidth,
    borderColor: grayLighten,
    marginBottom: paddingVerticalLg,
    paddingVertical: 14,
    paddingHorizontal: paddingHorizontal,
    backgroundColor: grayFloor,
    backgroundColorActive: '#eee',
};

