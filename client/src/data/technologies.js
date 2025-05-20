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
                component: 'QuizLayout',
                questions: [
                  {
                    question: 'JavaScript is a statically typed language.',
                    answer: false
                  },
                  {
                    question: 'The typeof null is "object".',
                    answer: true
                  },
                  {
                    question: 'Strings in JavaScript are immutable.',
                    answer: true
                  },
                  {
                    question: 'The value NaN is equal to itself (NaN === NaN).',
                    answer: false
                  },
                  {
                    question: 'typeof undefined returns "undefined".',
                    answer: true
                  },
                  {
                    question: 'Numbers in JavaScript can be written with or without decimals.',
                    answer: true
                  },
                  {
                    question: 'Booleans in JavaScript can only be true or false.',
                    answer: true
                  }
                ]
              },
              'multiple-choice-quiz': {
                title: 'Multiple Choice Quiz',
                component: 'MultipleChoiceLayout',
                questions: [
                  {
                    question: 'Which of the following is NOT a primitive type in JavaScript?',
                    options: ['String', 'Number', 'Boolean', 'Function'],
                    answer: 'Function'
                  },
                  {
                    question: 'What is the result of typeof NaN?',
                    options: ['"undefined"', '"object"', '"number"', '"NaN"'],
                    answer: '"number"'
                  },
                  {
                    question: 'Which operator is used to assign a value to a variable?',
                    options: ['=', '==', '===', ':='],
                    answer: '='
                  },
                  {
                    question: 'What will be the output of: console.log(typeof null);',
                    options: ['"null"', '"object"', '"undefined"', '"number"'],
                    answer: '"object"'
                  },
                  {
                    question: 'Which value is NOT falsy in JavaScript?',
                    options: ['0', '""', 'null', '"false"'],
                    answer: '"false"'
                  }
                ]
              },
              'code-challenges': {
                title: 'Code Challenges',
                component: 'CodeChallengeLayout',
                challenges: [
                  {
                    prompt: 'Write a function that returns the sum of two numbers.',
                    solution: `function sum(a, b) {
  return a + b;
}`
                  },
                  {
                    prompt: 'Write a function that checks if a value is of type string.',
                    solution: `function isString(val) {
  return typeof val === 'string';
}`
                  },
                  {
                    prompt: 'Write a function that returns true if a number is even.',
                    solution: `function isEven(n) {
  return n % 2 === 0;
}`
                  }
                ]
              },
              'step-by-step': {
                title: 'Step by Step',
                component: 'StepByStepLayout',
                steps: [
                  {
                    title: 'Step 1: Define the Function',
                    content: 'Start by creating a function named `sum` that takes two parameters.'
                  },
                  {
                    title: 'Step 2: Add the Return Statement',
                    content: 'Inside the function, return the sum of the two parameters using the `+` operator.'
                  },
                  {
                    title: 'Step 3: Test the Function',
                    content: 'Call your function with arguments like `sum(2, 3)` and check if it returns `5`.'
                  },
                  {
                    title: 'Step 4: Handle Edge Cases',
                    content: 'Think about what happens if you pass non-number arguments. How could you improve your function?'
                  },
                  {
                    title: 'Step 5: Final Solution',
                    content: 'A simple solution:\n\n```js\nfunction sum(a, b) {\n  return a + b;\n}\n```'
                  }
                ]
              }
            }
          },
          'chapter-2': {
            title: 'Program Structure',
            features: {
              'true-false-quiz': {
                title: 'True/False Quiz',
                component: 'QuizLayout',
                questions: [
                  {
                    question: 'A JavaScript statement always ends with a semicolon.',
                    answer: false
                  },
                  {
                    question: 'You can declare a variable using the let keyword.',
                    answer: true
                  },
                  {
                    question: 'Blocks in JavaScript are defined using curly braces {}.',
                    answer: true
                  },
                  {
                    question: 'Comments in JavaScript can only be written with //.',
                    answer: false
                  },
                  {
                    question: 'The keyword "const" creates a variable whose value can be changed later.',
                    answer: false
                  },
                  {
                    question: 'Whitespace is ignored outside of strings in JavaScript.',
                    answer: true
                  },
                  {
                    question: 'You can nest blocks inside other blocks.',
                    answer: true
                  }
                ]
              }
            }
          }
        }
      }
    }
  },
  python: {
    title: 'Python',
    books: {
      'automate-the-boring-stuff': {
        title: 'Automate the Boring Stuff',
        chapters: {
          'chapter-1': {
            title: 'Python Basics',
            features: {
              'true-false-quiz': {
                title: 'True/False Quiz',
                component: 'QuizLayout',
                questions: [
                  {
                    question: 'Python uses indentation to define code blocks.',
                    answer: true
                  },
                  {
                    question: 'In Python, variables must be declared with a type.',
                    answer: false
                  },
                  {
                    question: 'The print() function outputs text to the console.',
                    answer: true
                  },
                  {
                    question: 'Python is case-sensitive.',
                    answer: true
                  },
                  {
                    question: 'The # symbol is used for comments in Python.',
                    answer: true
                  }
                ]
              }
            }
          },
          'chapter-2': {
            title: 'Flow Control',
            features: {
              'true-false-quiz': {
                title: 'True/False Quiz',
                component: 'QuizLayout',
                questions: [
                  {
                    question: 'The if statement is used for conditional execution.',
                    answer: true
                  },
                  {
                    question: 'Python does not support while loops.',
                    answer: false
                  },
                  {
                    question: 'elif is used for else-if conditions in Python.',
                    answer: true
                  },
                  {
                    question: 'You can use break to exit a loop early.',
                    answer: true
                  },
                  {
                    question: 'The pass statement does nothing.',
                    answer: true
                  }
                ]
              }
            }
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
        chapters: {
          'chapter-1': {
            title: 'Learning the Shell',
            features: {
              'true-false-quiz': {
                title: 'True/False Quiz',
                component: 'QuizLayout',
                questions: [
                  {
                    question: 'The Linux shell is a command-line interpreter.',
                    answer: true
                  },
                  {
                    question: 'The ls command lists files and directories.',
                    answer: true
                  },
                  {
                    question: 'Linux commands are case-insensitive.',
                    answer: false
                  },
                  {
                    question: 'You can use the cd command to change directories.',
                    answer: true
                  },
                  {
                    question: 'The pwd command prints the current working directory.',
                    answer: true
                  }
                ]
              }
            }
          },
          'chapter-2': {
            title: 'Navigation',
            features: {
              'true-false-quiz': {
                title: 'True/False Quiz',
                component: 'QuizLayout',
                questions: [
                  {
                    question: 'The cd command can be used with .. to go up one directory.',
                    answer: true
                  },
                  {
                    question: 'Absolute paths start with a / (slash) in Linux.',
                    answer: true
                  },
                  {
                    question: 'The ~ symbol refers to the root directory.',
                    answer: false
                  },
                  {
                    question: 'Tab completion can help finish typing file and directory names.',
                    answer: true
                  },
                  {
                    question: 'The clear command deletes all files in the current directory.',
                    answer: false
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
};