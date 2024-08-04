/** @type {import('next').NextConfig} */
import withImages from 'next-images'

const nextConfig = withImages({
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    images: { unoptimized: true }
})

export default nextConfig;
