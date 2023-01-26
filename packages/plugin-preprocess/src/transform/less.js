import less from "less";

export const transform = async (content) => {
    const rendered = await less.render(content);

    return rendered.css;
};
