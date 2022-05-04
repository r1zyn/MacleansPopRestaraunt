import type { CSSProperties, ReactNode } from "react";

export type Dish = {
    name: string;
    price: string;
    description?: string;
    type?: DishType;
    imageURL?: string;
}

export type DishType = "Entree" | "Main" | "Dessert" | "Beverage";

export type GenericProps = {
    className?: string;
    style?: CSSProperties;
};

export type GenericPropsWithChildren = GenericProps & {
    children: ReactNode;
};

export type Union<T1, T2> = T1 & T2;