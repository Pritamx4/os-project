<div align="center">

# 🧠 Memory Management Simulator

### *Visualize Operating System Concepts in Real-Time* 

[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/Pritamx4/os-project?style=for-the-badge)](https://github.com/Pritamx4/os-project/stargazers)

**A modern, interactive web-based simulator for visualizing memory management techniques including Paging, Virtual Memory, and Segmentation.**

[🚀 Quick Start](#-quick-start) • [✨ Features](#-features) • [📖 Documentation](#-how-it-works) • [🤝 Contributing](#-contributing)

</div>

---

## 📑 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage](#-usage)
- [How It Works](#-how-it-works)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Design Philosophy](#-design-philosophy)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

### 📄 **Paging Simulation**
- 🔄 **FIFO Algorithm** - First In First Out page replacement
- 🎯 **LRU Algorithm** - Least Recently Used page replacement
- 📊 **Visual Frame State** - Real-time frame state tracking
- 📈 **Statistics Dashboard** - Page Faults, Hits, and Hit Rate metrics
- ⏱️ **Execution Timeline** - Step-by-step process visualization

### 🧩 **Segmentation**
- 📋 **Segment Table** - Interactive segment table visualization
- 🔀 **Address Translation** - Logical to physical address mapping with validation
- 🗺️ **Memory Map** - Visual representation of physical memory layout
- ⚠️ **Fault Detection** - Automatic segmentation fault detection and reporting

### 🎨 **Modern UI/UX**
- 🌑 **High-Contrast Theme** - Professional black theme for reduced eye strain
- ✍️ **Premium Typography** - Inter & JetBrains Mono fonts
- 🎭 **Smooth Animations** - Polished transitions and interactions
- 📱 **Responsive Design** - Works seamlessly across all devices
- 🎛️ **Enhanced Controls** - Intuitive input fields and dropdowns

---

## 🎬 Demo

<div align="center">

### 🖼️ Screenshots

*The simulator features a sleek, modern interface with:*

- ✅ White and gray gradient cards for content separation
- ✅ Enhanced input fields with subtle inset shadows
- ✅ Monospace fonts for technical data presentation
- ✅ Smooth hover and focus states for better UX

> **Note:** Screenshots will be added soon! Feel free to contribute by adding screenshots to the repository.

</div>

---

## 🚀 Quick Start

Get started in seconds! No dependencies, no build process required.

```bash
# Clone the repository
git clone https://github.com/Pritamx4/os-project.git

# Navigate to project directory
cd os-project

# Open in your browser
open index.html
```

**Or simply:** Download and open `index.html` in any modern web browser! 🎉

---

## 💾 Installation

### Prerequisites

- ✅ Any modern web browser (Chrome, Firefox, Safari, Edge)
- ✅ No Node.js, npm, or build tools required!

### Steps

1. **Download** or **Clone** the repository:
   ```bash
   git clone https://github.com/Pritamx4/os-project.git
   ```

2. **Navigate** to the project folder:
   ```bash
   cd os-project
   ```

3. **Open** `index.html` in your browser:
   - **Double-click** the file, or
   - **Right-click** → Open with → Your browser, or
   - Use a local server (optional):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

4. **Start exploring!** 🎊

---

## 💻 Usage

### 📄 Paging Mode

1. **Select Algorithm**: Choose between FIFO or LRU from the dropdown
2. **Configure Frames**: Set the number of frames (1-10)
3. **Enter Page Sequence**: Input comma-separated page numbers (e.g., `1,2,3,4,1,2,5`)
4. **Run Simulation**: Click "▶ Run Simulation" button
5. **Analyze Results**: 
   - View execution timeline showing each step
   - Check statistics (page faults, hits, hit rate)
   - Observe frame state changes in real-time

**Example:**
```
Algorithm: FIFO
Frames: 3
Page Sequence: 7,0,1,2,0,3,0,4,2,3,0,3,2
```

### 🧩 Segmentation Mode

1. **Switch Mode**: Click "Segmentation" tab
2. **View Segment Table**: Examine predefined segments (Code, Data, Stack)
3. **Enter Logical Address**:
   - Select segment number (0-2)
   - Enter offset value
4. **Observe Translation**: See physical address calculation or segmentation fault
5. **Check Memory Map**: Visualize memory allocation

**Example:**
```
Segment: 1 (Data)
Offset: 150
Result: Physical Address = 400 + 150 = 550
```

---

## 🔍 How It Works

### 📄 Page Replacement Algorithms

#### **FIFO (First In First Out)**
The simplest page replacement algorithm that maintains a queue of pages. When a page fault occurs, the oldest page (first in) is replaced.

```
How it works:
1. Maintain a queue of pages in memory
2. On page fault: Remove the front of the queue
3. Add new page to the back of the queue
```

**Advantages:** Simple to implement and understand  
**Disadvantages:** May replace frequently used pages (Belady's Anomaly)

#### **LRU (Least Recently Used)**
Replaces the page that hasn't been used for the longest time, based on the principle of temporal locality.

```
How it works:
1. Track the last access time for each page
2. On page fault: Find the page with oldest access time
3. Replace that page with the new page
```

**Advantages:** Better performance, considers page usage patterns  
**Disadvantages:** More complex implementation, higher overhead

### 🧩 Segmentation

Divides memory into logical segments (Code, Data, Stack) of variable sizes.

```
Address Translation Formula:
Physical Address = Base[Segment] + Offset

Validation:
If (Offset >= Limit[Segment]) → Segmentation Fault
```

**Benefits:**
- ✅ Logical organization of program components
- ✅ Protection between segments
- ✅ Sharing and dynamic sizing

---

## 🛠️ Tech Stack

<div align="center">

### Core Technologies

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

### Fonts & Design

![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)

</div>

**Technology Details:**

| Technology | Purpose | Features |
|------------|---------|----------|
| **HTML5** | Structure | Semantic markup, modern elements |
| **CSS3** | Styling | Grid, Flexbox, animations, gradients |
| **JavaScript** | Logic | ES6+, DOM manipulation, algorithms |
| **Inter Font** | UI Typography | Clean, professional interface text |
| **JetBrains Mono** | Code Typography | Monospace font for technical data |

> 💡 **Zero Dependencies:** No frameworks, no libraries, no build process. Pure vanilla web technologies!

---

## 📁 Project Structure

```
os-project/
│
├── 📄 index.html          # Main HTML file - Application structure
├── 🎨 style.css           # All styling - Theme, layout, animations
├── ⚙️ script.js           # Application logic - Algorithms & interactions
├── 📖 README.md           # Documentation (you are here!)
└── 🙈 .gitignore          # Git ignore rules
```

### File Descriptions

- **`index.html`** - Contains the entire UI structure with sections for paging and segmentation
- **`style.css`** - Comprehensive styling with CSS Grid, Flexbox, and custom animations
- **`script.js`** - Implements FIFO, LRU algorithms, segmentation logic, and DOM interactions

---

## 🎯 Design Philosophy

### Visual Design

```
┌─────────────────────────────────────┐
│  High Contrast Black Theme          │
│  • Reduced eye strain               │
│  • Professional appearance          │
│  • Enhanced focus                   │
└─────────────────────────────────────┘
```

- **🌑 High Contrast Black Theme**: Reduces eye strain during extended use
- **✍️ Premium Typography**: Inter for UI text, JetBrains Mono for code/data
- **🎭 Smooth Interactions**: Cubic-bezier animations for professional feel
- **♿ Accessible Design**: Clear labels, good contrast ratios, logical flow
- **📱 Mobile-First**: Responsive design that works on all screen sizes
- **⚡ Performance**: Optimized for speed with minimal DOM manipulation

### User Experience Principles

> **Simplicity First** - Intuitive interface requires no training  
> **Visual Feedback** - Immediate response to all user actions  
> **Educational Value** - Learn by doing with clear visualizations  

---

## 🗺️ Roadmap

### 🎯 Current Features
- [x] FIFO page replacement algorithm
- [x] LRU page replacement algorithm
- [x] Segmentation with address translation
- [x] Real-time statistics and visualizations
- [x] Responsive dark theme UI

### 🚀 Future Enhancements

#### Short-term Goals
- [ ] **Optimal Page Replacement** - Add optimal (Belady's) algorithm
- [ ] **Clock/Second Chance** - Implement circular buffer algorithm
- [ ] **Animation Speed Control** - Add slider for simulation speed
- [ ] **Export Results** - Download statistics as CSV/JSON
- [ ] **More Examples** - Preset page reference strings

#### Long-term Vision
- [ ] **Virtual Memory Full Simulation** - TLB, page tables, multi-level paging
- [ ] **Working Set Model** - Visualize working set algorithm
- [ ] **Memory Allocation** - First-fit, best-fit, worst-fit algorithms
- [ ] **Disk Scheduling** - FCFS, SSTF, SCAN, C-SCAN algorithms
- [ ] **Interactive Tutorial** - Guided tour for beginners
- [ ] **Comparison Mode** - Side-by-side algorithm comparison
- [ ] **Dark/Light Theme Toggle** - User preference support
- [ ] **Internationalization** - Multi-language support

### 💡 Ideas & Suggestions

Have an idea? [Open an issue](https://github.com/Pritamx4/os-project/issues) or submit a pull request!

---

## 🤝 Contributing

We love contributions! Whether it's bug fixes, new features, or documentation improvements, all contributions are welcome.

### How to Contribute

1. **🍴 Fork** the repository
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **📥 Clone** your fork
   ```bash
   git clone https://github.com/your-username/os-project.git
   cd os-project
   ```

3. **🌿 Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **✨ Make** your changes
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

5. **💾 Commit** your changes
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

6. **📤 Push** to your fork
   ```bash
   git push origin feature/amazing-feature
   ```

7. **🎉 Open** a Pull Request
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes clearly

### Contribution Guidelines

- ✅ Follow the existing code style and structure
- ✅ Test your changes in multiple browsers
- ✅ Update documentation if needed
- ✅ Keep commits focused and atomic
- ✅ Write clear commit messages
- ❌ Don't introduce breaking changes without discussion
- ❌ Don't add unnecessary dependencies

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help create a welcoming environment

---

## 💬 Support

### Need Help?

- 📖 **Documentation**: Check this README thoroughly
- 💡 **Issues**: [Report bugs or request features](https://github.com/Pritamx4/os-project/issues)
- 💬 **Discussions**: [Join the conversation](https://github.com/Pritamx4/os-project/discussions)
- ⭐ **Star**: Show your support by starring the repository!

### Found a Bug?

Please [open an issue](https://github.com/Pritamx4/os-project/issues/new) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information
- Screenshots if applicable

---

## 📄 License

This project is licensed under the **MIT License** - see below for details.

```
MIT License

Copyright (c) 2024 Memory Management Simulator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

**TL;DR:** You can use, modify, and distribute this project freely for educational or commercial purposes.

---

## 👨‍💻 Author

Created with ❤️ as an educational tool for understanding operating system memory management concepts.

### About This Project

This simulator was built to help students and professionals visualize and understand complex OS concepts:
- 🎓 **Educational Focus**: Learn by interacting
- 🔬 **Practical Examples**: See algorithms in action
- 🎨 **Visual Learning**: Better retention through visualization
- 🚀 **Open Source**: Free for everyone to use and improve

---

<div align="center">

## ⭐ Show Your Support

If this project helped you understand memory management better, please consider:

⭐ **Starring** the repository  
🍴 **Forking** for your own experiments  
🐛 **Reporting** bugs and issues  
💡 **Suggesting** new features  
🤝 **Contributing** code improvements  

---

### 📊 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/Pritamx4/os-project?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Pritamx4/os-project?style=social)
![GitHub Issues](https://img.shields.io/github/issues/Pritamx4/os-project)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Pritamx4/os-project)

---

**Made with 💻 and ☕ | Happy Learning! 🚀**

</div>
