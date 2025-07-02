import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const statsPath = path.join(process.cwd(), 'stats.json');
const downloadUrl = 'https://github.com/Tamim-369/ShieldSight/releases/download/v1.0/GuardSetup.exe';

export async function GET(req: NextRequest) {
    // Read stats
    let stats = { totalVisits: 0, totalDownloads: 0 };
    try {
        const data = fs.readFileSync(statsPath, 'utf-8');
        stats = JSON.parse(data);
    } catch { }
    // Increment downloads
    stats.totalDownloads += 1;
    // Write back
    fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
    // Redirect to actual file
    return NextResponse.redirect(downloadUrl);
} 