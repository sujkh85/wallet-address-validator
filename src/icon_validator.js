module.exports = {
    isValidAddress: function(address) {
        return /^(hx)[0-9a-f]{40}$/i.test(address);
    }
};
