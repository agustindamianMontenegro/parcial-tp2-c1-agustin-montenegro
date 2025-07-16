
export default function distance(a, b) {
    const dx = a.xa - b.xa;
    const dy = a.ya - b.ya;
    const dz = a.za - b.za;
    return (dx * dx + dy * dy + dz * dz) ** 0.5;
}
