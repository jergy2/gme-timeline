import { faCircleInfo, faInfoCircle, faTableList } from "@fortawesome/free-solid-svg-icons";
import { MobileMenuItem } from "./mobile-menu-item.class";

export const mobileMenuItems: MobileMenuItem[] = [
    new MobileMenuItem(
        'IMAGE',
        null,
        '/timeline',
        'assets/icons/timeline-icon.png',
        'Timeline'
    ),
    new MobileMenuItem(
        'ICON',
        faTableList,
        '/financials',
        '',
        'Quarterly Results'
    ),
    new MobileMenuItem(
        'IMAGE',
        null,
        'https://www.computershared.net',
        'assets/icons/computershared-dot-net.png',
        'Company Ownership'
    ),
    new MobileMenuItem(
        'ICON',
        faCircleInfo,
        '/about',
        '',
        'About'
    ),
];