"use client"
import { firebase_app, db, firebaseConfig } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { InternshipApplication } from "@/lib/libcsv"
import { Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Progress } from "@nextui-org/progress"

import { initializeApp } from "firebase/app";

const fetchInternData = async (enrollmentNumber: string) => {
    const app = initializeApp(firebaseConfig)
    try {
        const res = await getDoc(doc(db, "internData", enrollmentNumber))
        return res.data()
    } catch (e) {
        throw("F")
    }
}


export default function Page({ params }: { params: { slug: string } }) {
    const [internData, setInternData] = useState<InternshipApplication>()

    async function fetchData() {
        const data = await fetchInternData(params.slug) as InternshipApplication;
        setInternData(data);
        console.log(internData)
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center h-[80%]">
                <Progress label="redability" value={parseInt(internData?.reliability || '0') || 0} className="max-w-md p-4" />

                <Textarea
                    isReadOnly={true}
                    label={params.slug}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Loading data"
                    value={JSON.stringify(internData, null, '\t')}
                    className="w-full shadow-medium rounded-large p-4 transition-all"
                />

                <Button color="primary" onClick={fetchData} className="m-2 shadow">Fetch Data</Button>
            </div>
        </>
    )
}
