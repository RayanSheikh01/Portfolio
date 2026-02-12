export default function ContactPage() {
    return (
        <section className="pt-20">
            {/* Contact Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-black">Get in Touch</h1>
                <p className="text-gray-600 mt-2">Feel free to reach out to me through any of the platforms below:</p>
            </header>
            <ul className="space-y-2 text-black">
                <li>Email: <a href="mailto:rayansheikh121@gmail.com" className="text-blue-600">rayansheikh121@gmail.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/rayan-sheikh" target="_blank" className="text-blue-600">linkedin.com/in/rayan-sheikh</a></li>
                <li>GitHub: <a href="https://github.com/RayanSheikh01" target="_blank" className="text-blue-600">github.com/RayanSheikh01</a></li>
            </ul>
        </section>
    );
}
