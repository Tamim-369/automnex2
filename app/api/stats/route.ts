import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const statsPath = path.join(process.cwd(), 'stats.json');

export async function GET(req: NextRequest) {
    let stats = { totalVisits: 0, totalDownloads: 0 };
    try {
        const data = fs.readFileSync(statsPath, 'utf-8');
        stats = JSON.parse(data);
    } catch { }
    return NextResponse.json(stats);
} 