import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig = {
	reactCompiler: false,
	compress: true,
};

export default withMDX(nextConfig);
