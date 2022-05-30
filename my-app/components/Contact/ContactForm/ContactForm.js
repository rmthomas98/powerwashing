import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    const loadingToast = toast.loading("Sending message...", {
      style: {
        fontSize: "13px",
        fontWeight: 500,
        background: "#333",
        color: "#fff",
      },
    });

    const response = await axios.post("/api/send-message", data);
    if (response.data === "success") {
      setIsLoading(false);
      reset();
      toast.success("Message sent!", {
        id: loadingToast,
        style: {
          fontSize: "13px",
          fontWeight: 500,
          background: "#333",
          color: "#fff",
        },
        iconTheme: {
          primary: "#06ce95",
          secondary: "#fff",
        },
      });
    } else {
      setIsLoading(false);
      toast.error("An error has occurred.", {
        id: loadingToast,
        style: {
          fontSize: "13px",
          fontWeight: 500,
          background: "#333",
          color: "#fff",
        },
        iconTheme: {
          primary: "#e6375d",
          secondary: "#fff",
        },
      });
    }
  };

  return (
    <>
      <Toaster />
      <div className={styles.wrapper} id="contact-form">
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.header}>Send us a message.</p>
          <div className={styles.nameContainer}>
            <div
              className={`${styles.inputContainer} ${styles.firstNameContainer}`}
            >
              <span
                className={watch("firstName") ? styles.filled : styles.label}
              >
                First Name
              </span>
              <input
                type="text"
                className={styles.input}
                {...register("firstName", { required: true })}
              />
              <p
                className={styles.error}
                style={{ opacity: errors.firstName ? 1 : 0 }}
              >
                * required field
              </p>
            </div>
            <div className={styles.inputContainer}>
              <span
                className={watch("lastName") ? styles.filled : styles.label}
              >
                Last Name
              </span>
              <input
                type="text"
                className={styles.input}
                {...register("lastName", { required: true })}
              />
              <p
                className={styles.error}
                style={{ opacity: errors.lastName ? 1 : 0 }}
              >
                * required field
              </p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <span className={watch("email") ? styles.filled : styles.label}>
              Your Email
            </span>
            <input
              type="email"
              className={styles.input}
              {...register("email", { required: true })}
            />
            <p
              className={styles.error}
              style={{ opacity: errors.email ? 1 : 0 }}
            >
              * required field
            </p>
          </div>
          <div className={styles.inputContainer}>
            <span className={watch("phone") ? styles.filled : styles.label}>
              Phone Number
            </span>
            <input
              type="tel"
              className={styles.input}
              {...register("phone", { required: true })}
            />
            <p
              className={styles.error}
              style={{ opacity: errors.phone ? 1 : 0 }}
            >
              * required field
            </p>
          </div>
          <div className={styles.inputContainer}>
            <span
              className={
                watch("message")
                  ? styles.textareaLabelFilled
                  : styles.textareaLabel
              }
            >
              Your Message
            </span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              {...register("message", { required: true })}
            />
            <p
              className={styles.error}
              style={{ opacity: errors.message ? 1 : 0 }}
            >
              * required field
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              disabled={isLoading}
              type="submit"
              className={isLoading ? styles.disabled : styles.submitBtn}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
