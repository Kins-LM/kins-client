import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Registration(props) {
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    async function getEmailConfrimation() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/email_confirmation/${query.email_token}`
        );
        return setEmailConfirmed(response.data.emailConfirmed);
      } catch (err) {
        //handle err
        //need to redicect to login page
        console.log("line 17", err);
      }
    }
    if (query.email_token) {
      getEmailConfrimation();
    }
  });

  return (
    <div>
      Email Confirmation
      <div>{query.email_token}</div>
      <div>{emailConfirmed ? "Email is confirmed" : null}</div>
    </div>
  );
}
