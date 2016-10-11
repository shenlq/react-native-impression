import { confirm as style } from '../variables';


export const confirmMask = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: style.maskBackgroundColor,
};

export const confirm = {
    backgroundColor: style.backgroundColor,
    width: style.width,
    borderRadius: style.borderRadius,
};

export const confirmBody = {
    alignItems: 'center',
    paddingVertical: style.spacer,
};

export const confirmTitle = {
    fontWeight: 'bold',
    fontSize: style.titleFontSize,
    marginBottom: style.spacer,
};

export const confirmMessage = {
    color: style.messageColor,
};

export const confirmFooter = {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: style.borderWidth,
    borderTopColor: style.borderColor,
};

export const confirmButton = {
    flex: 1,
    alignItems: 'center',
    buttonFontSize: style.buttonFontSize,
    colorPrimary: style.buttonColorPrimary,
    colorSecondary: style.buttonColorSecondary,
    paddingVertical: style.buttonPaddingVertical,
    backgroundColorActive: style.buttonBackgroundColorActive,
};

export const confirmButtonSplit = {
    width: style.borderWidth,
    backgroundColor: style.borderColor,
    height: style.buttonPaddingVertical * 2 + style.buttonFontSize,
};

