import dbconnecct from "@/db/dbconnecct";
import React from "react";

export default function Home() {
  dbconnecct();
  return (
    <div>
      <h1>Thi is Home page</h1>
    </div>
  );
}
