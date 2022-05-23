declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_KEY: string;
        }
    }
}

export const env: NodeJS.ProcessEnv = global.process.env || {
    NODE_ENV: process.env.NODE_ENV,
    TZ: process.env.TZ,
    API_KEY: process.env.API_KEY,
};

if (process.env.NODE_ENV !== "production") global.process.env = env;