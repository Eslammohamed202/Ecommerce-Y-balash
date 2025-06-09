"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Hero from "@/components/Home/Hero";
import LastUpdates from "@/components/Home/LastUpdates";
import QuickAction from "@/components/Home/QuickAction";
import RecentOrders from "@/components/Home/RecentOrders";
import SalesAnalytics from "@/components/Home/SalesAnalytics";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="container flex justify-between items-center lg:mt-12 mt-6">
        <div>
          <h2 className="lg:text-2xl md:text-lg text-md text-Main font-bold lg:mb-4 mb-2">
            Welcome Back, {session?.user?.name || "Seller"}
          </h2>
          <p className="text-gray-700 lg:text-md md:text-sm text-xs">22/4/2022 thursday</p>
        </div>
        <div>
          <Link href="/add-product">
            <button className="py-2 px-4 bg-Main text-white rounded-xl lg:text-lg md:text-md text-sm">
              Add New Product
            </button>
          </Link>
        </div>
      </div>
      <Hero />
      <SalesAnalytics />
      <div className="lg:mt-12 mt-6 container lg:mb-12 mb-6">
        <h1 className="text-2xl font-medium text-gray-900 mb-6">Recent Orders</h1>
      </div>
      <RecentOrders restaurantId={session?.user?.restaurantId} />
      <QuickAction />
      <LastUpdates />
    </div>
  );
}