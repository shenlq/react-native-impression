import { loading as style } from '../variables';

export const loadingMask = {
    flex: 1,
    justifyContent: 'center',
};

export const loading = {
    alignItems: 'center',
};

export const loadingBody = {
    width: style.width,
    borderRadius: style.borderRadius,
    paddingVertical: style.paddingVertical,
    backgroundColor: style.backgroundColor,
};

export const loadingMessage = {
    textAlign: 'center',
    color: style.color,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    marginTop: style.messageMarginTop,
};
