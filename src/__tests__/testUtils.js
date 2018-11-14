export const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}