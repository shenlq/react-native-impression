import { bgPureActive, dateBar as style } from '../variables';


export const dateBar = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: style.backgroundColor,
    borderBottomWidth: style.borderWidth,
    borderBottomColor: style.borderColor,
};

export const dateBarBody = {
    flexDirection: 'row',
    alignItems: 'center',
    padding: style.paddingBody,
};

export const dateBarText = {
    fontSize: style.fontSize,
    marginLeft: style.marginLeftText,
    color: style.color,
};

export const dateBarButton = {
    paddingVertical: style.paddingVerticalButton,
    paddingHorizontal: style.paddingHorizontalButton,
};

export const buttonBgAcitive = bgPureActive;
export const colorDisabled = style.colorDisabled;
