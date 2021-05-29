import React from 'react'

const Table = (props) => {
    console.log(props)

    return (
        <div>
       <div className="tablecontainer">
                {props.apidata.map((item) => (
                    <>
                        <table>

                            <tr className="tablecontainer-table">
                                <th className="tablecontainer-table-header">{item.name}</th>
                                <td className="tablecontainer-table-row">{item.id}</td>
                            </tr>

                        </table>
                    </>

                ))

                }
            </div> 



        </div>
    )
}

export default Table
