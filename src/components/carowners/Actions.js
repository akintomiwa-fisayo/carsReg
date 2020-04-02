
const prefix = 'CAR_OWNER_';

exports.setCarOwners = (carOwners) => ({ type: `${prefix}SET_CAR_OWNERS`, carOwners });
exports.setLoading = () => ({ type: `${prefix}SET_LOADING` });
exports.setLoaded = () => ({ type: `${prefix}SET_LOADED` });
exports.setLoadingMore = () => ({ type: `${prefix}SET_LOADING_MORE` });
exports.setLoadedMore = () => ({ type: `${prefix}SET_LOADED_MORE` });
exports.setFilter = (filter) => ({ type: `${prefix}SET_FILTER`, filter });
