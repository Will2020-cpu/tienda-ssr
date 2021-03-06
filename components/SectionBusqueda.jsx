import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'



const SectionBusqueda = () => {
    return (
        <>
            <div className="border bg-white max-w-md shadow-xl rounded-lg">
                <div className="p-4">
                    <div className="">
                        <h4 className="select-none nav">Mas Buscados</h4>
                        <ul className="mt-4 flex flex-wrap">
                            <li className="mr-2 mb-4"><Link href="/"><a className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100"> <FontAwesomeIcon icon={faChartBar}/> camisas</a></Link></li>
                            <li className="mr-2 mb-4"><Link href="/"><a className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100"> <FontAwesomeIcon icon={faChartBar}/> camisas</a></Link></li>
                            <li className="mr-2 mb-4"><Link href="/"><a className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100"> <FontAwesomeIcon icon={faChartBar}/> camisas</a></Link></li>
                            <li className="mr-2 mb-4"><Link href="/"><a className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100"> <FontAwesomeIcon icon={faChartBar}/> camisas</a></Link></li>
                            <li className="mr-2 mb-4"><Link href="/"><a className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100"> <FontAwesomeIcon icon={faChartBar}/> camisas</a></Link></li>
                        </ul>
                        <h4 className="mt-2 select-none nav">Mas Populares</h4>
                        <ul className=" flex flex-wrap">
                            <li className="mr-2 mb-4"><Link href="/"><div className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100 w-auto flex items-center space-x-2"><img src="https://i.pinimg.com/originals/be/31/5d/be315dc91d046cfcc33ab4e81463d96b.jpg" width="20" alt="sueter"/> <span>Sudadera Amarilla</span> </div></Link></li>
                            <li className="mr-2 mb-4"><Link href="/"><div className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100 w-auto flex items-center space-x-2"><img src="https://i.pinimg.com/originals/be/31/5d/be315dc91d046cfcc33ab4e81463d96b.jpg" width="20" alt="sueter"/> <span>Sudadera Amarilla</span> </div></Link></li>
                            <li className="mr-2 mb-4"><Link href="/"><div className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100 w-auto flex items-center space-x-2"><img src="https://i.pinimg.com/originals/be/31/5d/be315dc91d046cfcc33ab4e81463d96b.jpg" width="20" alt="sueter"/> <span>Sudadera Amarilla</span> </div></Link></li>
                            <li className="mr-2 mb-4"><Link href="/"><div className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100 w-auto flex items-center space-x-2"><img src="https://i.pinimg.com/originals/be/31/5d/be315dc91d046cfcc33ab4e81463d96b.jpg" width="20" alt="sueter"/> <span>Sudadera Amarilla</span> </div></Link></li>
                            <li className="mr-2 mb-4"><Link href="/"><div className="nav text-gray-500 py-2 px-3 rounded border hover:bg-gray-100 w-auto flex items-center space-x-2"><img src="https://i.pinimg.com/originals/be/31/5d/be315dc91d046cfcc33ab4e81463d96b.jpg" width="20" alt="sueter"/> <span>Sudadera Amarilla</span> </div></Link></li>

                        </ul>
                    </div>
                </div>           
            </div>
        </>
    )
}

export default SectionBusqueda
