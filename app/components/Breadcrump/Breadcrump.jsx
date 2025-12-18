"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Breadcrump.css";

export default function Breadcrump({Title}){
    const pathname = usePathname();
    return (
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">{Title}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
                    <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link className="text-white" href="#">Pages</Link></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">{pathname.replace("/", "")}</li>
                </ol>
            </nav>
        </div>
    </div>
    );
}