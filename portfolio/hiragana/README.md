# Hiragana Cards
#### Video Demo:  <https://youtu.be/bQhAF3yGbqo>
#### Description:
# Hiragana Cards

Hiragana Cards is a website that aims to simplify the learning of Hiragana, the fundamental Japanese syllabary. The challenge was to take dozens of characters and make learning them as simple and approachable as possible.

## Learning Hiragana can be overwhelming at first.
There are **46 base characters, 20 dakuten characters, 5 handakuten characters, 36 small や (ゃ), ゆ (ゅ), よ (ょ) combinations**, and don't forget about the **small つ (っ)**. How do we make it simple—not just in terms of learning, but also UX and UI?

### **1. Simplify to the most important.**
The website focuses only on learning the **base characters**. I believe the rest is a matter of understanding, not memorization. If you learn the 46 base characters, you’ll acquire the variations naturally when interacting with the language.

### **2. Divide into groups.**
If you look at a row of numbers, how many could you remember in one glance? Most people remember **5–9 elements**. Hiragana is essentially a mix of **9 consonants and 5 vowels**. So, let’s break it into **groups of five** to keep the cognitive load to a minimum.

### **3. Keep attention.**
Remove distractions and guide the user with **visual hierarchy**.
> Press **F11** on your **Linux/Windows** keyboard to open the page in distraction-free mode.

### **4. Use mnemonics.**
Mnemonics are a **great** way to **Improve the retention of the material you're learning**.

### **5. Don’t memorize, use.**
Hover over a card to hide it. This way, you can **test your knowledge** while using the five buttons below. If you're using mobile then u can press on a card. Then in order for it to reappear, press on another character

# FAQ

1. **Who is this for?**
   - Beginner learners. Hiragana is usually the first step in learning to read and write in Japanese. I also believe its a great tool for people that want to refresh their memory because they haven't had a contact with Japanese in a long time.

2. **Are there any tips for maximizing the learning experience?**
   - Quiz yourself. Hover onto a card to hide it and try to recall how the five buttons below are read. Active reacall is signifficantly more effective learning method than passive exposure to the information.

3. **Does it support katakana or kanji as well?**
   - For now, no. Katakana might be added in the future. The button on the top right is reserved for that purpose.

4. **Why have I made it?**
   - The language learning community has made so many fantastic resources and shared them for free (for example, Anki). I wanted to create something that will help others too.



# **Project Structure**
This project consists of **one HTML file, one JavaScript file, and one CSS file**.

- The **HTML file** is short, containing only about 100 lines of code.
- The **JavaScript file** is used for switching between consonant groups, updating the card content, and animating transitions. It is also well-commented for clarity.
- The **CSS file** is the largest, but all class names are **self-explanatory**, making it easy to maintain.

# **Mobile-Friendly Design**
The page is **well-optimized for mobile devices**.

- Most of the CSS uses **relative values** instead of fixed pixels.
- The layout **adapts to smartphone screens**, automatically **hiding certain elements** to enhance usability and improve the design. The navigation remains intuitive, even on smaller screens, ensuring a nice experience across different devices.

# **Accessibility**
The project includes **accessibility-focused design choices**:

- The JavaScript file **reuses mnemonic explanations** for two purposes:
  1. Displaying them on the cards.
  2. Updating the **alt text** of images for screen readers.
- This ensures a **better user experience for visually impaired users**.

# **Animations & Learning Experience**
This project was my **opportunity to go beyond the CS50 curriculum** and explore **design, user experience, and animations**. Also, I believe  that Subtle animations make the learning process more interactive without being distracting.

- **CSS animations** are used to make buttons visually indicate when they are clickable. Still they are subtle enough not to distract the learner
- **JavaScript animations** help create **smooth transitions** when loading card content, making the experience more uniform and engaging.


## **How to use it?**
The entire app is a **web page**, so you can **access** it using any web browser. The simplicity of the page ensures that anyone, regardless of technical experience, can start using the tool immediately.


The project has been made with help of chatGPT.
