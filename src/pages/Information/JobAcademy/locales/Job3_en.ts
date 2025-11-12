// UI text in English for Job3
export const job3Text = {
  title: "JOB ACADEMY",
  lectureSubtitle: "Resume Writing",
  pageTitle: "Job Academy - Lecture 3",
  lecture3Goal: 'Learn how to write a Cover Letter and Resume.',
  coverLetterGuide: 'How to Write a Cover Letter',
  coverLetterWhat: 'What is a Cover Letter?',
  coverLetterFAQTitle: 'Frequently Asked Questions',
  coverLetterConsider: 'Things to Consider When Writing a Cover Letter',
  coverLetterStructure: 'Structure of a Cover Letter',
  coverLetterMust: 'What Must Be Included in a Cover Letter',
  coverLetterDo: 'Things To Do When Writing a Cover Letter',
  coverLetterDont: 'Things Not To Do When Writing a Cover Letter',
  resumeGuide: 'How to Write a Resume',
  resumeWhat: 'What is a Resume?',
  resumeConsider: 'Things to Consider When Writing a Resume',
  resumeDont: 'Things Not To Do When Writing a Resume',
  resumeSection: 'What Should Be Included in a Resume',
  mustDo: 'Essential Steps for Writing a Cover Letter and Resume',
  sampleResume1: 'Sample Resume 1',
  sampleResume2: 'Sample Resume 2',
  coverLetterFAQ1: 'Q. How many pages should a Cover Letter be?',
  coverLetterFAQ2: 'Q. Is a Cover Letter always required?',
  resumeDesc: 'A resume is a marketing tool that allows employers to quickly see your relevant skills, education, and work experience at a glance.',
};
import type { SubSection, NumberedList, IconList, QuestionList, SectionWithSubSections } from '../InfoSubComponent';

export const coverLetterDefinition: SubSection = {
  title: 'Definition',
  items: [
    'A self-introduction / marketing tool.',
    'Clearly explain why and how the employer will benefit from hiring you.',
    'Focus on what the employer wants, not what you want.'
  ],
  borderColor: 'border-blue-500'
};

export const coverLetterThinking: SubSection = {
  title: 'Reflection',
  items: [
    'Why do we write a Cover Letter?',
    'What and how should we write in a Cover Letter?'
  ],
  borderColor: 'border-blue-500'
};

export const resumeThinking: SubSection = {
  title: 'Reflection',
  items: [
    'Are you familiar with resumes?',
    'What makes a good resume?',
    'How should you write a resume?'
  ],
  borderColor: 'border-blue-500'
};

export const brandingGuidelines: SubSection = {
  title: 'Branding:',
  items: [
    'Use a header.',
    'Use the same header for your Resume, Cover Letter, and Reference Letter.',
    'Include your name, address, phone number, email, LinkedIn, homepage, and credentials in the header.',
    'Font size: usually 11 or 12; name can be 18.',
    'Margins: usually 1 inch.'
  ],
  borderColor: 'border-blue-500'
};

export const profileSummary: SubSection = {
  title: 'Profile/Summary',
  items: [
    'List your qualifications - work experience / relevant education – degrees, certificates / relevant skills (hard and soft skills).',
    'Usually written as bullet points (Summary) or sentences (Profile).',
    'Bullet points: 5-7 items',
    'Sentences: 4-5 lines',
    'Hard skills: computer skills, typing, driving, etc.',
    'Soft skills: communication, people skills, team player, etc.'
  ],
  borderColor: 'border-blue-500'
};

export const workExperience: SubSection = {
  title: 'Work Experience',
  items: [
    'Job title',
    'Company name',
    'Company location',
    'Period of employment',
    'Job description or achievements'
  ],
  borderColor: 'border-emerald-500'
};

export const resumeComponents: SubSection = {
  title: 'Overall Components',
  items: [
    'Header – name and contact info, credentials, LinkedIn',
    'Headline / tagline – one-line self-promotion',
    'Profile / Summary – the most important section showing your qualifications',
    'Experience (work/volunteer)',
    'Education',
    'Professional development',
    'Interests (optional)'
  ],
  borderColor: 'border-indigo-500'
};

export const coverLetterStructure: NumberedList = {
  items: [
    'Use the same header as your resume.',
    'Include the date.',
    'Include employer information – employer name (or Human Resources), company name, address.',
    'Job title or reference number.',
    'Greeting.',
    'First, second, and third paragraphs.',
    'Signature.'
  ],
  borderColor: 'border-amber-500',
  textColor: 'text-blue-400'
};

export const essentialTasks: NumberedList = {
  items: [
    'Read the job posting carefully.',
    'Job postings include: company introduction, qualifications, requirements.',
    'Think about how your experience and skills match the qualifications and requirements, and match your resume accordingly.'
  ],
  borderColor: 'border-yellow-500',
  textColor: 'text-yellow-300'
};

export const coverLetterRequirements: IconList = {
  items: [
    'Use your Cover Letter with your Resume to convey your value.',
    'Use stories to elaborate on your resume, direct work experience, or achievements – one or two examples.',
    'Demonstrate your communication skills in writing.'
  ],
  icon: '•',
  iconColor: 'text-emerald-400',
  borderColor: 'border-emerald-500'
};

export const coverLetterDos: IconList = {
  items: [
    'Have someone proficient in English proofread it.',
    'If possible, find out the employer’s name and use it.',
    'Only include information relevant to the job – avoid unrelated stories.',
    'Mention your interest/knowledge about the company.'
  ],
  icon: '✓',
  iconColor: 'text-emerald-400',
  borderColor: 'border-rose-500'
};

export const coverLetterDonts: IconList = {
  items: [
    'Do not write "Cover Letter" on your Cover Letter.',
    'Avoid starting too many sentences with "I".',
    'Do not rely too much on spell check – it corrects words but not context.',
    'Be careful with auto-correct.',
    'Do not repeat content from your resume.',
    'Check for Canadian spelling – US and UK English differ.'
  ],
  icon: '✗',
  iconColor: 'text-emerald-300',
  borderColor: 'border-emerald-500'
};

export const resumeDonts: IconList = {
  items: [
    'Do not write the word "Resume" on your resume.',
    'Do not use more than three different font sizes.',
    'Do not write "References available upon request".',
    'Do not include your SIN (Social Insurance Number).',
    'Do not include your photo or school grades.',
    'Do not mention your age.'
  ],
  icon: '✗',
  iconColor: 'text-red-300',
  borderColor: 'border-cyan-500'
};

export const coverLetterConsiderations: IconList = {
  items: [
    'Use the same header as your resume.',
    'Font size: 11 or 12, depending on the font.',
    'Margins: 1 inch.',
    'Align text to the left.'
  ],
  icon: '•',
  iconColor: 'text-blue-400',
  borderColor: 'border-blue-500'
};

export const resumeQuestions: QuestionList = {
  questions: [
    'Q. How long does an employer spend looking at a resume?',
    'Q. How many pages should a resume be?'
  ],
  borderColor: 'border-yellow-500',
  textColor: 'text-yellow-800'
};

export const resumeRequirements: SectionWithSubSections = {
  title: 'What Should Be Included in a Resume',
  subSections: [profileSummary, workExperience, resumeComponents]
};
