import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Welcome to Swift-Buy</Title>
      <h1>Welcome to Swift-Buy!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="Innovative Technology" target="_blank">
          start.solidjs.com
        </a>{" "}
      </p>
    </main>
  );
}
