import { darken } from './mixins/color';
import { getPixel } from './mixins/pixel';


// 主色调
export const brandPrimary = '#369';
export const brandSecondary = '#399';
export const brandWarning = '#FC3';
export const brandDanger = '#933';

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
export const borderColor = '#cdcdcd';

// Space
export const spacerVertical = 10;
export const spacerVerticalSm = 8;
export const spacerVerticalLg = 16;
export const spacerHorizontal = 10;
export const spacerHorizontalSm = 8;
export const spacerHorizontalLg = 16;

// text
export const text = {
    default: grayDark,
    muted: gray,
    holder: '#fff3',
};

// bg
export const bgPureActive = '#f2f2f2';

// Hr
export const hr = {
    borderWidth,
    borderColor,
};


// Button
export const button = {
    color: grayFloor,
    borderWidth: borderWidth * 1.2,

    bgPrimary: brandPrimary,
    colorPrimary: brandPrimary,
    bgPrimaryActive: darken(brandPrimary, 6),
    bgPrimaryOutline: 'transparent',
    borderPrimaryOutline: brandPrimary,

    bgSecondary: brandSecondary,
    colorSecondary: brandSecondary,
    bgSecondaryActive: darken(brandSecondary, 6),
    bgSecondaryOutline: 'transparent',
    borderSecondaryOutline: brandSecondary,


    bgDefault: grayFloor,
    borderDefault: grayLight,
    colorDefault: gray,
    bgDefaultActive: darken(grayFloor, 6),
    borderDefaultOutline: grayLighten,

    fontSize,
    fontSizeSm,
    fontSizeLg,

    paddingVertical: spacerVertical,
    paddingVerticalSm: spacerVerticalSm,
    paddingVerticalLg: 12,
    paddingHorizontal: spacerHorizontal,
    paddingHorizontalSm: spacerHorizontalSm,
    paddingHorizontalLg: 12,

    borderRadius,
    borderRadiusSm,
    borderRadiusLg: borderRadius,
};

// List
export const list = {
    color: text.default,
    borderWidth,
    borderColor,
    marginBottom: spacerVerticalLg,
    paddingVertical: 14,
    paddingHorizontal: spacerHorizontalLg,
    backgroundColor: grayFloor,
    backgroundColorActive: '#ebebeb',
    colorTitle: text.default,
    fontSizeTitle: fontSize,
    fontWeightTitle: 'bold',
    paddingVerticalTitle: spacerVerticalLg,
};

// Media
export const media = {
    color: text.default,
    backgroundColor: grayFloor,
    paddingVertical: spacerVertical,
    paddingHorizontal: spacerHorizontalLg,
    headerFontSize: 15,
    headerFontWeight: 'normal',
    backgroundColorActive: '#ebebeb',
};

// Loading
export const loading = {
    width: 120,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ddd',
    paddingVertical: 20,
    backgroundColor: '#0006',
    borderRadius: borderRadiusLg,
    messageMarginTop: spacerVerticalLg,
};

// Toast
export const toast = {
    spacerBottom: 80,
    color: grayFloor,
    padding: spacerVertical,
    fontSize: 13,
    borderRadius,
    backgroundColor: '#0008',
};

// StatusBar
export const statusBar = {
    height: 20,
    backgroundColor: darken(brandPrimary, 4),
    borderBottomWidth: borderWidth,
    borderBottomColor: darken(brandPrimary, 6),
};

// TipBar
export const tipBar = {
    color: text.muted,
    fontSize: fontSizeSm,
    paddingVertical: spacerVertical * 3,
    paddingHorizontal: spacerHorizontalLg * 2,
    bodyPaddingHorizontal: spacerHorizontalLg,
};

// Confirm
export const confirm = {
    width: 240,
    borderWidth,
    borderColor,
    borderRadius,
    spacer: 20,
    titleFontSize: 15,
    messageColor: '#666',
    maskBackgroundColor: '#0006',
    backgroundColor: grayFloor,
    buttonFontSize: 15,
    buttonColorPrimary: brandPrimary,
    buttonColorSecondary: text.muted,
    buttonPaddingVertical: 14,
    buttonBackgroundColorActive: '#ebebeb',
};

// SegmentedControl
export const segmentedControl = {
    fontSize: fontSizeSm,
    tintColor: grayFloor,
    activeColor: brandPrimary,
    backgroundColor: 'transparent',
    borderWidth: borderWidth * 2,
    borderRadius,
    paddingHorizontal: 12,
    paddingVertical: 6,
};

// DatePickerIOS
export const datePicker = {
    backgroundColorMask: '#0004',
    backgroundColor: grayFloor,
    borderWidth,
    borderColor,
    borderTopColor: grayLight,
    paddingHorizontalHeader: spacerHorizontalLg,
    fontSizeButton: 15,
    fontWeightButton: 'bold',
    paddingVerticalButton: 15,
    paddingHorizontalButton: 15,
    colorButton: brandPrimary,
};

// DateBar
export const dateBar = {
    color: brandPrimary,
    colorDisabled: text.muted,
    backgroundColor: grayFloor,
    fontSize: 15,
    borderWidth,
    borderColor,
    marginLeftText: 10,
    paddingBody: 12,
    paddingVerticalButton: 10,
    paddingHorizontalButton: 20,
};
