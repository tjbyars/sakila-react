export default function setBackgroundColor({color}: any) {
    document.documentElement.style.setProperty('--bodyColor', color);
}