export const APP_URLS = {
    HOME: import.meta.env.VITE_HOME_URL || 'https://saidmustafasaid.com',
    PORTFOLIO: import.meta.env.VITE_PORTFOLIO_URL || 'https://portfolio.saidmustafasaid.com',
    TARGETED_CV: import.meta.env.VITE_TARGETED_CV_URL || 'https://targetedcv.saidmustafasaid.com',
}

export interface NavItem {
    id: string
    label: string
    href?: string
    type: 'internal' | 'external'
}

export const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'Home', type: 'internal' },
    { id: 'portfolio', label: 'Portfolio', href: APP_URLS.PORTFOLIO, type: 'external' },
    { id: 'targeted-cv', label: 'TargetedCV', href: APP_URLS.TARGETED_CV, type: 'external' }
]
