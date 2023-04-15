/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                text: "text 8s ease infinite",
            },
            keyframes: {
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            backdropBlur: {
                // Add your backdrop blur configurations here
                // For example:
                none: "none",
                sm: "4px",
                md: "8px",
                lg: "12px",
                xl: "16px",
                "2xl": "20px",
            },
            // fontFamily: {
            //     Americana: ["Americana"],

            // },
        },
    },
    plugins: [],
};