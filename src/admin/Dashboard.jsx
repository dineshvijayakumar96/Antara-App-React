import { Card, CardContent, CardHeader } from "@mui/material"
import { useState } from "react";

function Dashboard() {

  const Title = "Antara Admin - Dashboard";
      
  useState(() => {
    document.title = Title;
  }, []);

  return (
    <div>
        <Card>
            <CardHeader title="Welcome to the Antara Admin Dashboard" />
            <CardContent>Use the sidebar to manage resources</CardContent>
        </Card>
    </div>
  )
}

export default Dashboard;