"use client";

import { ButtonWithAnimatedBorder } from "@/components/elements/buttons/button-with-animated-border";
import { useState } from "react";
import styles from "./styles.module.scss";
import { validateForm } from "./validators";

interface State {
  data: {
    email: string;
    subject: string;
    message: string;
  };
  error: string | null;
  success: boolean;
}

export function Form() {
  const [state, setState] = useState<State>({
    data: {
      email: "",
      subject: "",
      message: "",
    },
    error: null,
    success: false,
  });

  async function handleSubmit() {
    const { isValid, error } = validateForm(state.data);

    if (!isValid) {
      setState({ ...state, error });
    }

    const res = await fetch("/api/resend", {
      method: "POST",
      body: JSON.stringify({
        from: state.data.email,
        subject: state.data.subject,
        message: state.data.message,
      }),
    });

    const parsed = await res.json();

    if (res.status === 200) {
      setState({ ...state, success: true, error: null });
    } else {
      setState({ ...state, error: parsed.error });
    }
  }

  function handleChange(newData: any) {
    setState({
      ...state,
      data: { ...state.data, ...newData },
      error: null,
    });
  }

  if (state.success) {
    return (
      <div className="flex flex-col gap-4">
        <p>Thanks for reaching out!</p>
        <p>I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        value={"sbsilagadze@gmail.com"}
        disabled
        aria-label="My Email"
        className={styles.input}
        type="email"
      />

      <input
        aria-label="Your Email"
        onChange={(e) => handleChange({ email: e.target.value })}
        placeholder="Your Email"
        className={styles.input}
        type="email"
      />

      <input
        aria-label="Subject"
        onChange={(e) => handleChange({ subject: e.target.value })}
        placeholder="Subject"
        className={styles.input}
        type="text"
      />

      <textarea
        aria-label="Message"
        onChange={(e) => handleChange({ message: e.target.value })}
        rows={7}
        placeholder="Message"
        className={styles.input}
      />

      {state.error && <p className="text-red-500">{state.error}</p>}

      <ButtonWithAnimatedBorder
        label="Send"
        pauseAnimation
        onClick={handleSubmit}
      />
    </div>
  );
}
