import { Children, cloneElement, Dispatch, isValidElement, JSXElementConstructor, ReactElement, ReactNode, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { NextComponent } from "../lib/next";

import { useDeepCompareEffectForMaps } from "../lib/utils";

export interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string; };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactNode;
};

export const Map: NextComponent<MapProps> = ({
    onClick,
    onIdle,
    children,
    style,
    ...options
}: MapProps): JSX.Element => {
    const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [map, setMap]: [google.maps.Map | undefined, Dispatch<SetStateAction<google.maps.Map | undefined>>] = useState<google.maps.Map>();

    useEffect((): void => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    useDeepCompareEffectForMaps((): void => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    useEffect((): void => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName)
            );

            if (onClick) {
                map.addListener("click", onClick);
            }

            if (onIdle) {
                map.addListener("idle", () => onIdle(map));
            }
        }
    }, [map, onClick, onIdle]);

    return (
        <>
            <div ref={ref} style={style} />
            {Children.map(children, (child: ReactNode): ReactElement<any, string | JSXElementConstructor<any>> | undefined => {
                if (isValidElement(child)) {
                    return cloneElement(child, { map });
                }
            })}
        </>
    );
};