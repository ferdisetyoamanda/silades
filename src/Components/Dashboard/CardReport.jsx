import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

function CardReport({ data }) {
    return (
        <Card className="w-full max-w-[48rem] md:flex-row rounded-r-lg flex-col">
            <CardHeader
                shadow={true}
                floated={true}
                className="m-0 md:w-2/5 shrink-0 rounded-r-sm mr-2"
            >
                <img
                    src={data.image}
                    alt="card-image"
                    className="h-full w-full object-cover rounded-l-lg"
                />
                {data.classification && (
                    <div className="klasifikasi bg-slate-900 absolute top-4 left-4 rounded-md px-1">
                        <h2 className='text-gray-300'>
                            Klasifikasi : <span className="text-white">{data.classification}</span>
                        </h2>
                    </div>
                )}
            </CardHeader>
            <CardBody className='w-full'>
                <div className="top flex justify-between ">
                    <div className="right border-green-500 border-2  mt-1 rounded-lg">
                        <h2 className='text-black text-sm mx-1'>
                            Status : <span className="text-black">{data.status}</span>
                        </h2>
                    </div>
                    <div className="left">
                        <span className='text-blue-300 text-xs'>
                            {data.date}
                        </span>
                    </div>
                </div>

                <Typography variant="h4" color="blue-gray" className="mb-2">
                <Link to={`/detail/${data.id}`} className="text-blue-500 hover:underline"> Pelaporan oleh Saudara {data.author} di Desa {data.village} RT RW {data.rtrw} Kec {data.district}</Link>
                </Typography>



                <div className="flex justify-between my-2">
                    <div className="left">
                        <div className="text">
                            <span className='text-xs'>
                                {data.description.length > 100 ? data.description.slice(0, 100) + '....' : data.description}
                            </span>
                        </div>

                    </div>
                    <div className="right">
                        <div className=" border-yellow-300 border-2 px-1 mt-1 rounded-lg mr-2 ml-4">
                            <h2 className='text-black text-sm'>
                                {data.process}
                            </h2>
                        </div>

                        <span className='ml-1 text-xs'>

                        </span>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default CardReport;
