import React, { useState } from 'react';

export const DataTable = ({dataForTable}:
    {dataForTable: number[]}
): JSX.Element => {


    return(
        <table className="dataTable">
            <tr>
                <td>
                    2's
                </td>
                <td>
                    3's
                </td>
                <td>
                    4's
                </td>
                <td>
                    5's
                </td>
                <td>
                    6's
                </td>
                <td>
                    7's
                </td>
                <td>
                    8's
                </td>
                <td>
                    9's
                </td>
                <td>
                    10's
                </td>
                <td>
                    11's
                </td>
                <td>
                    12's
                </td>
            </tr>
            <tr>
                <td>
                    {dataForTable[0]}
                </td>
                <td>
                    {dataForTable[1]}
                </td>
                <td>
                    {dataForTable[2]}
                </td>
                <td>
                    {dataForTable[3]}
                </td>
                <td>
                    {dataForTable[4]}
                </td>
                <td>
                    {dataForTable[5]}
                </td>
                <td>
                    {dataForTable[6]}
                </td>
                <td>
                    {dataForTable[7]}
                </td>
                <td>
                    {dataForTable[8]}
                </td>
                <td>
                    {dataForTable[9]}
                </td>
                <td>
                    {dataForTable[10]}
                </td>
            </tr>
        </table>
    )
}