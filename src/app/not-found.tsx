import { notFound } from "next/navigation";

export default function  NotFound() {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <h1>404 - Page Not Found</h1>
        </div>
    )
}