export const technologies = {
  javascript: {
    title: 'JavaScript',
    books: {
      'eloquent-javascript': {
        title: 'Eloquent JavaScript',
        chapters: {
          'chapter-1': {
            title: 'Values, Types, and Operators',
            features: {
              'true-false-quiz': {
                title: 'True/False Quiz',
                component: 'QuizLayout'
              }
              // More features...
            }
          },
          'chapter-2': {
            title: 'Program Structure',
            features: {
              'true-false-quiz': {
                title: 'True/False Quiz',
                component: 'QuizLayout'
              }
            }
          }
          // More chapters...
        }
      }
      // More books...
    }
  },
  python: {
    title: 'Python',
    books: {
      'automate-the-boring-stuff': {
        title: 'Automate the Boring Stuff',
        features: {
          'true-false-quiz': {
            title: 'True/False Quiz',
            component: 'QuizLayout'
          }
        }
      }
    }
  },
  linux: {
    title: 'Linux',
    books: {
      'the-linux-command-line': {
        title: 'The Linux Command Line',
        features: {
          'true-false-quiz': {
            title: 'True/False Quiz',
            component: 'QuizLayout'
          }
          // Add more features here
        }
      }
      // Add more books here
    }
  }
  // Add more languages as needed
};