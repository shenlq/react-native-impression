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
};

export const confirmTitle = {
    paddingVertical: style.spacer,
    fontWeight: 'bold',
    fontSize: style.titleFontSize,
};

export const confirmMessage = {
    marginBottom: style.spacer,
    color: '#666',
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

