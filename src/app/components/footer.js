export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 text-white bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - logo or text */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} PrepPal. All rights reserved.
        </div>

        {/* Right side - links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Use</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
