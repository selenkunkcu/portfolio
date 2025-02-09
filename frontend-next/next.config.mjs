/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    output: "standalone",
    async redirects() {
        return [
            {
                source: "/:path*",
                destination: "/index.html",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
