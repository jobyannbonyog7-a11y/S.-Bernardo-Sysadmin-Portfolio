/* ============================================
   SYSTEM ADMINISTRATOR PORTFOLIO - SCRIPT
   Interactive Effects, Theme, Playground
   ============================================ */

// ========== TRANSLATIONS ==========
const translations = {
    en: {
        logo: "SysAdmin Pro",
        nav_home: "Home",
        nav_roles: "Roles",
        nav_skills: "Skills",
        nav_tools: "Tools",
        nav_playground: "Linux Terminal",
        nav_about: "About",
        hero_title: "System Administrator",
        hero_subtitle: "The Backbone of Modern IT Infrastructure",
        hero_desc: "Welcome to the ultimate guide to the System Administrator profession. Explore the critical roles, essential skills, and powerful tools that keep the digital world running smoothly 24/7.",
        btn_explore: "Explore Roles",
        btn_meet: "Meet the Developer",
        scroll: "Scroll Down",
        roles_title: "Roles & Responsibilities",
        roles_desc: "System Administrators are the guardians of IT infrastructure. Here are their core responsibilities:",
        role1_title: "Installing & Maintaining OS",
        role1_desc: "Deploy, configure, and maintain operating systems (Windows Server, Linux distributions) ensuring optimal performance, security patches, and system updates across the infrastructure.",
        role2_title: "Managing User Accounts",
        role2_desc: "Create, modify, and delete user accounts. Manage permissions, access controls, group policies, and enforce security best practices for all system users.",
        role3_title: "Monitoring System Performance",
        role3_desc: "Continuously monitor CPU, memory, disk, and network usage. Identify bottlenecks, optimize resources, and ensure high availability of critical services.",
        role4_title: "Backups & Recovery",
        role4_desc: "Design and implement robust backup strategies. Perform regular backups, test recovery procedures, and ensure business continuity in case of data loss or disasters.",
        role5_title: "Troubleshooting Issues",
        role5_desc: "Diagnose and resolve hardware, software, and network problems. Provide rapid response to incidents, minimize downtime, and document solutions for future reference.",
        role6_title: "Security Management",
        role6_desc: "Implement firewalls, antivirus, intrusion detection systems. Apply security patches, manage certificates, and protect systems against evolving cyber threats.",
        skills_title: "Technical & Professional Skills",
        skills_desc: "A successful System Administrator masters both hard technical skills and soft professional abilities.",
        tech_skills: "Technical Skills",
        pro_skills: "Professional Skills",
        skill1: "Operating System Administration",
        skill2: "Networking (TCP/IP, DNS, DHCP)",
        skill3: "Scripting (PowerShell, Bash, Python)",
        skill4: "Virtualization & Cloud",
        skill5: "Security & Hardening",
        skill6: "Problem-Solving & Critical Thinking",
        skill7: "Communication & Documentation",
        skill8: "Time Management & Prioritization",
        skill9: "Team Collaboration",
        skill10: "Continuous Learning",
        tools_title: "System Administration Tools",
        tools_desc: "Master these essential tools and technologies used daily by professional System Administrators.",
        tool1_desc: "Enterprise-grade server OS for managing networks, Active Directory, file services, and enterprise applications.",
        tool2_desc: "Powerful open-source Linux distribution ideal for servers, cloud, containers, and high-performance computing.",
        tool3_desc: "Task automation and configuration management framework from Microsoft. Essential for Windows administration.",
        tool4_desc: "Cryptographic network protocol for secure remote login and command execution on remote systems.",
        tool5_desc: "Free and open-source virtualization software for creating and managing virtual machines on your desktop.",
        tool6_desc: "Platform for developing, shipping, and running applications in containers for consistency across environments.",
        official_site: "Official Site",
        playground_title: "Linux Command Prompt",
        playground_desc: "Explore a simulated Linux terminal. Type help to see available commands.",
        about_title: "About the Developer",
        dev_name: "Shane Ashley Nicole A. Bernardo",
        dev_course: "BS Information Technology | System Administration Track",
        dev_intro: "Passionate aspiring System Administrator with a strong foundation in computer systems, networking, and cybersecurity. I love solving complex technical problems and keeping systems running at peak performance.",
        dev_interest: "My interest in the IT industry stems from a deep curiosity about how technology powers the modern world. I am particularly drawn to infrastructure management, automation, and building resilient systems that organizations can rely on.",
        footer_text: "© 2025 System Administrator Career Portfolio. Built with passion for IT.",
        footer_note: "Created by Shane Ashley Nicole A. Bernardo."
    },
    tl: {
        logo: "SysAdmin Pro",
        nav_home: "Home",
        nav_roles: "Mga Tungkulin",
        nav_skills: "Mga Kasanayan",
        nav_tools: "Mga Kagamitan",
        nav_playground: "Linux Terminal",
        nav_about: "Tungkol",
        hero_title: "System Administrator",
        hero_subtitle: "Ang Gulugod ng Modernong IT Infrastructure",
        hero_desc: "Maligayang pagdating sa ultimate guide sa propesyon ng System Administrator. Tuklasin ang mahahalagang tungkulin, kasanayan, at makapangyarihang tools na nagpapanatili sa digital na mundo na tumatakbo nang maayos 24/7.",
        btn_explore: "Tuklasin ang Mga Tungkulin",
        btn_meet: "Kilalanin ang Developer",
        scroll: "Mag-scroll Pababa",
        roles_title: "Mga Tungkulin at Responsibilidad",
        roles_desc: "Ang mga System Administrator ay ang mga tagapangalaga ng IT infrastructure. Narito ang kanilang mga pangunahing responsibilidad:",
        role1_title: "Pag-install at Pagpapanatili ng OS",
        role1_desc: "I-deploy, i-configure, at panatilihin ang operating systems (Windows Server, Linux) upang matiyak ang optimal na performance, security patches, at system updates sa buong infrastructure.",
        role2_title: "Pamamahala ng User Accounts",
        role2_desc: "Lumikha, baguhin, at tanggalin ang user accounts. Pamahalaan ang permissions, access controls, group policies, at ipatupad ang security best practices para sa lahat ng users.",
        role3_title: "Pagsubaybay sa System Performance",
        role3_desc: "Patuloy na subaybayan ang CPU, memory, disk, at network usage. Tukuyin ang bottlenecks, i-optimize ang resources, at tiyakin ang high availability ng mga kritikal na serbisyo.",
        role4_title: "Mga Backup at Recovery",
        role4_desc: "Magdisenyo at magpatupad ng matatag na backup strategies. Magsagawa ng regular na backups, subukan ang recovery procedures, at tiyakin ang business continuity sakaling may data loss o disaster.",
        role5_title: "Pag-aayos ng Problema",
        role5_desc: "Diagnose at ayusin ang hardware, software, at network problems. Magbigay ng mabilis na tugon sa mga insidente, bawasan ang downtime, at idokumento ang mga solusyon.",
        role6_title: "Pamamahala ng Seguridad",
        role6_desc: "Magpatupad ng firewalls, antivirus, intrusion detection systems. Mag-apply ng security patches, pamahalaan ang certificates, at protektahan ang systems laban sa cyber threats.",
        skills_title: "Teknikal at Propesyonal na Kasanayan",
        skills_desc: "Ang matagumpay na System Administrator ay bihasa sa parehong hard technical skills at soft professional abilities.",
        tech_skills: "Teknikal na Kasanayan",
        pro_skills: "Propesyonal na Kasanayan",
        skill1: "Operating System Administration",
        skill2: "Networking (TCP/IP, DNS, DHCP)",
        skill3: "Scripting (PowerShell, Bash, Python)",
        skill4: "Virtualization & Cloud",
        skill5: "Security & Hardening",
        skill6: "Problem-Solving & Critical Thinking",
        skill7: "Komunikasyon at Dokumentasyon",
        skill8: "Time Management & Prioritization",
        skill9: "Team Collaboration",
        skill10: "Patuloy na Pag-aaral",
        tools_title: "Mga Kagamitan sa System Administration",
        tools_desc: "Masterin ang mga essential tools at technologies na ginagamit araw-araw ng mga propesyonal na System Administrator.",
        tool1_desc: "Enterprise-grade server OS para sa pamamahala ng networks, Active Directory, file services, at enterprise applications.",
        tool2_desc: "Makapangyarihang open-source Linux distribution na ideal para sa servers, cloud, containers, at high-performance computing.",
        tool3_desc: "Task automation at configuration management framework mula sa Microsoft. Mahalaga para sa Windows administration.",
        tool4_desc: "Cryptographic network protocol para sa secure remote login at command execution sa remote systems.",
        tool5_desc: "Libre at open-source virtualization software para sa paglikha at pamamahala ng virtual machines sa iyong desktop.",
        tool6_desc: "Platform para sa developing, shipping, at running ng applications sa containers para sa consistency sa lahat ng environments.",
        official_site: "Opisyal na Site",
        playground_title: "Linux Command Prompt",
        playground_desc: "Subukan ang Linux terminal simulation. I-type ang help para makita ang mga command.",
        about_title: "Tungkol sa Developer",
        dev_name: "Shane Ashley Nicole A. Bernardo",
        dev_course: "BS Information Technology | System Administration Track",
        dev_intro: "Masigasig na aspiring System Administrator na may matatag na pundasyon sa computer systems, networking, at cybersecurity. Mahilig akong maglutas ng kumplikadong teknikal na problema at panatilihing tumatakbo ang systems sa peak performance.",
        dev_interest: "Ang interes ko sa IT industry ay nagmumula sa malalim na pag-usisa kung paano pinapagana ng teknolohiya ang modernong mundo. Partikular akong naaakit sa infrastructure management, automation, at pagbuo ng resilient systems na maaasahan ng mga organisasyon.",
        footer_text: "© 2025 System Administrator Career Portfolio. Ginawa nang may passion para sa IT.",
        footer_note: "Ginawa ni Shane Ashley Nicole A. Bernardo."
    }
};

// ========== STATE ==========
let isDark = true;

// ========== DOM READY ==========
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavigation();
    initThemeToggle();
    initToolCards();
    initLinuxTerminal();
    initProfileEffects();
    initScrollSpy();
    initSkillBars();
    
    // Surprise effect on load for name
    setTimeout(() => {
        triggerNameSurprise();
    }, 800);
});

// ========== PARTICLE BACKGROUND ==========
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = Math.random() > 0.6 
                ? `rgba(168, 85, 247, ${this.opacity})` 
                : Math.random() > 0.5 
                    ? `rgba(251, 191, 36, ${this.opacity})`
                    : `rgba(59, 130, 246, ${this.opacity})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Glow
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
        }
    }
    
    // Create particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 0;
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        // Connect nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
}

// ========== NAVIGATION ==========
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(168, 85, 247, 0.15)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// ========== THEME TOGGLE ==========
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    themeBtn?.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('dark-mode', isDark);
        document.body.classList.toggle('light-mode', !isDark);
        
        themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        const nextTheme = isDark ? 'light' : 'dark';
        themeBtn.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
        themeBtn.title = `Switch to ${nextTheme} mode`;
        
        // Smooth transition flash
        document.body.style.transition = 'background 0.4s ease, color 0.4s ease';
    });
}

// ========== TOOL CARDS INTERACTIVE ==========
function initToolCards() {
    const toolCards = document.querySelectorAll('.tool-card');
    const modal = document.getElementById('tool-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = document.querySelector('.modal-close');
    
    const toolData = {
        windows: {
            title: 'Windows Server',
            desc: 'Microsoft Windows Server is a powerful enterprise operating system designed for servers. It provides Active Directory, Group Policy, Hyper-V, IIS, and robust security features essential for enterprise environments.',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'
        },
        ubuntu: {
            title: 'Ubuntu Server',
            desc: 'Ubuntu Server is a free, open-source Linux distribution optimized for servers. Known for its stability, security, and extensive package ecosystem. Widely used in cloud deployments and enterprise infrastructure.',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg'
        },
        powershell: {
            title: 'PowerShell',
            desc: 'PowerShell is a cross-platform task automation solution consisting of a command-line shell, scripting language, and configuration management framework. Essential for Windows system administration and automation.',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg'
        },
        ssh: {
            title: 'SSH (Secure Shell)',
            desc: 'SSH is a cryptographic network protocol that enables secure remote access to systems. It provides encrypted communication, secure file transfers (SFTP/SCP), and is fundamental to remote Linux/Unix administration.',
            img: null
        },
        virtualbox: {
            title: 'VirtualBox',
            desc: 'Oracle VM VirtualBox is a free and open-source hosted hypervisor for x86 virtualization. Perfect for testing environments, running multiple OSes, and learning system administration safely.',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/virtualbox/virtualbox-original.svg'
        },
        docker: {
            title: 'Docker',
            desc: 'Docker is a platform for developing, shipping, and running applications in containers. Containers package code and dependencies together, ensuring consistency from development to production.',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        }
    };
    
    toolCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking the official link
            if (e.target.closest('.tool-link')) return;
            
            const tool = card.getAttribute('data-tool');
            const data = toolData[tool];
            
            if (data) {
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.desc;
                
                if (data.img) {
                    modalImg.src = data.img;
                    modalImg.style.display = 'block';
                } else {
                    modalImg.style.display = 'none';
                }
                
                modal.classList.add('active');
                
                // Click particle burst effect
                createClickBurst(e.clientX, e.clientY);
            }
        });
    });
    
    modalClose?.addEventListener('click', () => modal.classList.remove('active'));
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal?.classList.remove('active');
    });
}

// ========== CLICK BURST EFFECT ==========
function createClickBurst(x, y) {
    const colors = ['#a855f7', '#fbbf24', '#3b82f6', '#f97316', '#ec4899'];
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 8px;
            height: 8px;
            background: ${colors[i % colors.length]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 10px ${colors[i % colors.length]};
        `;
        document.body.appendChild(particle);
        
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 80 + Math.random() * 60;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 600 + Math.random() * 300,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
}

// ========== LINUX TERMINAL ==========
function initLinuxTerminal() {
    const form = document.getElementById('terminal-form');
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    const pathLabel = document.getElementById('terminal-path');
    const clearButton = document.getElementById('terminal-clear');
    const home = '/home/shane';
    let currentDirectory = home;
    const commandHistory = [];
    let historyIndex = 0;
    const files = {
        '/home/shane': {
            'about.txt': 'Shane Ashley Nicole A. Bernardo\nSystem Administration student | Linux enthusiast',
            'skills.txt': 'Linux, Networking, Cloud, Automation, Security',
            'documents': null
        },
        '/home/shane/documents': {
            'welcome.txt': 'Welcome to the Linux terminal simulation!'
        }
    };

    const writeLine = (text = '', className = '') => {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`.trim();
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    };

    const getDisplayPath = () => currentDirectory === home
        ? '~'
        : `~${currentDirectory.slice(home.length)}`;

    const resolvePath = (path) => {
        if (!path || path === '~') return home;
        const basePath = path.startsWith('/')
            ? path
            : `${currentDirectory}/${path}`;
        const segments = [];
        for (const segment of basePath.split('/')) {
            if (!segment || segment === '.') continue;
            if (segment === '..') segments.pop();
            else segments.push(segment);
        }
        return `/${segments.join('/')}`;
    };

    const parseArguments = (value) => {
        const args = [];
        const matcher = /"([^"]*)"|'([^']*)'|(\S+)/g;
        let match;
        while ((match = matcher.exec(value)) !== null) {
            args.push(match[1] ?? match[2] ?? match[3]);
        }
        return args;
    };

    const executeCommand = (inputLine) => {
        const args = parseArguments(inputLine);
        const [command, ...parameters] = args;
        if (!command) return;

        switch (command) {
            case 'help':
                return [
                    'Available commands:',
                    '  help                 Show this help message',
                    '  ls [path]            List directory contents',
                    '  cd [path]            Change directory',
                    '  pwd                  Print working directory',
                    '  cat <file>           Display a text file',
                    '  echo <text>          Print text',
                    '  whoami               Show the current user',
                    '  hostname             Show the system hostname',
                    '  uname [-a]            Show system information',
                    '  date                 Show the current date and time',
                    '  clear                Clear the terminal',
                    '  history              Show entered commands',
                    '',
                    'This is a browser-based simulation; commands do not run on your computer.'
                ].join('\n');
            case 'pwd':
                return currentDirectory;
            case 'whoami':
                return 'shane';
            case 'hostname':
                return 'sysadmin';
            case 'date':
                return new Date().toString();
            case 'uname':
                return parameters.includes('-a')
                    ? 'Linux sysadmin 6.8.0-generic x86_64 GNU/Linux'
                    : 'Linux';
            case 'echo':
                return inputLine.slice(command.length).trim().replace(/^["']|["']$/g, '');
            case 'ls': {
                const target = resolvePath(parameters.find(arg => !arg.startsWith('-')) || currentDirectory);
                const entries = files[target];
                if (!entries) return `ls: cannot access '${target}': No such file or directory`;
                return Object.entries(entries)
                    .map(([name, contents]) => contents === null ? `${name}/` : name)
                    .join('  ') || '';
            }
            case 'cd': {
                const destination = resolvePath(parameters[0] || home);
                if (files[destination]) {
                    currentDirectory = destination;
                    pathLabel.textContent = getDisplayPath();
                    return '';
                }
                return `bash: cd: ${parameters[0] || ''}: No such file or directory`;
            }
            case 'cat': {
                const filePath = resolvePath(parameters[0] || '');
                const separator = filePath.lastIndexOf('/');
                const directory = filePath.slice(0, separator) || '/';
                const fileName = filePath.slice(separator + 1);
                const contents = files[directory]?.[fileName];
                return typeof contents === 'string'
                    ? contents
                    : `cat: ${parameters[0] || ''}: No such file or directory`;
            }
            case 'history':
                return commandHistory.map((entry, index) => `${index + 1}  ${entry}`).join('\n');
            case 'clear':
                output.replaceChildren();
                return '';
            case 'sudo':
                return 'This browser terminal is a safe simulation; elevated commands are unavailable.';
            default:
                return `bash: ${command}: command not found. Type 'help' to see available commands.`;
        }
    };

    writeLine('Welcome to the Linux terminal simulation.');
    writeLine("Type 'help' to see available commands.", 'terminal-muted');

    form?.addEventListener('submit', (event) => {
        event.preventDefault();
        const command = input.value.trim();
        writeLine(`shane@sysadmin:${getDisplayPath()}$ ${command}`, 'terminal-command');
        if (command) {
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            const result = executeCommand(command);
            if (result) result.split('\n').forEach(line => writeLine(line));
        }
        input.value = '';
        input.focus();
    });

    input?.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            historyIndex = Math.max(0, historyIndex - 1);
            input.value = commandHistory[historyIndex] || '';
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            historyIndex = Math.min(commandHistory.length, historyIndex + 1);
            input.value = commandHistory[historyIndex] || '';
        }
    });

    clearButton?.addEventListener('click', () => {
        output.replaceChildren();
        input.focus();
    });

    document.querySelector('.terminal-window')?.addEventListener('click', (event) => {
        if (!event.target.closest('button')) input?.focus();
    });
}

// ========== PROFILE SURPRISE EFFECTS ==========
function initProfileEffects() {
    const profileFrame = document.getElementById('profile-frame');
    const profilePic = document.getElementById('profile-pic');
    const devName = document.getElementById('dev-name');
    const fairyDust = document.getElementById('fairy-dust');
    
    // Click on profile = fairy dust burst
    profileFrame?.addEventListener('click', (e) => {
        createFairyDust(fairyDust);
        createClickBurst(e.clientX, e.clientY);
        
        profilePic.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            profilePic.style.transform = '';
        }, 400);
    });
    
    // Click on name = surprise glitch + particles
    devName?.addEventListener('click', (e) => {
        triggerNameSurprise();
        createClickBurst(e.clientX, e.clientY);
    });
}

function createFairyDust(container) {
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const dust = document.createElement('span');
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random() * 80;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        
        dust.style.setProperty('--tx', `${tx}px`);
        dust.style.setProperty('--ty', `${ty}px`);
        dust.style.left = '50%';
        dust.style.top = '50%';
        dust.style.background = Math.random() > 0.5 ? '#fbbf24' : '#a855f7';
        dust.style.boxShadow = `0 0 6px ${dust.style.background}`;
        
        container.appendChild(dust);
        
        setTimeout(() => dust.remove(), 2000);
    }
}

function triggerNameSurprise() {
    const nameEl = document.querySelector('.developer-name');
    if (!nameEl) return;
    
    nameEl.style.animation = 'none';
    nameEl.offsetHeight; // trigger reflow
    nameEl.style.animation = 'glitch-skew 0.4s ease';
    
    // Temporary text glow boost
    nameEl.style.filter = 'drop-shadow(0 0 25px rgba(251, 191, 36, 0.9))';
    setTimeout(() => {
        nameEl.style.filter = '';
        nameEl.style.animation = '';
    }, 600);
}

// ========== SCROLL SPY ==========
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========== SKILL BARS ANIMATION ==========
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'skill-fill 1.5s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillBars.forEach(bar => observer.observe(bar));
}
