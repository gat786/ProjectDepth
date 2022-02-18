import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue="// some comment"
      />
    </div>
  );
};

export default Home;
