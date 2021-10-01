import React, { useState } from 'react';

export const DataTable = ({dataForTable}:
    {dataForTable: number[]}
): JSX.Element => {


    return(
        <table className="dataTable">
            <tr className = "Labels">
                <td id="2a">
                    <strong>2's</strong>
                </td>
                <td id="3a">
                    <strong>3's</strong>
                </td>
                <td id="4a">
                    <strong>4's</strong>
                </td>
                <td id="5a">
                    <strong>5's</strong>
                </td>
                <td id="6a">
                    <strong>6's</strong>
                </td>
                <td id="7a">
                    <strong>7's</strong>
                </td>
                <td id="8a">
                    <strong>8's</strong>
                </td>
                <td id="9a">
                    <strong>9's</strong>
                </td>
                <td id="10a">
                    <strong>10's</strong>
                </td>
                <td id="11a">
                    <strong>11's</strong>
                </td>
                <td id="12a">
                    <strong>12's</strong>
                </td>
            </tr>
            <tr>
                <td id="2b">
                    {dataForTable[0]}
                </td>
                <td id="3b">
                    {dataForTable[1]}
                </td>
                <td id="4b">
                    {dataForTable[2]}
                </td>
                <td id="5b">
                    {dataForTable[3]}
                </td>
                <td id="6b">
                    {dataForTable[4]}
                </td>
                <td id="7b">
                    {dataForTable[5]}
                </td>
                <td id="8b">
                    {dataForTable[6]}
                </td>
                <td id="9b">
                    {dataForTable[7]}
                </td>
                <td id="10b">
                    {dataForTable[8]}
                </td>
                <td id="11b">
                    {dataForTable[9]}
                </td>
                <td id="12b">
                    {dataForTable[10]}
                </td>
            </tr>
        </table>
    )
}