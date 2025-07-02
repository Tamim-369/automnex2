"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StatsPage() {
    const [stats, setStats] = useState<{ totalVisits: number; totalDownloads: number } | null>(null);

    useEffect(() => {
        fetch("/api/stats")
            .then((res) => res.json())
            .then(setStats);
    }, []);

    if (!stats) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

    const ratio = stats.totalVisits > 0 ? (stats.totalDownloads / stats.totalVisits) : 0;

    const data = {
        labels: ["Total Visits", "Total Downloads"],
        datasets: [
            {
                label: "Count",
                data: [stats.totalVisits, stats.totalDownloads],
                backgroundColor: ["#60a5fa", "#34d399"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: "Visits vs Downloads" },
        },
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-8">
            <h1 className="text-3xl font-bold mb-6">Stats</h1>
            <div className="mb-4 text-lg">Total Visits: <b>{stats.totalVisits}</b></div>
            <div className="mb-4 text-lg">Total Downloads: <b>{stats.totalDownloads}</b></div>
            <div className="mb-4 text-lg">Download/Visit Ratio: <b>{ratio.toFixed(2)}</b></div>
            <div className="w-full max-w-md bg-white rounded-xl shadow p-4">
                <Bar data={data} options={options} />
            </div>
        </main>
    );
} 