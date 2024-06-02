import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="text-center mt-3">
        <ul>
          <li>
            <a
              className="btn btn-primary text-sky-700"
              role="button"
              href="/csr"
            >
              Client Site rendering
            </a>
          </li>
          <li>
            <a
              className="btn btn-primary text-sky-700"
              role="button"
              href="/ssr"
            >
              Server Site rendering
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
