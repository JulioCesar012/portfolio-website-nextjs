export const _resizeColumn = (width, setColumnWidth, setColumnSM) => {
  if (width <= 1200) {
    setColumnWidth(6);
    setColumnSM(0);
    return;
  }
  if (width <= 768) {
    return setColumnWidth(0);
  }

  return setColumnWidth(4);
};
