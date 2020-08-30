// const withCSS = require('@zeit/next-css')
// module.exports = withCSS()

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})