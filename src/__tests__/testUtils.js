export const findByAttr = (wrapper, val) => {
    wrapper.find(`[data-test=${val}`);
}