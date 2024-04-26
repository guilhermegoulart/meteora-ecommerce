/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: './src/app/imagem.js'
  },
};

export default nextConfig;
