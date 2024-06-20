export const extractStoreIdFromPath = () => {
  const pathnameParts = location.pathname.split('/');
  const storeIdIndex = pathnameParts.indexOf('store') + 1;
  return pathnameParts[storeIdIndex];
};
