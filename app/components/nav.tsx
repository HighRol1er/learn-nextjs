"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  /**
   * usePathname을 통해 내가 어디 페이지에 있는지 이모지로 표시하기 
   * 1. 삼항 연산자 사용하기
  */
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "👈" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link> {path === "/about-us" ? "👈" : ""}
        </li>
      </ul>
    </nav>
  )
}