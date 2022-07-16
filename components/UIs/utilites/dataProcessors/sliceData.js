const sliceData = (data, qty) => {
    if (data.length === 0 || !qty) return;
    const list = [...data];
    return list.slice(0, qty);
};

export default sliceData;