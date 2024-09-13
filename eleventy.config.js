module.exports = function(config) {
    config.addPassthroughCopy('site-root/index.css');

    return {
        dir: {
            input: 'site-root',
        }
    }
}
