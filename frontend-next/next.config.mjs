/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Yönlendirme problemlerini çözer
    output: "standalone", // Netlify için uygun hale getirir
};

export default nextConfig;
