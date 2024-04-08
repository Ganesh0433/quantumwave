"use client"
import { Dispatch, SetStateAction, useState } from "react";

import { firebase_app, storage, auth, db } from "@/lib/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleIcon } from "@/lib/icons/google";
import { TableStudent } from "@/components/student-table/student-table"
import { signOut } from "firebase/auth";
const GoogleProvider = new GoogleAuthProvider();

import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import { Input } from "@nextui-org/input";
import { csv_to_object, InternshipApplication } from "@/lib/libcsv";
interface firebaseLoginProps {
    loadingElement: Dispatch<SetStateAction<boolean>>
    loginState: Dispatch<SetStateAction<boolean>>
    loginUser: Dispatch<SetStateAction<loginUser>>
}

interface loginUser  {
    displayName: string| null
    displayPic: string | null
}

const firebaseLogin = async ({ loadingElement, loginState, loginUser }: firebaseLoginProps) => {
    const app = firebase_app;
    const Gauth = getAuth();
    loadingElement(true)
    let f_credentials: OAuthCredential | null
    let f_token: string | undefined
    let f_resCode: any

    try {
        const res = await signInWithPopup(Gauth, GoogleProvider)
        f_credentials = GoogleAuthProvider.credentialFromResult(res)
        f_token = f_credentials?.accessToken
        console.debug(res)

        loadingElement(false)
        loginState(true)
        loginUser({
            displayName: res.user.displayName,
            displayPic: res.user.photoURL 
        })
    } catch (e) {
        console.warn("firebase Auth failed")
        console.warn(e)
        loadingElement(false)
        loginState(false)
    }

}

const firebaseLogout = async ({ loginState, loginUser }: firebaseLoginProps) => {
    const Gauth = getAuth();
    try {
        const res = await signOut(Gauth)
        loginState(false)
        loginUser({displayName: null, displayPic: null})
    } catch (e) {
        console.warn(e)
    }
}

const testFetchData = async (loadingElement: Dispatch<SetStateAction<boolean>>) => {
    loadingElement(true)
    try {
        const app = firebase_app
        const res = await getDoc(doc(db, "internData", "v0"))
        console.debug(res)
        loadingElement(false)
    } catch (e) {
        loadingElement(false)
        console.warn(e)
    }
}

const logFile = async (e: React.ChangeEvent<HTMLInputElement>,
                        state: Dispatch<SetStateAction<InternshipApplication[]>>) => {
    const file: File | null = e.target.files?.[0] || null;
    if (file) {
        const text = await file.text();
        const objects = csv_to_object(text)
        state(objects)
    }
};

const injest_to_firebase = (data: InternshipApplication[]) => {
    data.forEach(async (entry, index) => {
        try {
            const enrollmentNumber = entry?.enrollmentNumber || "UNSET-" + Date.now().toString()
            const res = await setDoc(doc(db, "internData", enrollmentNumber), entry);
            console.log(res)
        } catch (e) {
            console.warn(e)
        }
    });
};

export default function Home() {
    const [loginLoading, setloginLoading] = useState(false)
    const [fetchLoading, setfetchLoading] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState<loginUser>({ displayName: null, displayPic: null })
    const [ csvDataObject, setCsvDataObject] = useState<InternshipApplication[]>([])
    
    if (isLogged) {
        return (
            <>
                <div className="flex flex-col justify-center items-center w-screen h-screen">
                    <div className="flex flex-row justify-center items-center border rounded-md">
                        <User
                            name={loggedInUser.displayName}
                            avatarProps={{
                                src: loggedInUser?.displayPic ?? undefined
                            }}
                            className="p-2"
                        />
                        <Button color="danger"
                            onClick={() => firebaseLogout({ loadingElement: setloginLoading, loginState: setIsLogged, loginUser: setLoggedInUser })}
                        >
                            sign out
                        </Button>
                        <Button color="primary"
                            isLoading={fetchLoading}
                            onClick={() => testFetchData(setfetchLoading)}
                        >
                            Fetch
                        </Button>
                    </div>
                    <input className="" type="file" onAbort={() => console.log("aborted")} onChange={(e) => logFile(e, setCsvDataObject)}></input>
                    <Button color="primary" onClick={(e) => injest_to_firebase(csvDataObject)}>Injest Test</Button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1>GG</h1>
                <Button
                    isLoading={loginLoading}
                    onClick={() => firebaseLogin({ loadingElement: setloginLoading, loginState: setIsLogged, loginUser: setLoggedInUser })}
                >
                    <GoogleIcon></GoogleIcon>
                </Button>
            </>
        )
    }
}
