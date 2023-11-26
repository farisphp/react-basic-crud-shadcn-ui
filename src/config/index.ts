export type Config = {
  API_HOST: string;
};

const config: Config = {
  API_HOST: import.meta.env.VITE_API_HOST || "http://localhost:8000/api/",
};

export { config };

export default config;
