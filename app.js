// DK Agrawal Academy JavaScript Application

// Application Data
const appData = {
  "instructor": {
    "name": "DK Agrawal",
    "title": "Selected Income Tax Department Officer & Government Job Expert",
    "youtube_subscribers": "64.6K+",
    "telegram_subscribers": "13.8K+",
    "experience_years": 8,
    "success_rate": "89%",
    "bio": "Former Income Tax Department Officer with 8+ years of teaching experience. Specialized in SSC, Banking, and Railway exams preparation."
  },
  "courses": [
    {
      "id": 1,
      "title": "SSC MTS 2025 Complete Course",
      "description": "Comprehensive preparation for SSC MTS exam with all subjects",
      "price": "Free",
      "duration": "6 months",
      "students": 12500,
      "rating": 4.8,
      "subjects": ["General Knowledge", "English", "Numerical Ability", "Reasoning"],
      "youtube_playlist": "https://youtube.com/playlist?list=PLExample1"
    },
    {
      "id": 2,
      "title": "SSC CGL Foundation Course",
      "description": "Foundation course for SSC CGL aspirants",
      "price": "₹999",
      "duration": "8 months",
      "students": 3200,
      "rating": 4.9,
      "subjects": ["Quantitative Aptitude", "English", "General Studies", "Reasoning"]
    },
    {
      "id": 3,
      "title": "Banking Awareness Crash Course",
      "description": "Quick revision for banking exams",
      "price": "₹499",
      "duration": "2 months",
      "students": 1800,
      "rating": 4.7,
      "subjects": ["Banking Awareness", "Current Affairs", "Financial Awareness"]
    }
  ],
  "quiz_questions": {
    "gk_questions": [
      {
        "id": 1,
        "question": "Who is the current President of India?",
        "question_hindi": "भारत के वर्तमान राष्ट्रपति कौन हैं?",
        "options": ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "APJ Abdul Kalam"],
        "correct_answer": 0,
        "explanation": "Droupadi Murmu is the current (15th) President of India, serving since July 25, 2022."
      },
      {
        "id": 2,
        "question": "What is the capital of Odisha?",
        "question_hindi": "ओडिशा की राजधानी क्या है?",
        "options": ["Cuttack", "Bhubaneswar", "Puri", "Rourkela"],
        "correct_answer": 1,
        "explanation": "Bhubaneswar is the capital city of Odisha state in India."
      },
      {
        "id": 3,
        "question": "Which river is known as the 'Ganga of the South'?",
        "question_hindi": "कौन सी नदी को 'दक्षिण की गंगा' कहा जाता है?",
        "options": ["Krishna", "Kaveri", "Godavari", "Tungabhadra"],
        "correct_answer": 2,
        "explanation": "Godavari is known as the 'Ganga of the South' and is the longest river in South India."
      },
      {
        "id": 4,
        "question": "Who wrote the Indian National Anthem?",
        "question_hindi": "भारतीय राष्ट्रगान किसने लिखा था?",
        "options": ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Subhas Chandra Bose"],
        "correct_answer": 1,
        "explanation": "Rabindranath Tagore wrote the Indian National Anthem 'Jana Gana Mana'."
      },
      {
        "id": 5,
        "question": "In which year did India gain independence?",
        "question_hindi": "भारत को स्वतंत्रता किस वर्ष मिली थी?",
        "options": ["1946", "1947", "1948", "1949"],
        "correct_answer": 1,
        "explanation": "India gained independence from British rule on August 15, 1947."
      }
    ],
    "english_questions": [
      {
        "id": 1,
        "question": "Choose the correct synonym for 'Abundant':",
        "options": ["Scarce", "Plentiful", "Limited", "Rare"],
        "correct_answer": 1,
        "explanation": "Abundant means existing in large quantities; plentiful."
      },
      {
        "id": 2,
        "question": "Identify the correct passive voice: 'She teaches English'",
        "options": ["English is taught by her", "English was taught by her", "English has been taught by her", "English is being taught by her"],
        "correct_answer": 0,
        "explanation": "The passive voice of 'She teaches English' is 'English is taught by her.'"
      },
      {
        "id": 3,
        "question": "Which of the following is a collective noun?",
        "options": ["Book", "Team", "Chair", "Water"],
        "correct_answer": 1,
        "explanation": "Team is a collective noun as it refers to a group of people working together."
      },
      {
        "id": 4,
        "question": "Choose the antonym of 'Ancient':",
        "options": ["Old", "Modern", "Historic", "Traditional"],
        "correct_answer": 1,
        "explanation": "Modern is the opposite of ancient, meaning contemporary or current."
      },
      {
        "id": 5,
        "question": "What is the past tense of 'Run'?",
        "options": ["Ran", "Runed", "Running", "Runs"],
        "correct_answer": 0,
        "explanation": "The past tense of 'run' is 'ran'."
      }
    ]
  },
  "subscription_plans": [
    {
      "name": "Free Access",
      "price": "₹0",
      "duration": "Forever",
      "features": ["YouTube videos", "Basic study materials", "Community access", "Monthly free quiz"],
      "popular": false
    },
    {
      "name": "Daily Quiz Package",
      "price": "₹299",
      "duration": "Per month",
      "features": ["Daily 50 questions", "Performance analytics", "All PDF materials", "Priority support", "Leaderboard access"],
      "popular": true
    },
    {
      "name": "Premium Package",
      "price": "₹599",
      "duration": "Per month", 
      "features": ["Everything in Daily Quiz", "Personal mentoring", "Advanced analytics", "Mock tests", "One-on-one doubt clearing", "Early access to content"],
      "popular": false
    }
  ],
  "student_performance": {
    "daily_scores": [85, 78, 92, 88, 95, 82, 90],
    "subject_wise": {
      "General Knowledge": 88,
      "English Grammar": 82,
      "Current Affairs": 91,
      "Reasoning": 85
    },
    "rank": 23,
    "total_students": 5420
  },
  "leaderboard": [
    {"rank": 1, "name": "Priya Sharma", "score": 98, "location": "Delhi"},
    {"rank": 2, "name": "Rahul Kumar", "score": 96, "location": "Bihar"},
    {"rank": 3, "name": "Anita Singh", "score": 94, "location": "UP"},
    {"rank": 4, "name": "Vikash Yadav", "score": 93, "location": "Jharkhand"},
    {"rank": 5, "name": "Sunita Devi", "score": 91, "location": "Maharashtra"}
  ],
  "testimonials": [
    {
      "name": "Ravi Kumar",
      "exam": "SSC MTS 2024",
      "result": "Selected",
      "message": "DK Sir's daily quiz helped me crack SSC MTS. His teaching method is excellent!",
      "location": "Patna, Bihar"
    },
    {
      "name": "Pooja Sharma",
      "exam": "SSC CGL 2024",
      "result": "Cleared Tier-1",
      "message": "Amazing content quality and daily practice questions. Highly recommended!",
      "location": "New Delhi"
    }
  ]
};

// Quiz State
let quizState = {
  currentQuestion: 0,
  answers: {},
  questions: [],
  isHindi: false,
  timer: null,
  timeLeft: 30,
  score: 0,
  totalQuestions: 0,
  isQuizActive: false
};

// DOM Elements
const elements = {
  // Navigation
  navToggle: document.getElementById('nav-toggle'),
  navMenu: document.getElementById('nav-menu'),
  navLinks: document.querySelectorAll('.nav__link'),
  
  // Buttons
  startQuizBtn: document.getElementById('start-quiz-btn'),
  takeQuizBtn: document.getElementById('take-quiz-btn'),
  freeVideosBtn: document.getElementById('free-videos-btn'),
  loginBtn: document.getElementById('login-btn'),
  registerBtn: document.getElementById('register-btn'),
  
  // Modals
  quizModal: document.getElementById('quiz-modal'),
  resultsModal: document.getElementById('results-modal'),
  loginModal: document.getElementById('login-modal'),
  registerModal: document.getElementById('register-modal'),
  
  // Modal close buttons
  closeQuiz: document.getElementById('close-quiz'),
  closeResults: document.getElementById('close-results'),
  closeLogin: document.getElementById('close-login'),
  closeRegister: document.getElementById('close-register'),
  
  // Quiz elements
  progressFill: document.getElementById('progress-fill'),
  progressText: document.getElementById('progress-text'),
  langToggle: document.getElementById('lang-toggle'),
  timer: document.getElementById('timer'),
  questionContainer: document.getElementById('question-container'),
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  
  // Content areas
  coursesGrid: document.getElementById('courses-grid'),
  leaderboard: document.getElementById('leaderboard'),
  testimonialsGrid: document.getElementById('testimonials-grid'),
  pricingGrid: document.getElementById('pricing-grid'),
  resultsContainer: document.getElementById('results-container'),
  
  // Form switching
  switchToRegister: document.getElementById('switch-to-register'),
  switchToLogin: document.getElementById('switch-to-login')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  renderCourses();
  renderLeaderboard();
  renderTestimonials();
  renderPricing();
  setupSmoothScrolling();
  setupNavigation();
}

// Event Listeners
function setupEventListeners() {
  // Navigation toggle
  if (elements.navToggle) {
    elements.navToggle.addEventListener('click', toggleMobileNav);
  }
  
  // Quiz buttons
  if (elements.startQuizBtn) {
    elements.startQuizBtn.addEventListener('click', startQuiz);
  }
  if (elements.takeQuizBtn) {
    elements.takeQuizBtn.addEventListener('click', startQuiz);
  }
  
  // Free videos button
  if (elements.freeVideosBtn) {
    elements.freeVideosBtn.addEventListener('click', handleFreeVideos);
  }
  
  // Modal buttons
  if (elements.loginBtn) {
    elements.loginBtn.addEventListener('click', () => showModal('login-modal'));
  }
  if (elements.registerBtn) {
    elements.registerBtn.addEventListener('click', () => showModal('register-modal'));
  }
  
  // Modal close buttons
  if (elements.closeQuiz) {
    elements.closeQuiz.addEventListener('click', () => hideModal('quiz-modal'));
  }
  if (elements.closeResults) {
    elements.closeResults.addEventListener('click', () => hideModal('results-modal'));
  }
  if (elements.closeLogin) {
    elements.closeLogin.addEventListener('click', () => hideModal('login-modal'));
  }
  if (elements.closeRegister) {
    elements.closeRegister.addEventListener('click', () => hideModal('register-modal'));
  }
  
  // Quiz controls
  if (elements.langToggle) {
    elements.langToggle.addEventListener('click', toggleLanguage);
  }
  if (elements.prevBtn) {
    elements.prevBtn.addEventListener('click', previousQuestion);
  }
  if (elements.nextBtn) {
    elements.nextBtn.addEventListener('click', nextQuestion);
  }
  
  // Form switching
  if (elements.switchToRegister) {
    elements.switchToRegister.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal('login-modal');
      showModal('register-modal');
    });
  }
  if (elements.switchToLogin) {
    elements.switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal('register-modal');
      showModal('login-modal');
    });
  }
  
  // Modal backdrop clicks
  document.querySelectorAll('.modal__backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        const modal = backdrop.closest('.modal');
        if (modal) {
          hideModal(modal.id);
        }
      }
    });
  });
  
  // Form submissions
  document.querySelector('.login-form')?.addEventListener('submit', handleLogin);
  document.querySelector('.register-form')?.addEventListener('submit', handleRegister);
}

// Navigation Functions
function toggleMobileNav() {
  if (elements.navMenu) {
    elements.navMenu.classList.toggle('active');
  }
}

function setupNavigation() {
  elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Update active nav link
        elements.navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Smooth scroll to section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu
        if (elements.navMenu) {
          elements.navMenu.classList.remove('active');
        }
      }
    });
  });
}

function setupSmoothScrolling() {
  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        elements.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Reset quiz if closing quiz modal
    if (modalId === 'quiz-modal') {
      resetQuiz();
    }
  }
}

// Fixed: Free Videos Handler
function handleFreeVideos() {
  const freeVideoMessage = `
    🎥 Access Free Content!
    
    📚 Free Resources Available:
    • YouTube Channel: 64.6K+ Subscribers
    • SSC MTS Complete Course (Free)
    • Daily Current Affairs Updates
    • Basic Study Materials
    
    Click OK to visit our YouTube channel!
  `;
  
  if (confirm(freeVideoMessage)) {
    window.open('https://youtube.com/@dkagrawal', '_blank');
  }
}

// Course Rendering
function renderCourses() {
  if (!elements.coursesGrid) return;
  
  const coursesHTML = appData.courses.map(course => `
    <div class="course-card">
      <div class="course-header">
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.description}</p>
        <div class="course-meta">
          <span class="course-price">${course.price}</span>
          <div class="course-rating">
            <span>⭐ ${course.rating}</span>
          </div>
        </div>
        <div class="course-stats">
          <span>${course.students.toLocaleString()} students</span>
          <span>${course.duration}</span>
        </div>
      </div>
      <div class="course-body">
        <div class="course-subjects">
          ${course.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
        </div>
        <button class="btn btn--primary btn--full-width" onclick="enrollInCourse(${course.id})">
          ${course.price === 'Free' ? 'Access Now' : 'Enroll Now'}
        </button>
      </div>
    </div>
  `).join('');
  
  elements.coursesGrid.innerHTML = coursesHTML;
}

// Fixed: Course Enrollment Handler
function enrollInCourse(courseId) {
  const course = appData.courses.find(c => c.id === courseId);
  if (course) {
    if (course.price === 'Free') {
      const freeAccessMessage = `
        🎉 Welcome to ${course.title}!
        
        📚 You now have access to:
        • ${course.subjects.join(', ')}
        • ${course.duration} of content
        • Join ${course.students.toLocaleString()}+ students
        
        Click OK to start learning on YouTube!
      `;
      
      if (confirm(freeAccessMessage)) {
        window.open('https://youtube.com/@dkagrawal', '_blank');
      }
    } else {
      // Show pricing info and then registration
      const enrollMessage = `
        📋 Course: ${course.title}
        💰 Price: ${course.price}
        ⏱️ Duration: ${course.duration}
        ⭐ Rating: ${course.rating}/5
        
        Ready to enroll? Click OK to register!
      `;
      
      if (confirm(enrollMessage)) {
        showModal('register-modal');
      }
    }
  }
}

// Leaderboard Rendering
function renderLeaderboard() {
  if (!elements.leaderboard) return;
  
  const leaderboardHTML = appData.leaderboard.map(entry => `
    <div class="leaderboard-item">
      <span class="leaderboard-rank">${entry.rank}</span>
      <span class="leaderboard-name">${entry.name}</span>
      <span class="leaderboard-score">${entry.score}%</span>
    </div>
  `).join('');
  
  elements.leaderboard.innerHTML = leaderboardHTML;
}

// Testimonials Rendering
function renderTestimonials() {
  if (!elements.testimonialsGrid) return;
  
  const testimonialsHTML = appData.testimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-content">
        <p>"${testimonial.message}"</p>
      </div>
      <div class="testimonial-author">
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.location}</p>
          <p>${testimonial.exam}</p>
        </div>
        <div class="testimonial-result">${testimonial.result}</div>
      </div>
    </div>
  `).join('');
  
  elements.testimonialsGrid.innerHTML = testimonialsHTML;
}

// Pricing Rendering
function renderPricing() {
  if (!elements.pricingGrid) return;
  
  const pricingHTML = appData.subscription_plans.map(plan => `
    <div class="pricing-card ${plan.popular ? 'popular' : ''}">
      <div class="pricing-header">
        <h3 class="pricing-name">${plan.name}</h3>
        <div class="pricing-price">${plan.price}</div>
        <div class="pricing-duration">${plan.duration}</div>
      </div>
      <ul class="pricing-features">
        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <button class="btn btn--primary btn--full-width" onclick="selectPlan('${plan.name}')">
        ${plan.price === '₹0' ? 'Get Started' : 'Subscribe Now'}
      </button>
    </div>
  `).join('');
  
  elements.pricingGrid.innerHTML = pricingHTML;
}

// Fixed: Plan Selection Handler
function selectPlan(planName) {
  const plan = appData.subscription_plans.find(p => p.name === planName);
  if (plan) {
    if (plan.price === '₹0') {
      const freeWelcomeMessage = `
        🎉 Welcome to DK Agrawal Academy!
        
        ✅ Your Free Access includes:
        • ${plan.features.join('\n• ')}
        
        🚀 You can start learning immediately!
        Ready to begin your preparation journey?
      `;
      
      alert(freeWelcomeMessage);
      
      // Offer to start with free quiz
      if (confirm('Would you like to take a free quiz now?')) {
        startQuiz();
      }
    } else {
      const subscriptionMessage = `
        📋 ${plan.name}
        💰 ${plan.price}/${plan.duration.toLowerCase()}
        
        ✨ Premium Features:
        • ${plan.features.join('\n• ')}
        
        Ready to upgrade? Click OK to register!
      `;
      
      if (confirm(subscriptionMessage)) {
        showModal('register-modal');
      }
    }
  }
}

// Quiz Functions
function startQuiz() {
  // Prepare quiz questions (combine GK and English)
  const allQuestions = [
    ...appData.quiz_questions.gk_questions.map(q => ({...q, section: 'GK'})),
    ...appData.quiz_questions.english_questions.map(q => ({...q, section: 'English'}))
  ];
  
  // Shuffle questions for variety
  quizState.questions = shuffleArray(allQuestions).slice(0, 10); // Take first 10 for demo
  quizState.currentQuestion = 0;
  quizState.answers = {};
  quizState.isHindi = false;
  quizState.score = 0;
  quizState.totalQuestions = quizState.questions.length;
  quizState.isQuizActive = true;
  
  showModal('quiz-modal');
  renderQuestion();
  updateProgress();
  startTimer();
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function renderQuestion() {
  if (!elements.questionContainer || !quizState.isQuizActive) return;
  
  const question = quizState.questions[quizState.currentQuestion];
  if (!question) return;
  
  const questionText = quizState.isHindi && question.question_hindi 
    ? question.question_hindi 
    : question.question;
  
  const sectionBadge = question.section === 'GK' ? 'General Knowledge' : 'English Grammar';
  
  const questionHTML = `
    <div class="question-section">
      <span class="section-badge" style="background: var(--color-academy-orange); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-bottom: 16px; display: inline-block;">
        ${sectionBadge}
      </span>
    </div>
    <div class="question-text">${questionText}</div>
    <div class="options-grid">
      ${question.options.map((option, index) => `
        <div class="option ${quizState.answers[quizState.currentQuestion] === index ? 'selected' : ''}" 
             onclick="selectAnswer(${index})">
          <div class="option-letter">${String.fromCharCode(65 + index)}</div>
          <div class="option-text">${option}</div>
        </div>
      `).join('')}
    </div>
  `;
  
  elements.questionContainer.innerHTML = questionHTML;
  
  // Update navigation buttons
  if (elements.prevBtn) {
    elements.prevBtn.disabled = quizState.currentQuestion === 0;
  }
  if (elements.nextBtn) {
    elements.nextBtn.textContent = 
      quizState.currentQuestion === quizState.totalQuestions - 1 ? 'Finish Quiz' : 'Next';
  }
}

function selectAnswer(answerIndex) {
  quizState.answers[quizState.currentQuestion] = answerIndex;
  renderQuestion(); // Re-render to show selection
}

function previousQuestion() {
  if (quizState.currentQuestion > 0) {
    quizState.currentQuestion--;
    renderQuestion();
    updateProgress();
    resetTimer();
  }
}

function nextQuestion() {
  if (quizState.currentQuestion < quizState.totalQuestions - 1) {
    quizState.currentQuestion++;
    renderQuestion();
    updateProgress();
    resetTimer();
  } else {
    finishQuiz();
  }
}

function updateProgress() {
  const progress = ((quizState.currentQuestion + 1) / quizState.totalQuestions) * 100;
  
  if (elements.progressFill) {
    elements.progressFill.style.width = `${progress}%`;
  }
  if (elements.progressText) {
    elements.progressText.textContent = 
      `Question ${quizState.currentQuestion + 1} of ${quizState.totalQuestions}`;
  }
}

function toggleLanguage() {
  quizState.isHindi = !quizState.isHindi;
  if (elements.langToggle) {
    elements.langToggle.textContent = quizState.isHindi ? 'English' : 'हिंदी';
  }
  
  // Only render question if Hindi is available for current question
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  if (currentQuestion && (currentQuestion.question_hindi || !quizState.isHindi)) {
    renderQuestion();
  }
}

function startTimer() {
  quizState.timeLeft = 30;
  updateTimer();
  
  quizState.timer = setInterval(() => {
    quizState.timeLeft--;
    updateTimer();
    
    if (quizState.timeLeft <= 0) {
      clearInterval(quizState.timer);
      // Auto-advance to next question
      if (quizState.currentQuestion < quizState.totalQuestions - 1) {
        nextQuestion();
      } else {
        finishQuiz();
      }
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(quizState.timer);
  startTimer();
}

function updateTimer() {
  if (elements.timer) {
    elements.timer.textContent = `${quizState.timeLeft}s`;
    elements.timer.style.backgroundColor = 
      quizState.timeLeft <= 10 ? '#ef4444' : 'var(--color-academy-orange)';
  }
}

function finishQuiz() {
  clearInterval(quizState.timer);
  quizState.isQuizActive = false;
  
  // Calculate score
  let correct = 0;
  quizState.questions.forEach((question, index) => {
    if (quizState.answers[index] === question.correct_answer) {
      correct++;
    }
  });
  
  quizState.score = Math.round((correct / quizState.totalQuestions) * 100);
  
  hideModal('quiz-modal');
  showResults(correct, quizState.totalQuestions - correct);
}

function showResults(correct, incorrect) {
  const resultsHTML = `
    <div class="results-summary">
      <div class="score-circle">${quizState.score}%</div>
      <h3>Quiz Completed!</h3>
      <p>Great job! You've completed today's quiz challenge.</p>
    </div>
    
    <div class="results-stats">
      <div class="result-stat">
        <h4>${correct}</h4>
        <p>Correct</p>
      </div>
      <div class="result-stat">
        <h4>${incorrect}</h4>
        <p>Incorrect</p>
      </div>
      <div class="result-stat">
        <h4>${quizState.totalQuestions}</h4>
        <p>Total</p>
      </div>
      <div class="result-stat">
        <h4>#${Math.floor(Math.random() * 50) + 1}</h4>
        <p>Rank</p>
      </div>
    </div>
    
    <div class="results-actions" style="text-align: center; margin-top: 24px;">
      <button class="btn btn--primary" onclick="startQuiz()">Take Another Quiz</button>
      <button class="btn btn--outline" onclick="hideModal('results-modal')" style="margin-left: 16px;">Close</button>
    </div>
    
    <div style="margin-top: 24px; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
      <h4 style="color: var(--color-academy-blue); margin-bottom: 12px;">🎉 Performance Insights</h4>
      <p style="margin: 0; color: var(--color-text-secondary);">
        ${quizState.score >= 80 ? 'Excellent work! You\'re well-prepared for government exams.' : 
          quizState.score >= 60 ? 'Good job! Keep practicing daily for better results.' :
          'Keep studying! Daily practice will improve your scores significantly.'}
      </p>
    </div>
    
    <div style="margin-top: 16px; padding: 16px; background: var(--color-bg-3); border-radius: 8px; text-align: center;">
      <h4 style="color: var(--color-success); margin-bottom: 12px;">🚀 Ready to Upgrade?</h4>
      <p style="margin: 8px 0; font-size: 14px;">Get access to daily quizzes, detailed analytics, and premium study materials!</p>
      <button class="btn btn--primary btn--sm" onclick="hideModal('results-modal'); showModal('register-modal');" style="margin-top: 8px;">
        Join Premium Now
      </button>
    </div>
  `;
  
  if (elements.resultsContainer) {
    elements.resultsContainer.innerHTML = resultsHTML;
  }
  
  showModal('results-modal');
}

function resetQuiz() {
  clearInterval(quizState.timer);
  quizState = {
    currentQuestion: 0,
    answers: {},
    questions: [],
    isHindi: false,
    timer: null,
    timeLeft: 30,
    score: 0,
    totalQuestions: 0,
    isQuizActive: false
  };
}

// Form Handlers
function handleLogin(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email') || e.target.querySelector('input[type="text"]').value;
  
  if (email) {
    alert('🎉 Login successful! Welcome back to DK Agrawal Academy. You can now access all your enrolled courses and track your progress.');
    hideModal('login-modal');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = e.target.querySelector('input[placeholder*="name"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  
  if (name && email) {
    const welcomeMessage = `
      🎉 Welcome to DK Agrawal Academy, ${name}!
      
      ✅ Your account has been created successfully!
      
      🎯 You can now:
      • Take daily quizzes
      • Access study materials  
      • Track your progress
      • Join our community of 17,500+ students
      
      Ready to start your preparation journey?
    `;
    
    alert(welcomeMessage);
    hideModal('register-modal');
    
    // Offer to take a quiz
    if (confirm('Would you like to take your first quiz now?')) {
      startQuiz();
    }
  }
}

// Utility Functions
function formatNumber(num) {
  return num.toLocaleString();
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Initialize smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add some animation on scroll (optional)
window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.course-card, .testimonial-card, .pricing-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// Initialize card animations
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.course-card, .testimonial-card, .pricing-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
  });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  // Scroll handling logic here
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);
