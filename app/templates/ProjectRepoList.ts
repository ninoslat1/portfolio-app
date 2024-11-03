export const portoRepo: { [key: string]: string } = {
    "nestjs-ws-latlong": "Latlong Tracker Backend",
    "resident-admin": "Resident Admin Dashboard",
    "vitets-excel-reader": "Transaction Sorter Webapp",
    "resident-member-csharp": "Member Data Forwarder",
    "nextjs-latlong-tracker": "Latlong Tracker Webapp",
    "vb-service-monitor": "Latlong Tracker Desktop",
};

export const sanitizePortoRepo = (repo:string): string => {
    return portoRepo[repo] || "";
}