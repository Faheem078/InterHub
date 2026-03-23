/**
 * InternHub Task Management Utility
 * Handles persistent storage of tasks using localStorage.
 */

const STORAGE_KEY = 'internhub_tasks';

const defaultTasks = [
    { id: 1, intern: 'Ahmed Khan', initials: 'AK', color: '#DC2626', email: 'ahmed@intern.com', title: 'UI/UX Research Report', cat: 'Design Module', date: '2026-03-20', status: 'approved', desc: 'Comprehensive research on current UI/UX trends, user testing methodologies, and design system best practices. Included 15 case studies.', feedback: 'Excellent work! Your case studies were very detailed and insightful. Keep up this quality!', file: 'uiux-report.pdf' },
    { id: 2, intern: 'Ahmed Khan', initials: 'AK', color: '#DC2626', email: 'ahmed@intern.com', title: 'Backend API Integration', cat: 'Development Module', date: '2026-03-19', status: 'pending', desc: 'Integrated RESTful API endpoints with JWT authentication, rate limiting, and comprehensive error handling for the internship portal.', feedback: null, file: 'backend-api.zip' },
    { id: 3, intern: 'Ahmed Khan', initials: 'AK', color: '#DC2626', email: 'ahmed@intern.com', title: 'Database Schema Design', cat: 'Development Module', date: '2026-03-18', status: 'rejected', desc: 'Designed normalized MySQL database schema with proper indexing, foreign key relationships, and stored procedures.', feedback: 'Good start, but please add proper foreign key constraints and fix the normalization issues in the users table.', file: 'db-schema.sql' },
    { id: 4, intern: 'Fatima Khan', initials: 'FK', color: '#059669', email: 'fatima@intern.com', title: 'Security Audit Report', cat: 'Security Module', date: '2026-03-15', status: 'approved', desc: 'Performed a complete security audit covering SQL injection, XSS, CSRF vulnerabilities and authentication weaknesses.', feedback: 'Outstanding security analysis. This will be used as a reference for future interns.', file: 'security-audit.pdf' },
    { id: 5, intern: 'Ahmed Khan', initials: 'AK', color: '#DC2626', email: 'ahmed@intern.com', title: 'Mobile App Wireframes', cat: 'Design Module', date: '2026-03-12', status: 'pending', desc: 'Created complete wireframes for the mobile version of InternHub including all main user flows and edge cases.', feedback: null, file: 'wireframes.fig' },
    { id: 6, intern: 'Ahmed Khan', initials: 'AK', color: '#DC2626', email: 'ahmed@intern.com', title: 'Market Research Analysis', cat: 'Research Module', date: '2026-03-08', status: 'approved', desc: 'Analyzed the internship management software market, competitive landscape, pricing strategies, and growth opportunities.', feedback: 'Well-researched and nicely structured. Good data sources cited.', file: 'market-research.pdf' }
];

// Initialize tasks in localStorage
function initTasks() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTasks));
    }
}

// Get all tasks
function getTasks() {
    initTasks();
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

// Add a new task
function addTask(task) {
    const tasks = getTasks();
    const newTask = {
        id: Date.now(),
        intern: 'Ahmed Khan', // Default for now
        initials: 'AK',
        color: '#DC2626',
        email: 'ahmed@intern.com',
        status: 'pending',
        feedback: null,
        ...task
    };
    tasks.unshift(newTask);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return newTask;
}

// Update a task
function updateTask(id, updates) {
    let tasks = getTasks();
    tasks = tasks.map(t => t.id === parseInt(id) ? { ...t, ...updates } : t);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Delete a task
function deleteTask(id) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t.id !== parseInt(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Export functions to window object for global access
window.TaskPortal = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
};

initTasks();
