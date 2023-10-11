export const preventScrollWhenModalOpen = () => {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.position = 'fixed';
};

export const restorePreventScroll = () => {
  const { scrollY } = window;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  window.scrollTo(0, scrollY * -1);
};
