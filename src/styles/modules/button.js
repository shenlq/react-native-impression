import { button }  from '../variables';
import { darken } from '../utils/color';
import { getPixel } from '../utils/pixel';
import shadow from '../utils/shadow';

// 按钮
const btn = {
    paddingVertical: button.paddingVertical,
    paddingHorizontal: button.paddingHorizontal,
    borderWidth: getPixel() * 1.2,
    borderColor: 'transparent',
    borderRadius: button.borderRadius,
    backgroundColor: button.bgPrimary,
    ...shadow(),
};

const btnLg = {
    paddingVertical: button.paddingVerticalLg,
    paddingHorizontal: button.paddingHorizontalLg,
    borderRadius: button.borderRadiusLg,
};

const btnSm = {
    paddingVertical: button.paddingVerticalSm,
    paddingHorizontal: button.paddingHorizontalSm,
    borderRadius: button.borderRadiusSm,
}

// outline
const btnPrimaryOutline = {
    backgroundColor: button.bgPrimaryOutline,
    borderColor: button.borderPrimaryOutline,
};

const btnSecondaryOutline = {
    backgroundColor: button.bgSecondaryOutline,
    borderColor: button.borderSecondaryOutline,
};

const btnDefaultOutline = {
    borderColor: button.borderDefaultOutline,
};

const btnDisabled = {
    opacity: 0.5,
};

// 文本
const text = {
    color: button.color,
    textAlign: 'center',
    fontSize: button.fontSize,
};


export const getButtonStyle = (theme = 'primary', size = 'default', isOutline = false, disabled = false ) => {
    let mergeButton = [btn],
        mergeText = [text],
        activeButtonBgColor = button.bgPrimaryActive;

    // color
    switch(theme) {
        case 'secondary':
            mergeButton.push({
                backgroundColor: button.bgSecondary,
            });
            activeButtonBgColor = button.bgSecondaryActive;
            break;

        case 'default':
            mergeButton.push({
                backgroundColor: button.bgDefault,
            });
            mergeText.push({
                color: button.colorDefault,
            });
            activeButtonBgColor = button.bgDefaultActive;

            break;
    }

    // size
    switch(size) {
        case 'lg':
            mergeButton.push(btnLg);
            mergeText.push({
                fontSize: button.fontSizeLg,
            });
            break;
        case 'sm':
            mergeButton.push(btnSm);
            mergeText.push({
                fontSize: button.fontSizeSm,
            });
            break;
    }

    // outline
    if(isOutline) {
        switch(theme) {
            case 'primary':
                mergeButton.push(btnPrimaryOutline);
                mergeText.push({
                    color: button.colorPrimary,
                });
                break;
            case 'secondary':
                mergeButton.push(btnSecondaryOutline);
                mergeText.push({
                    color: button.colorSecondary,
                });
                break;
            case 'default':
                mergeButton.push(btnDefaultOutline);
        }

        activeButtonBgColor = button.bgDefaultActive;
    }

    disabled && mergeButton.push(btnDisabled);

    return {
        button: mergeButton,
        activeButtonBg: activeButtonBgColor,
        text: mergeText,
    };
};
