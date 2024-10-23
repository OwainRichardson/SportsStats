"use client"; // This is a client component 👈🏽

import HeaderNavBar from "../components/nav/header-nav-bar";
import SportsList from "../components/sports/sports-list";

export default function Sports() {
    return (
        <main className="flex min-h-screen flex-row justify-between">
            <HeaderNavBar />
            <div className="pt-20 px-6 w-full">
                <SportsList />
            </div>
        </main>
    );
}