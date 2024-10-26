/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "2rem"
            },

            colors: {
                primary: "hsl(var(--color-primary))",
                "primary-gradient-accent-1":
                    "hsl(var(--color-primary-gradient-accent-1))",
                "primary-gradient-accent-2":
                    "hsl(var(--color-primary-gradient-accent-2))",
                "bg-background": "hsl(var(--color-bg-background))",
                "bg-content": "hsl(var(--color-bg-content))",
                "text-primary": "hsl(var(--color-text-primary))",
                "text-secondary": "hsl(var(--color-text-secondary))",
                "text-hover": "hsl(var(--color-text-hover))"
            }
        }
    },
    plugins: []
}
