export const getTags = (component, tag) => {
    const regex = new RegExp(`(<${tag}.*?>)([\\s\\S]*?)(<\\/${tag}>)`, "g");

    const tags = [];

    let match = regex.exec(component);

    while (match !== null) {
        tags.push([match[0], match[2], match[1], match[3]]);

        match = regex.exec(component);
    }

    return tags;
};
