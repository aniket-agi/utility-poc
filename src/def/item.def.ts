import { ObjectId } from "@fastify/mongodb";

export interface IAddOnItem {
    _id?:string;
    status:string;
    name:string;
    image:string;
    inStock:number;
    minStockRemainder:number;
    unitPrice:number;
    parentCategory:ObjectId;
}