export function initMap(): void {
    const location: { lat: number, lng: number } = { lat: -36.882576793148345, lng: 174.91429516570236 };

    const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 4,
            center: location,
        }
    );

    const marker: google.maps.Marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

window.initMap = initMap;

declare global {
    interface Window {
        initMap: () => void;
    }
}