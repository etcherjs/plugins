import { getTags } from "./tags.mjs";

export const preprocess = () => {
    return {
        name: "preprocess",
        hooks: {
            processPage: async (page) => {
                let retValue = page;

                const tags = getTags(page, "style");

                for (let i = 0; i < tags.length; i++) {
                    const [tag, content, open] = tags[i];

                    if (open.includes('lang="')) {
                        const lang = open.match(/lang="(.+?)"/)[1];

                        let css = "";

                        switch (lang) {
                            case "scss":
                            case "sass":
                                const scss = await import("./transform/scss.mjs");

                                css = scss.transform(content);

                                break;
                            case "stylus":
                                const stylus = await import("./transform/stylus.mjs");

                                css = stylus.transform(content);

                                break;
                            case "less":
                                const less = await import("./transform/less.mjs");

                                css = await less.transform(content);

                                break;
                        }

                        retValue = retValue.replace(tag, `<style>${css}</style>`);
                    }
                }

                return retValue;
            },
            processComponent: async (component) => {
                let retValue = component;

                const tags = getTags(component, "style");

                for (let i = 0; i < tags.length; i++) {
                    const [tag, content, open] = tags[i];

                    if (open.includes('lang="')) {
                        const lang = open.match(/lang="(.+?)"/)[1];

                        let css = "";

                        switch (lang) {
                            case "scss":
                            case "sass":
                                const scss = await import("./transform/scss.mjs");

                                css = scss.transform(content);

                                break;
                            case "stylus":
                                const stylus = await import("./transform/stylus.mjs");

                                css = stylus.transform(content);

                                break;
                            case "less":
                                const less = await import("./transform/less.mjs");

                                css = await less.transform(content);

                                break;
                        }

                        retValue = retValue.replace(tag, `<style>${css}</style>`);
                    }
                }

                return retValue;
            },
        },
    };
};
