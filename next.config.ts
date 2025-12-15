/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add or update the 'images' configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Optional: Keep port empty
        port: '', 
        // Allows any path after the hostname (e.g., photo-1544...)
        pathname: '/**', 
      },
      // Add other external image hosts here if needed
    ],
  },
  
  // You can add other configurations here, such as:
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
