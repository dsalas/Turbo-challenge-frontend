import Form from 'next/form';
import Image from 'next/image';

export default function LoginForm() {
    return (
    <div className="flex flex-col gap-10 items-center">
        <Image
        src="/welcome_cactus.png"
        alt="Yay, You're Back!"
        width={100}
        height={100}
        layout="fixed"
      />
      <h1 className="text-4xl text-center sm:text-left  font-[family-name:var(--font-turbo-inria)]">
      Yay, You're Back!
      </h1>
        <Form action="/dashboard" className="flex flex-col">
          <input name="email" className="w-96 mb-2 p-2 border border-[color:var(--foreground)] rounded bg-transparent placeholder:text-black" placeholder="Email adress" />
          <input type="password" name="password" className="w-96 mb-2 p-2 border border-[color:var(--foreground)] rounded bg-transparent placeholder:text-black" placeholder="Password"/>
          <button type="submit" className="mt-6  border border-[color:var(--foreground)] bg-transparent hover:bg-transparent font-bold py-2 px-4 rounded-full ">
              Sign up
          </button>
        </Form>
      </div>
    )
}