import { darken } from './utils/color';


// 主色调
export const brandPrimary = '#369';
export const brandSecondary = '#399';
export const brandWarning = '#FC3';
export const brandDanger = '#C33';

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

// Space
export const paddingVertical = 10;
export const paddingVerticalSm = 8;
export const paddingVerticalLg = 16;
export const paddingHorizontal = 10;
export const paddingHorizontalSm = 8;
export const paddingHorizontalLg = 16;


// Button
export const button = {
    color: grayFloor,

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

    colorDisabled: grayLight,
    bgDisabled: '#dadada',
    borderDisabled: '#dadada',

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

