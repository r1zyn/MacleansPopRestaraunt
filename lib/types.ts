import type { CSSProperties, ReactNode } from "react";

export type GenericProps = {
    className?: string;
    style?: CSSProperties;
};

export type GenericPropsWithChildren = GenericProps & {
    children: ReactNode;
};