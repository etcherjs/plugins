import sass from "sass";

export const transform = (scss) => {
    return sass.compileString(scss).css;
};
