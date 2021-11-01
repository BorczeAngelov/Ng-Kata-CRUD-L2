import { Customer } from "./customer";

export interface CustomerWithProduct extends Customer {
    productName: string
}