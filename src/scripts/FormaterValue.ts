export const formatValue = (value: any) => {
    if (value !== undefined) {
        var newValue
        var formatValue = value.toString().split("");

        if (formatValue.length === 4) {
            newValue = formatValue[0] + formatValue[1] + "," + formatValue[2] + formatValue[3];
            return newValue;
        } else if (formatValue.length === 3) {
            newValue = formatValue[0] + ',' + formatValue[1] + formatValue[2];
            return newValue;
        } else return ""

    } else return "";
};
