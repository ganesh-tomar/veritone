/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  unoptimized: false,
	},
  }
   
  const withBundleAnalyzer = require('@next/bundle-analyzer')()
   
  module.exports =
	process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig
  