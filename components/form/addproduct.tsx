import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { trpc } from "@/utils/trpc";

export const AddProduct = () => {

    const mutation = trpc.productRouter.insert.useMutation();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState<File | null>(null);


    const fileToBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const base64Image = image ? await fileToBase64(image) : null;

        mutation.mutate({ name, description, price, imageBase64: base64Image, stock: 0, category: "SLAAPPILLEN" });
    };

    return (
             <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Product Management</h2>
              </div>
              <form onSubmit={(e) => handleSubmit(e)} className="mt-6 grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product-name">Product Name</Label>
                    <Input onChange={(v) => setName(v.target.value)} id="product-name" placeholder="Enter product name" />
                  </div>
                  <div>
                    <Label htmlFor="product-price">Price</Label>
                    <Input onChange={(v) => setPrice(v.target.valueAsNumber)} id="product-price" type="number" placeholder="Enter product price" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="product-description">Description</Label>
                  <Textarea onChange={(v) => setDescription(v.target.value)}  id="product-description" placeholder="Enter product description" rows={3} />
                </div>
                <div>
                  <Label htmlFor="product-image">Image</Label>
                  <Input onChange={(v) => setImage(v.target.files?.length ? v.target.files[0] : null)} id="product-image" type="file" />
                </div>
                <Button type="submit" className="justify-self-end">
                  Save Product
                </Button>
              </form>
            </div>
    )
};