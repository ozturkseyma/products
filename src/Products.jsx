import React from 'react'
import { products } from './data/products'

export default function Products() {
    return (<>
        <table className='w3-table' style={{ background: '#CCFFFF' }}>
            <thead>

                <tr>
                    <th style={{ color: 'pink', border: '3px solid pink' }}>Id</th>
                    <th style={{ color: 'blue', border: '3px solid blue' }}>Supplier Id</th>
                    <th style={{ color: 'red', border: '3px solid red' }}>Category Id</th>
                    <th style={{ color: 'purple', border: '3px solid purple' }}>Quantity Per Unit</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.supplierId}</td>
                            <td>{item.categoryId}</td>
                            <td>{item.quantityPerUnit}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}
