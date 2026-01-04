"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/50 px-4 py-6 text-sm text-foreground/70 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Copyright - слева */}
          <p className="font-light whitespace-nowrap">
            © {new Date().getFullYear()} Lurevelle Digital. All rights reserved.
          </p>

          {/* Terms & Privacy - ТОЧНО ПО СЕРЕДИНЕ */}
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            <Link
              href="https://www.lurevelle.digital/tos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium whitespace-nowrap text-foreground/80 transition-all hover:text-foreground hover:underline"
            >
              Terms & Conditions
            </Link>

            <Link
              href="https://www.lurevelle.digital/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium whitespace-nowrap text-foreground/80 transition-all hover:text-foreground hover:underline"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Соцсети - справа */}
          <div className="flex items-center gap-2">
            <Link
              href="https://t.me/lurevelle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-all hover:scale-105 hover:bg-accent/50 hover:shadow-xl"
              aria-label="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="h-6 w-6 text-foreground/90"
              >
                <path
                  fill="currentColor"
                  d="M32,10c12.15,0,22,9.85,22,22s-9.85,22-22,22s-22-9.85-22-22S19.85,10,32,10z M39.589,40.968c0.404-1.241,2.301-13.615,2.534-16.054c0.071-0.738-0.163-1.229-0.619-1.449c-0.553-0.265-1.371-0.133-2.322,0.21c-1.303,0.47-17.958,7.541-18.92,7.951c-0.912,0.388-1.775,0.81-1.775,1.423c0,0.431,0.256,0.673,0.96,0.924c0.732,0.261,2.577,0.82,3.668,1.121c1.05,0.29,2.243,0.038,2.913-0.378c0.709-0.441,8.901-5.921,9.488-6.402c0.587-0.48,1.056,0.135,0.576,0.616c-0.48,0.48-6.102,5.937-6.844,6.693c-0.901,0.917-0.262,1.868,0.343,2.249c0.689,0.435,5.649,3.761,6.396,4.295c0.747,0.534,1.504,0.776,2.198,0.776C38.879,42.942,39.244,42.028,39.589,40.968z"
                />
              </svg>
            </Link>

            <Link
              href="https://instagram.com/lurevelle.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-all hover:scale-105 hover:bg-accent/50 hover:shadow-xl"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7"
              >
                {" "}
                <path
                  d="M11.7255 3C9.35597 3 9.0586 3.01036 8.12796 3.05271C7.19914 3.09525 6.56515 3.2423 6.0104 3.45806C5.43656 3.68091 4.9498 3.97902 4.46485 4.46416C3.97953 4.94913 3.68144 5.43591 3.45787 6.00958C3.24157 6.56453 3.09434 7.19872 3.05253 8.12721C3.01091 9.05788 3 9.35544 3 11.725C3 14.0946 3.01054 14.391 3.05271 15.3217C3.09543 16.2506 3.24248 16.8846 3.45805 17.4393C3.68107 18.0132 3.97917 18.5 4.4643 18.9849C4.94907 19.4703 5.43584 19.7691 6.00931 19.9919C6.56442 20.2077 7.1986 20.3548 8.12724 20.3973C9.05787 20.4396 9.35506 20.45 11.7244 20.45C14.094 20.45 14.3905 20.4396 15.3211 20.3973C16.25 20.3548 16.8847 20.2077 17.4398 19.9919C18.0135 19.7691 18.4995 19.4703 18.9843 18.9849C19.4696 18.5 19.7677 18.0132 19.9912 17.4395C20.2057 16.8846 20.353 16.2504 20.3966 15.3219C20.4384 14.3912 20.4493 14.0946 20.4493 11.725C20.4493 9.35544 20.4384 9.05806 20.3966 8.12739C20.353 7.19854 20.2057 6.56453 19.9912 6.00976C19.7677 5.43591 19.4696 4.94913 18.9843 4.46416C18.4989 3.97884 18.0136 3.68073 17.4393 3.45806C16.8831 3.2423 16.2487 3.09525 15.3199 3.05271C14.3892 3.01036 14.093 3 11.7227 3H11.7255ZM10.9428 4.57232C11.1751 4.57195 11.4343 4.57232 11.7255 4.57232C14.055 4.57232 14.3311 4.58068 15.251 4.62249C16.1016 4.66139 16.5633 4.80353 16.8709 4.92295C17.278 5.08109 17.5683 5.27014 17.8735 5.57551C18.1789 5.88089 18.3679 6.17172 18.5264 6.57889C18.6458 6.88608 18.7881 7.34778 18.8269 8.19846C18.8687 9.11822 18.8777 9.39452 18.8777 11.723C18.8777 14.0515 18.8687 14.3278 18.8269 15.2475C18.788 16.0982 18.6458 16.5599 18.5264 16.8671C18.3683 17.2743 18.1789 17.5642 17.8735 17.8694C17.5681 18.1748 17.2782 18.3638 16.8709 18.522C16.5637 18.6419 16.1016 18.7837 15.251 18.8226C14.3313 18.8644 14.055 18.8735 11.7255 18.8735C9.39578 18.8735 9.11968 18.8644 8.19994 18.8226C7.34928 18.7833 6.8876 18.6412 6.57987 18.5218C6.17271 18.3636 5.88189 18.1746 5.57652 17.8692C5.27116 17.5638 5.08212 17.2737 4.92362 16.8664C4.8042 16.5592 4.66188 16.0975 4.62316 15.2468C4.58134 14.3271 4.57298 14.0508 4.57298 11.7207C4.57298 9.39062 4.58134 9.11595 4.62316 8.19618C4.66206 7.3455 4.8042 6.88381 4.9238 6.57625C5.08195 6.16909 5.27116 5.87827 5.5767 5.57289C5.88207 5.26752 6.17271 5.07847 6.58005 4.92015C6.88742 4.8003 7.34928 4.65816 8.19994 4.61908C9.00776 4.58237 9.31567 4.57177 10.9428 4.5698V4.57232ZM16.3697 5.99847C15.7668 5.99847 15.278 6.48665 15.278 7.08976C15.278 7.69269 15.7668 8.18142 16.3697 8.18142C16.9726 8.18142 17.4614 7.69269 17.4614 7.08976C17.4614 6.48683 16.9726 5.99829 16.3697 5.99829V5.99847ZM11.7255 7.17929C9.25223 7.17929 7.24652 9.18518 7.24652 11.6585C7.24652 14.1319 9.25223 16.1366 11.7255 16.1366C14.1988 16.1366 16.2036 14.1319 16.2036 11.6585C16.2036 9.1852 14.1986 7.17929 11.7253 7.17929H11.7255ZM11.7255 8.75161C13.3289 8.75161 14.6283 10.0509 14.6283 11.6585C14.6283 13.266 13.3289 14.5654 11.7255 14.5654C10.1219 14.5654 8.82275 13.266 8.82275 11.6585C8.82275 10.0509 10.1219 8.75161 11.7255 8.75161Z"
                  fill="currentColor"
                  className="text-foreground/70"
                />{" "}
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/lurevelle-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-all hover:scale-105 hover:bg-accent/50 hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="h-6 w-6 text-foreground/90"
              >
                <path
                  fill="currentColor"
                  d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
