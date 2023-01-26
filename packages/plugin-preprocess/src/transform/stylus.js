import stylus from "stylus";

export const transform = (css) => {
    let toReturn = css;

    stylus(css).render((err, css) => {
        toReturn = css;
    });

    return toReturn;
};
