 import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCategory } from "@prisma/client";
import React from "react";

type ChildComponentProps = {
    onCategoryChange: (category: ProductCategory) => void;
};


export const CategorySelect: React.FC<ChildComponentProps> = ({ onCategoryChange }) => {

    const enumKeys = Object.keys(ProductCategory).filter(key => isNaN(Number(key)));

    return (
        <Select onValueChange={(v) => onCategoryChange(v as ProductCategory)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {enumKeys.map((key) => (
                        <div key={key}>
                            <SelectItem value={key}>{key}</SelectItem>
                        </div>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}