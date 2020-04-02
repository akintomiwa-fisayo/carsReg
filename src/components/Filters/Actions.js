
const prefix = 'FILTERS_';

exports.setFilters = (filters) => ({ type: `${prefix}SET_FILTERS`, filters });
exports.setLoading = () => ({ type: `${prefix}SET_LOADING` });
exports.setLoaded = () => ({ type: `${prefix}SET_LOADED` });
