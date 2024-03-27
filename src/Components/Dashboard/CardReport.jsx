import React from 'react';
import backgroundImage from '../../../src/assets/background.png';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

function CardReport() {
    return (
        <Card className="w-full max-w-[48rem] flex-row rounded-r-lg">
            <CardHeader
                shadow={true}
                floated={true}
                className="m-0 w-2/5 shrink-0 rounded-r-sm mr-2"
            >
                <img
                    src="https://akcdn.detik.net.id/visual/2020/07/15/ilustrasi-jalan-rusak-cnbc-indonesiamuhammad-sabki-1_169.jpeg?w=715&q=90"
                    alt="card-image"
                    className="h-full w-full object-cover rounded-l-lg"
                />
                <div className="klasifikasi bg-slate-900 absolute top-4 left-4 rounded-md px-1">
                    <h2 className='text-gray-300'>
                        Klasifikasi : <span className="text-white">Jalan Rusak Berat</span>
                    </h2>
                </div>

            </CardHeader>
            <CardBody>
                <div className="top flex justify-between mx-2">
                    <div className="right border-green-500 border-2 px-1 mt-1 rounded-lg">
                        <h2 className='text-black text-sm'>
                            Status : <span className="text-black">Diterima DPRD</span>
                        </h2>
                    </div>
                    <div className="left">
                        <span className='text-blue-300 text-xs'>
                            12 Juli 2021
                        </span>
                    </div>
                </div>

                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Pelaporan Infrastruktur di Desa Cilame oleh Bapak Agus
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    Bapak Agus melaporkan bahwa jalan di Desa Cilame rusak parah dan meminta bantuan untuk memperbaikinya,
                    karena jalan tersebut merupakan akses utama warga Desa Cilame.
                </Typography>
                <div className="top flex justify-between my-2">
                    <div className="left">
                        <span className=' text-xs '>
                            Desa
                        </span>
                        <span className='text-black text-xs ml-1 mr-1'>
                            Cilame
                        </span>

                        <span className='text-xs '>
                            Kecamatan
                        </span>
                        <span className='ml-1 text-xs'>
                            Tanjung
                        </span>
                    </div>
                    <div className="right border-yellow-300 border-2 px-1 mt-1 rounded-lg mr-2">
                        <h2 className='text-black text-sm'>
                            Proses
                        </h2>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
export default CardReport;