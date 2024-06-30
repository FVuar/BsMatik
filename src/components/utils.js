import feJS from "fvuarjs";
export const fv = new feJS();

export function CustomIcon({ icon, width = "16", height = "16", className = "icon-16", color }) {
    const rgb = window.getComputedStyle(document.body).color;
    const rgbArray = rgb.match(/\d+/g).map(Number);
    const bodyColor = "#" + ((1 << 24) + (rgbArray[0] << 16) + (rgbArray[1] << 8) + rgbArray[2]).toString(16).slice(1).toUpperCase();
    let svg;
    switch(icon) {
        case 'slash':
            svg = <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill={color ? color : bodyColor} d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z"/></svg>
            break;
        case 'multiplication':
            svg = <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={color ? color : bodyColor} d="M208 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V172.9l122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L352 256l122 70.4c15.3 8.8 20.5 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L304 339.1V480c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V339.1L86 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7c-8.8-15.3-3.6-34.9 11.7-43.7L160 256 38 185.6c-15.3-8.8-20.5-28.4-11.7-43.7l16-27.7C51.1 98.8 70.7 93.6 86 102.4l122 70.4V32z"/></svg>
            break;
        default:
            break;
    }
    return svg;
}