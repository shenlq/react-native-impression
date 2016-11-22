import { button as style } from '../variables';
import shadow from '../mixins/shadow';

// 按钮
const btn = {
    paddingVertical: style.paddingVertical,
    paddingHorizontal: style.paddingHorizontal,
    borderWidth: style.borderWidth,
    borderColor: 'transparent',
    borderRadius: style.borderRadius,
    backgroundColor: style.bgPrimary,
    ...shadow(),
};

const btnLg = {
    paddingVertical: style.paddingVerticalLg,
    paddingHorizontal: style.paddingHorizontalLg,
    borderRadius: style.borderRadiusLg,
};

const btnSm = {
    paddingVertical: style.paddingVerticalSm,
    paddingHorizontal: style.paddingHorizontalSm,
    borderRadius: style.borderRadiusSm,
};

// outline
const btnPrimaryOutline = {
    backgroundColor: style.bgPrimaryOutline,
    borderColor: style.borderPrimaryOutline,
};

const btnSecondaryOutline = {
    backgroundColor: style.bgSecondaryOutline,
    borderColor: style.borderSecondaryOutline,
};

const btnDefaultOutline = {
    borderColor: style.borderDefaultOutline,
};

const btnDisabled = {
    opacity: 0.5,
};

// 文本
const text = {
    color: style.color,
    textAlign: 'center',
    fontSize: style.fontSize,
};


export const getButtonStyle = (theme = 'primary', size = 'default', isOutline = false, disabled = false) => {
    let mergeButton = [btn],
        mergeText = [text],
        activeButtonBgColor = style.bgPrimaryActive;

    // color
    switch(theme) {
        case 'secondary':
            mergeButton.push({
                backgroundColor: style.bgSecondary,
            });
            activeButtonBgColor = style.bgSecondaryActive;
            break;

        case 'default':
            mergeButton.push({
                backgroundColor: style.bgDefault,
            });
            mergeText.push({
                color: style.colorDefault,
            });
            activeButtonBgColor = style.bgDefaultActive;

            break;
    }

    // size
    switch(size) {
        case 'lg':
            mergeButton.push(btnLg);
            mergeText.push({
                fontSize: style.fontSizeLg,
            });
            break;
        case 'sm':
            mergeButton.push(btnSm);
            mergeText.push({
                fontSize: style.fontSizeSm,
            });
            break;
    }

    // outline
    if(isOutline) {
        switch(theme) {
            case 'primary':
                mergeButton.push(btnPrimaryOutline);
                mergeText.push({
                    color: style.colorPrimary,
                });
                break;
            case 'secondary':
                mergeButton.push(btnSecondaryOutline);
                mergeText.push({
                    color: style.colorSecondary,
                });
                break;
            default:
                mergeButton.push(btnDefaultOutline);
        }

        activeButtonBgColor = style.bgDefaultActive;
    }

    disabled && mergeButton.push(btnDisabled);

    return {
        button: mergeButton,
        activeButtonBg: activeButtonBgColor,
        text: mergeText,
    };
};
