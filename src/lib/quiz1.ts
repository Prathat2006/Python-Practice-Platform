import type { ProblemData } from "./pythonRunner";

export const quiz1Problems: ProblemData[] = [
  {
    title: "Sum of Non-Common Elements [2 marks]",
    description: `Find all elements that appear in one series but not the other. Remove the common ones from both sides, then print the sum of everything that remains.

Given:
\`s1 = [2, 4, 6, 8, 10]\`
\`s2 = [1, 2, 3, 4, 5]\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "33",
        isHidden: false
      }
    ]
  },
  {
    title: "Dictionary of Squares and Average [2 marks]",
    description: `Create a dictionary where keys are numbers from 1 to 25 and each value is the square of its key. Find the average of the last 10 values and print it.`,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "428.5",
        isHidden: false
      }
    ]
  },
  {
    title: "Frequency of Dictionary Values [3 marks]",
    description: `Count how many times each distinct value appears in the given dictionary. Sum up all those frequency counts and print the cube of that total.

Given:
\`{'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "512",
        isHidden: false
      }
    ]
  },
  {
    title: "Filtered List and Sum of Squares [3 marks]",
    description: `Take numbers 1 to 100 as list1. Extract numbers divisible by 4 into list2. Pick every 5th element from list2 into list3. Print the sum of squares of list3 elements.`,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "22000",
        isHidden: false
      }
    ]
  },
  {
    title: "Average Salary of Female Employees [5 marks]",
    description: `A company has 50 employees numbered 1 to 50. Salary = 80000 + ID × 100. An employee is female if their ID is divisible by 3, otherwise male. Generate this dataset using Pandas, find the average salary of female employees, round to nearest integer, and print it.`,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "82550",
        isHidden: false
      }
    ]
  },
  {
    title: "Maximum Price Difference Across Brands [5 marks]",
    description: `You have asking prices for vehicles (some brands appear more than once) and fair market prices (one per brand). For each listing, compute the absolute difference between asking and fair price for that brand. Print the maximum difference.

Given:
\`asking_prices = [5000, 7600, 9000, 8500, 7000]\` with index \`['civic','civic','camry','mustang','mustang']\`
\`fair_prices = [5500, 7500, 7500]\` with index \`['civic','mustang','camry']\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "2100",
        isHidden: false
      }
    ]
  },
  {
    title: "Difference Between Math and Science Marks [4 marks]",
    description: `For each row in the dataset, compute math marks minus science marks. Sum all those differences and print the total.

Given: 
Names = \`['John','Matt','John','Cateline']\`
math_Marks = \`[18,20,19,15]\`
science_Marks = \`[10,20,15,12]\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "15",
        isHidden: false
      }
    ]
  },
  {
    title: "Average Insurance Charges by Age Range [4 marks]",
    description: `You are given the insurance dataset (shown below). Filter it to people aged 30 to 40 (inclusive), compute the average insurance charges, round to the nearest integer, and print the result. You need to set up the DataFrame yourself from the given data.

\`\`\`python
data = {
"Age": [19, 27, 28, 33, 32, 31, 46, 37, 37],
"Insurance Charges": [16884.924, 1725.5523, 4449, 21984.47061, 3866.8552, 3756.6216, 8240.5896, 7281.5056, 6406.4107]
}
\`\`\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "8659",
        isHidden: false
      }
    ]
  },
  {
    title: "Subtract Two Pandas Series [2 marks]",
    description: `Subtract the second series from the first element-wise. Cube each element of the result and print the sum of those cubes.

Given:
\`s1 = [2, 4, 6, 8, 10]\` and \`s2 = [1, 3, 5, 7, 10]\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "4",
        isHidden: false
      }
    ]
  },
  {
    title: "Budget Difference at Maximum Sales [4 marks]",
    description: `You are given advertising data (shown below). Find the row with maximum Sales, compute TV minus Radio in that row, round to nearest integer, and print it. Set up the DataFrame yourself.

\`\`\`python
data = {
"TV": [230.1, 44.5, 17.2, 151.5, 180.8, 8.7, 57],
"Radio": [37.8, 39.3, 45.9, 41.3, 10.8, 48.9, 32],
"Sales": [22.1, 10.4, 12.0, 16.5, 17.9, 7.2, 11]
}
\`\`\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "192",
        isHidden: false
      }
    ]
  },
  {
    title: "Merge and Square the Sum [2 marks]",
    description: `You are given two lists of integers. Merge them into one list, compute the sum of all elements, and print the square of that sum.

Given:
\`a = [1, 2, 3, -7, -3, -5]\`
\`b = [14, 5, 6, 8, 9, 10]\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "1849",
        isHidden: false
      }
    ]
  },
  {
    title: "Combine Dictionaries by Adding Values [2 marks]",
    description: `Merge two dictionaries into one. If a key exists in both, add the values together. Then print the sum of all values in the combined dictionary.

Given:
\`d1 = {'a':100,'b':200,'c':300,'d':350}\`
\`d2 = {'a':150,'b':250,'e':200}\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "1550",
        isHidden: false
      }
    ]
  },
  {
    title: "Common Elements and Their Squares [2 marks]",
    description: `Find elements common to both series, keep only the ones less than 30, square them, and print the sum of those squares.

Given:
\`s1 = [12, 25, 30, 45, 50]\` and \`s2 = [10, 25, 35, 40, 50]\``,
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "625",
        isHidden: false
      }
    ]
  }
];
