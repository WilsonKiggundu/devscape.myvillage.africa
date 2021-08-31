import React, {useRef, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import useOnScreen from "../../../hooks/useOnScreen";

export default function MostUsedDatabases() {
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])

    const ref: any = useRef()
    const isVisible = useOnScreen(ref)

    if (isVisible && data.length === 0) {
        fetch(`${API_BASE_URL}/dViA2PvPfWab`)
            .then(response => response.json())
            .then(data => {
                    setData(data.data)
                    setLabels(data.labels)
                }
            )
            .catch(error => console.error(error.toString()))
    }

    return (
        <div ref={ref}>
            <ChartSection height={500} labels={labels} data={data}
                          title="Database Management Systems"
                          chartTitle="Most used database systems">
                <p>A database is an organized collection of structured information, or data, typically stored
                    electronically in a computer system. A database is usually controlled by a database management
                    system (DBMS). Together, the data and the DBMS, along with the applications that are associated with
                    them, are referred to as a database system, often shortened to just database.</p>
                <p>Data within the most common types of databases in operation today is typically modeled in rows and
                    columns in a series of tables to make processing and data querying efficient. The data can then be
                    easily accessed, managed, modified, updated, controlled, and organized. Most databases use
                    structured query language (SQL) for writing and querying data.</p>
                <p>Databases have evolved dramatically since their inception in the early 1960s. Navigational databases
                    such as the hierarchical database (which relied on a tree-like model and allowed only a one-to-many
                    relationship), and the network database (a more flexible model that allowed multiple relationships),
                    were the original systems used to store and manipulate data. Although simple, these early systems
                    were inflexible. In the 1980s, relational databases became popular, followed by object-oriented
                    databases in the 1990s. More recently, NoSQL databases came about as a response to the growth of the
                    internet and the need for faster speed and processing of unstructured data. Today, cloud databases
                    and self-driving databases are breaking new ground when it comes to how data is collected, stored,
                    managed, and utilized.</p>
                <p>We asked the developer which of the available database management systems they have used on the
                    software applications they have built. Almost 9 out of 10 mentioned MySQL and nearly half of the
                    respondents said they have used MongoDB. A few have used Oracle and Microsoft SQL Server.</p>
            </ChartSection>
        </div>
    )
}