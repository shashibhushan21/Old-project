# TCS Interview Prep Guide: Project "Eduford"

This guide prepares you to discuss the **Eduford** project confidently during your TCS interview.

## 📝 Project Summary (The "Elevator Pitch")
"Eduford is a multi-page university management frontend project. I built it using HTML, CSS, and Vanilla JavaScript. The main highlight of this project is the use of **GSAP (GreenSock Animation Platform)** to create smooth, high-performance scroll-triggered animations that make the website feel premium and interactive compared to static sites."

---

## 💡 Potential Technical Questions & Answers

### 1. Why did you use GSAP instead of standard CSS animations?
*   **Answer:** "While CSS animations are great for simple transitions, GSAP offers much more control. It allows for **ScrollTrigger** (animations based on user scroll position), **Timeline sequencing** (running animations one after another precisely), and handled cross-browser performance optimizations better than raw CSS."

### 2. How did you make the website responsive?
*   **Answer:** "I used a mobile-first approach with **CSS Media Queries**. I implemented a toggleable side menu for mobile screens using JavaScript functions (`showMenu` and `hideMenu`) and used Flexbox for the layout containers to ensure elements align correctly on different screen sizes."

### 3. Explain the "Text Splitting" logic in your JavaScript.
*   **Answer:** "In my `home.js`, I wrote a function `page1AnimationText` that takes the headline text, splits it into individual characters using `.split("")`, wraps each character in a `<span>`, and then injects it back into the HTML. This allowed me to use GSAP to animate each letter individually with a 'stagger' effect."

### 4. What challenges did you face?
*   **Answer:** "One challenge was ensuring that the ScrollTrigger animations didn't overlap or trigger too early. I solved this by fine-tuning the `start` and `end` markers and using `scrub: 1` to link the animation progress directly to the scroll speed."

### 5. If you had more time, how would you improve this?
*   **Answer:** "I would integrate a backend using **Node.js** or **PHP** to handle the contact form submissions and perhaps use a framework like **React** to make it a Single Page Application (SPA) for even faster transitions."

---

## 🛠️ Concepts to Mention (Keywords)
- **DOM Manipulation:** Accessing and modifying HTML elements via JS.
- **Event Listeners:** `onclick` events for the mobile menu.
- **External APIs/Libraries:** Integration of GSAP via CDN and FontAwesome icons.
- **UI/UX Design:** Focus on user engagement through micro-interactions.
- **Cross-Browser Compatibility:** Ensuring style consistency across Chrome, Firefox, and Safari.

---

## 🎓 Tips for TCS Interview
- **Be Professional:** TCS values clear communication and a structured approach.
- **Explain the 'Why':** Always explain why you chose a specific technology (e.g., "GSAP for better performance").
- **Mention Teamwork (if applicable):** If you worked with others, mention how you managed version control (Git).

Good luck, you've got this! 🚀
