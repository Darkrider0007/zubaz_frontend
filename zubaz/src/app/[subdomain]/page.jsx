"use client";
import { useParams } from "next/navigation";

export default function SubdomainPage() {
  const { subdomain } = useParams();

  return <h1>Subdomain: {subdomain}</h1>;
}
