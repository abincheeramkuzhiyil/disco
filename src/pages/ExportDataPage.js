import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Container from "../components/ui/Container";

export default function ExportDataPage() {
    const [appData, setAppData] = useState(null);

    useEffect(() => {
        const data = window.localStorage.getItem('expenses');
        setAppData(data);
    }, [])

    return (
        <>
            <Container>
                <Paper>
                    <div>{appData}</div>
                </Paper>
            </Container>
        </>
    );
}