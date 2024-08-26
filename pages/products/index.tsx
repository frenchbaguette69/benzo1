import { trpc } from "@/utils/trpc";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";
import { ProductCard } from "@/components/productcard";

const ProductIndex = () => {

    const MAX_DISPLAY_PRODUCTS = 4;

    const [page, setPage] = useState(1);

    const { data, refetch } = trpc.productRouter.getAllByPaginate.useQuery({ skip: page !== 1 ? (page - 1) * MAX_DISPLAY_PRODUCTS : 0, take: MAX_DISPLAY_PRODUCTS });

    const totalPages = Math.ceil((data?.productCount ?? 0) / MAX_DISPLAY_PRODUCTS);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        refetch();
    };

    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink href="#" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            <div className="w-full grid grid-cols-4">
                {data?.productData.map((product) => (
                    <div key={product.id}>
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            imageSrc={product.imageSrc} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductIndex;