export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#23272f] px-6 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#8b939e]">
        <span>
          <span className="text-[#f5a524]">&#36;</span> exit &mdash; &copy;{" "}
          {new Date().getFullYear()} Rayan Sheikh
        </span>
        <div className="flex gap-5">
          <a href="https://github.com/RayanSheikh01" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a524] transition-colors">
            github
          </a>
          <a href="https://linkedin.com/in/rayan-sheikh" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a524] transition-colors">
            linkedin
          </a>
          <a href="mailto:rayansheikh121@gmail.com" className="hover:text-[#f5a524] transition-colors">
            email
          </a>
        </div>
      </div>
    </footer>
  )
}
