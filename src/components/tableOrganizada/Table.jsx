import React, { useState } from "react";

import useTable from "./useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import { Link } from "react-router-dom";

const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
    <>
        <table className={styles.table}>
            <thead className={styles.tableRowHeader}>
                <tr>
                    <th className={styles.tableHeader}>Autores</th>
                    <th className={styles.tableHeader}>Países</th>
                    <th className={styles.tableHeader}>Géneros</th>
                    <th className={styles.tableHeader}>Libros</th>
                </tr>
            </thead>
            <tbody>
            {slice.map((el) => (
                <tr className={styles.tableRowItems} key={el.id}>
                    <td className={styles.tableCell}>{el.Author.name}</td>
                    <td className={styles.tableCell}>{el.Country.name}</td>
                    <td className={styles.tableCell}>{el.Genre.name}</td>
                    <td className={styles.tableCell}><Link to={`/viewWord/${el.name}`}><p id="titulo7">{el.name}</p></Link></td>
                </tr>
            ))}
            </tbody>
        </table>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
    );
};

export default Table;