import React, { useState } from 'react';

export const DataTable = ({dataForTable}:
    {dataForTable: number[]}
): JSX.Element => {


    return(
        <table className="dataTable">
            <tr className = "Labels">
                <td>
                    <strong>2's</strong>
                </td>
                <td>
                    <strong>3's</strong>
                </td>
                <td>
                    <strong>4's</strong>
                </td>
                <td>
                    <strong>5's</strong>
                </td>
                <td>
                    <strong>6's</strong>
                </td>
                <td>
                    <strong>7's</strong>
                </td>
                <td>
                    <strong>8's</strong>
                </td>
                <td>
                    <strong>9's</strong>
                </td>
                <td>
                    <strong>10's</strong>
                </td>
                <td>
                    <strong>11's</strong>
                </td>
                <td>
                    <strong>12's</strong>
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