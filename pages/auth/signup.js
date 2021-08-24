import React, { useState, useEffect } from "react";
import Head from "next/head";

import { motion } from 'framer-motion';
import { titleVariants, contentVariants } from '../../components/motionVariants';

import Router from "next/router";
import { useUser } from "../../lib/hooks";

const SignupPage = () => {
    const [user, { mutate }] = useUser();
    const [errorMsg, setErrorMsg] = useState("");

    // call whenever user changes (ex. right after signing up successfully)
    useEffect(() => {
        // redirect to home if user is authenticated
        if (user) Router.replace("/");
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: e.currentTarget.name.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };
        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        if (res.status === 201) {
            const userObj = await res.json();
            // writing our user object to the state
            mutate(userObj);
        } else {
            setErrorMsg(await res.text());
        }
    };

    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="box">
            <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="title">Krijoni llogarinë tuaj të re</motion.h1>
            <motion.div variants={contentVariants} className="row">
                <form onSubmit={handleSubmit} className="form-box">
                    {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
                    <div className="group">
                        <input type="text" name="name" className="input-default" required />
                        <label>Emri & Mbiemri</label>
                    </div>
                    <div className="group">
                        <input type="email" name="email" className="input-default" required />
                        <label>Email</label>
                    </div>
                    <div className="group">
                        <input type="password" name="password" className="input-default" required />
                        <label>Password</label>
                    </div>
                    <div className="group">
                        <button type="submit" className="btn-main" >
                            Dërgo <span class="far fa-paper-plane"></span>
                        </button>
                    </div>
                </form>
            </motion.div>

        </motion.div>
    );
};

export default SignupPage;