export const gaEvent = (action: string, category: string, label: string, value: number) => {
    if (window) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
};