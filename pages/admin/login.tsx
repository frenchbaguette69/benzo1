import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = async () => {

        if(!email || !password) return;

        try {
            await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
        }
        catch(error: any){
            console.error(error);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight">Admin Login</h1>
                    <p className="text-muted-foreground">Enter your email and password to access the admin dashboard.</p>
                </div>
                <Card>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={(v) => setEmail(v.target.value)} name="email" id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input onChange={(v) => setPassword(v.target.value)} name="password" id="password" type="password" required />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => handleLoginSubmit()} className="w-full">Sign in</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
};