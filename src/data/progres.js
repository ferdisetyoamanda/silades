// const status = [
//     {
//         id: 1,
//         name: "Draft",
//         color: "bg-gray-400",
//         description: "Laporan belum diajukan secara resmi oleh pelapor.",
//     },
//     {
//         id: 2,
//         name: "Diajukan",
//         color: "bg-blue-400",
//         description: "Laporan telah diajukan dan sedang menunggu tinjauan awal.",
//     },
//     {
//         id: 3,
//         name: "Dalam Proses Tinjauan",
//         color: "bg-gray-400",
//         description: "Laporan sedang diperiksa oleh pihak yang berwenang untuk validasi.",
//     },
//     {
//         id: 4,
//         name: "Dalam Proses Verifikasi Lapangan",
//         color: "bg-purple-400",
//         description: "Laporan sedang diverifikasi di lapangan oleh tim yang bertugas.",
//     },
//     {
//         id: 5,
//         name: "Disetujui untuk Tindakan",
//         color: "bg-green-400",
//         description: "Laporan telah disetujui untuk diambil tindakan lebih lanjut, seperti perbaikan atau pembangunan.",
//     },
//     {
//         id: 6,
//         name: "Dalam Proses Perbaikan/Pembangunan",
//         color: "bg-yelow-400",
//         description: "Tindakan perbaikan atau pembangunan sedang dilakukan berdasarkan laporan tersebut.",
//     },
//     {
//         id: 7,
//         name: "Selesai",
//         color: "bg-green-400",
//         description: "Tindakan yang diperlukan telah selesai dilakukan dan masalah sudah ditangani.",
//     },
// ]
// Diajukan: Laporan telah diajukan oleh masyarakat dan sedang menunggu tinjauan.
// Dalam Proses: Laporan sedang diproses oleh pihak berwenang, termasuk tahap verifikasi dan tindakan perbaikan atau pembangunan.
// Selesai: Tindakan yang diperlukan telah selesai dilakukan, dan masalah yang dilaporkan telah ditangani.
const progres = [
    {
        id: 1,
        name: "Diajukan",
        color: "bg-blue-400",
        description: "Laporan telah diajukan oleh masyarakat dan sedang menunggu tinjauan."
    },
    {
        id: 2,
        name: "Dalam Proses",
        color: "bg-gray-400",
        description: "Laporan sedang diproses oleh pihak berwenang, termasuk tahap verifikasi dan tindakan perbaikan atau pembangunan."
    },
    {
        id: 3,
        name: "Selesai",
        color: "bg-green-400",
        description: "Tindakan yang diperlukan telah selesai dilakukan, dan masalah yang dilaporkan telah ditangani."
    }

];
export default progres;