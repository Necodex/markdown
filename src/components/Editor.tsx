import React from "react";
import "./editor.css";

type Props = {
  test?: string;
}

export default function Editor(props: Props) {
  return <>Editor {props.test}</>;
}
