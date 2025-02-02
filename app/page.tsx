'use client'
 
import LoginForm from "@/app/ui/login-form";
import SignUpForm from "@/app/ui/signup-form";
import { useState } from "react";

export default function Home() {
  
  const [activeComponent, setActiveComponent] = useState(<SignUpForm />);
  const [newUser, setNewUser] = useState(false);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-turbo-inter)]">
      <main className="flex flex-col gap-8 items-center">
          {
            activeComponent
          }
          <a
          className=""
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setNewUser(!newUser);
            setActiveComponent(newUser ? <SignUpForm /> :  <LoginForm />);
          }}
          >{newUser?"Oops! I’ve never been here before":"Already have an account? Login"} </a>
      </main>
    </div>

  );
}
