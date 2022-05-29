import { NextComponent } from "../lib/next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const Marker: NextComponent<google.maps.MarkerOptions> = (options: google.maps.MapOptions) => {
    const [marker, setMarker]: [google.maps.Marker | undefined, Dispatch<SetStateAction<google.maps.Marker | undefined>>] = useState<google.maps.Marker>();

    useEffect((): (() => void) => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        return (): void => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect((): void => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    return null;
};