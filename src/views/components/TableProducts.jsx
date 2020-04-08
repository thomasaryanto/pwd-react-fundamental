import React from "react"

const TableProducts = () => {
    let arr = [
        {nama: "Tom", pekerjaan: "Developer"},
        {nama: "Jerry", pekerjaan: "Designer"}
    ]
    
    const renderData = () => {
        return arr.map(({nama, pekerjaan}, idx) => {
            return (
                <>
                <tr>
                    <td>{idx + 1}</td>
                    <td>{nama}</td>
                    <td>{pekerjaan}</td>
                </tr>
                </>
            )
        })
    }


    return (
        <>
        <table align="center">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Pekerjaan</th>
                </tr>
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
        </>
    )
}

export default TableProducts