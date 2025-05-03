import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";
import DarkModeToggle from "../components/DarkModeToggle.jsx";

export const EditorTabs = [
    {
        name: "colorpicker",
        icon: swatch,
    },
    {
        name: "filepicker",
        icon: fileIcon,
    },
    {
        name: "aipicker",
        icon: ai,
    },
];

export const FilterTabs = [
    {
        name: "logoShirt",
        icon: logoShirt,
    },
    {
        name: "stylishShirt",
        icon: stylishShirt,
    },
];

export const DecalTypes = {
    logo: {
        stateProperty: "logoDecal",
        filterTab: "logoShirt",
    },
    full: {
        stateProperty: "fullDecal",
        filterTab: "stylishShirt",
    },
};

export const navBarLinks = [

    {
        name: "home",
        href: "/",
    },
    {
        name: "canvas",
        href: "/about",
    },
    {
        name: "customizer",
        href: "/customizer",
    },
    {
        name: <DarkModeToggle />,
        href: null,
    }
]