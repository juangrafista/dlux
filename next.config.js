module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'http://dlux.sanity.studio',
        permanent: true,
      },
    ]
  },
}
